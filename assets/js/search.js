(function () {
  if (!window.AurixCatalog) return;

  const style = document.createElement('style');
  style.textContent = `
    .search-wrap {
      position: relative;
    }
    .search-toggle {
      width: 36px; height: 36px; border-radius: 50%;
      border: 1px solid #2a2a2a; background: transparent;
      color: #666; cursor: pointer; display: flex;
      align-items: center; justify-content: center;
      font-size: 16px; transition: all 0.2s;
      font-family: 'Space Grotesk', sans-serif;
    }
    .search-toggle:hover { border-color: #00f0ff; color: #00f0ff; }
    .search-box {
      position: absolute; top: 44px; right: 0;
      width: 320px; background: #0f0f0f;
      border: 1px solid #1e1e1e; border-radius: 14px;
      overflow: hidden; z-index: 9999;
      opacity: 0; transform: translateY(-8px) scale(0.98);
      pointer-events: none;
      transition: opacity 0.2s ease, transform 0.2s ease;
      box-shadow: 0 20px 60px rgba(0,0,0,0.6);
    }
    .search-box.open {
      opacity: 1; transform: translateY(0) scale(1);
      pointer-events: auto;
    }
    .search-input-wrap {
      display: flex; align-items: center; gap: 10px;
      padding: 12px 16px; border-bottom: 1px solid #1a1a1a;
    }
    .search-icon { color: #333; font-size: 14px; flex-shrink: 0; }
    .search-input {
      flex: 1; background: transparent; border: none;
      outline: none; color: #fff; font-size: 14px;
      font-family: 'Space Grotesk', sans-serif;
    }
    .search-input::placeholder { color: #2a2a2a; }
    .search-kbd {
      font-size: 10px; color: #2a2a2a; border: 1px solid #1e1e1e;
      border-radius: 4px; padding: 2px 6px; font-family: monospace;
      flex-shrink: 0;
    }
    .search-results { max-height: 340px; overflow-y: auto; }
    .search-results::-webkit-scrollbar { width: 4px; }
    .search-results::-webkit-scrollbar-track { background: transparent; }
    .search-results::-webkit-scrollbar-thumb { background: #1e1e1e; border-radius: 2px; }
    .search-empty {
      padding: 24px 16px; text-align: center;
      font-size: 13px; color: #2a2a2a;
    }
    .search-category {
      font-size: 10px; color: #2a2a2a; letter-spacing: 0.1em;
      text-transform: uppercase; padding: 10px 16px 4px;
    }
    .search-result {
      display: flex; align-items: center; gap: 12px;
      padding: 10px 16px; text-decoration: none;
      transition: background 0.15s; cursor: pointer;
      border-bottom: 1px solid #111;
    }
    .search-result:last-child { border-bottom: none; }
    .search-result:hover, .search-result.active {
      background: #141414;
    }
    .search-result-img {
      width: 44px; height: 44px; border-radius: 8px;
      object-fit: contain; background: #0a0a0a; flex-shrink: 0;
    }
    .search-result-info { flex: 1; min-width: 0; }
    .search-result-name {
      font-size: 13px; font-weight: 600; color: #fff;
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    }
    .search-result-name mark {
      background: rgba(0,240,255,0.15); color: #00f0ff;
      border-radius: 2px; padding: 0 2px;
    }
    .search-result-sub { font-size: 11px; color: #444; margin-top: 2px; }
    .search-result-price {
      font-size: 13px; font-weight: 700; color: #fff;
      flex-shrink: 0;
    }
    .search-footer {
      padding: 10px 16px; border-top: 1px solid #111;
      display: flex; justify-content: space-between;
      font-size: 11px; color: #2a2a2a;
    }
    .search-footer span { display: flex; align-items: center; gap: 4px; }
  `;
  document.head.appendChild(style);

  // ── Inject into nav ──
  function injectSearchUI() {
    const navActions = document.querySelector('.nav-actions');
    if (!navActions || document.getElementById('search-wrap')) return;

    const wrap = document.createElement('div');
    wrap.className = 'search-wrap';
    wrap.id = 'search-wrap';
    wrap.innerHTML = `
      <button class="search-toggle" id="search-toggle" title="Search products">⌕</button>
      <div class="search-box" id="search-box">
        <div class="search-input-wrap">
          <span class="search-icon">⌕</span>
          <input class="search-input" id="search-input" placeholder="Search keyboards, mice, accessories..." autocomplete="off" />
          <span class="search-kbd">ESC</span>
        </div>
        <div class="search-results" id="search-results">
          <div class="search-empty">Start typing to search products</div>
        </div>
        <div class="search-footer">
          <span>↑↓ navigate</span>
          <span>↵ open</span>
          <span>ESC close</span>
        </div>
      </div>
    `;

    navActions.insertBefore(wrap, navActions.firstChild);
    initSearch();
  }

  function highlight(text, query) {
    if (!query) return text;
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return text.replace(new RegExp(`(${escaped})`, 'gi'), '<mark>$1</mark>');
  }

  function renderResults(query) {
    const container = document.getElementById('search-results');
    if (!container) return;

    const q = query.trim().toLowerCase();

    if (!q) {
      container.innerHTML = '<div class="search-empty">Start typing to search products</div>';
      return;
    }

    const results = window.AurixCatalog.filter(p => {
      return (
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.badge.toLowerCase().includes(q) ||
        p.features.some(f => f.toLowerCase().includes(q))
      );
    });

    if (!results.length) {
      container.innerHTML = `<div class="search-empty">No results for "<strong style="color:#555">${query}</strong>"</div>`;
      return;
    }

    // Group by category
    const grouped = {};
    results.forEach(p => {
      if (!grouped[p.category]) grouped[p.category] = [];
      grouped[p.category].push(p);
    });

    const categoryLabels = { keyboard: 'Keyboards', mouse: 'Mice', accessory: 'Accessories' };

    container.innerHTML = Object.entries(grouped).map(([cat, products]) => `
      <div class="search-category">${categoryLabels[cat] || cat}</div>
      ${products.map(p => `
        <a class="search-result" href="product.html?slug=${p.slug}">
          <img class="search-result-img" src="${p.image}" alt="${p.name}" />
          <div class="search-result-info">
            <div class="search-result-name">${highlight(p.name, query)}</div>
            <div class="search-result-sub">${p.tagline}</div>
          </div>
          <div class="search-result-price">$${p.price}</div>
        </a>
      `).join('')}
    `).join('');
  }

  let activeIndex = -1;

  function getResultLinks() {
    return Array.from(document.querySelectorAll('.search-result'));
  }

  function setActive(index) {
    const links = getResultLinks();
    links.forEach(l => l.classList.remove('active'));
    if (index >= 0 && index < links.length) {
      links[index].classList.add('active');
      links[index].scrollIntoView({ block: 'nearest' });
    }
    activeIndex = index;
  }

  function openBox() {
    const box = document.getElementById('search-box');
    const input = document.getElementById('search-input');
    if (box) box.classList.add('open');
    if (input) setTimeout(() => input.focus(), 50);
    activeIndex = -1;
  }

  function closeBox() {
    const box = document.getElementById('search-box');
    if (box) box.classList.remove('open');
    activeIndex = -1;
  }

  function initSearch() {
    const toggle = document.getElementById('search-toggle');
    const box = document.getElementById('search-box');
    const input = document.getElementById('search-input');

    if (!toggle || !box || !input) return;

    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      box.classList.contains('open') ? closeBox() : openBox();
    });

    input.addEventListener('input', () => {
      activeIndex = -1;
      renderResults(input.value);
    });

    input.addEventListener('keydown', (e) => {
      const links = getResultLinks();
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActive(Math.min(activeIndex + 1, links.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActive(Math.max(activeIndex - 1, 0));
      } else if (e.key === 'Enter') {
        if (activeIndex >= 0 && links[activeIndex]) {
          links[activeIndex].click();
        }
      } else if (e.key === 'Escape') {
        closeBox();
      }
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!box.contains(e.target) && e.target !== toggle) closeBox();
    });

    // Keyboard shortcut: / to open search
    document.addEventListener('keydown', (e) => {
      if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault();
        openBox();
      }
    });
  }

  // Init after load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectSearchUI);
  } else {
    injectSearchUI();
  }
  window.addEventListener('load', injectSearchUI);

})();
