(function () {
  if (!window.AurixCatalog) return;

  const MAX = 2;
  let selected = [];

  // ── Inject styles ──
  const style = document.createElement('style');
  style.textContent = `
    .product-card { position: relative; }
    .cmp-btn {
      position: absolute; top: 10px; right: 10px;
      width: 30px; height: 30px; border-radius: 50%;
      border: 1px solid #2a2a2a; background: rgba(6,6,6,0.8);
      color: #444; font-size: 16px; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      z-index: 10; transition: all 0.2s; backdrop-filter: blur(4px);
      font-family: monospace; line-height: 1;
    }
    .cmp-btn:hover { border-color: #00f0ff; color: #00f0ff; }
    .cmp-btn.cmp-active { border-color: #00f0ff; background: rgba(0,240,255,0.15); color: #00f0ff; }
    .product-card.cmp-selected { outline: 1.5px solid #00f0ff; outline-offset: 3px; border-radius: 14px; }

    .cmp-bar {
      position: fixed; bottom: 0; left: 0; right: 0;
      background: #0a0a0a; border-top: 1px solid #1e1e1e;
      padding: 12px 24px; display: flex; align-items: center;
      gap: 14px; z-index: 9000; font-family: 'Space Grotesk', sans-serif;
      transform: translateY(100%);
      transition: transform 0.35s cubic-bezier(0.23, 1, 0.32, 1);
    }
    .cmp-bar.show { transform: translateY(0); }
    .cmp-slots { display: flex; gap: 10px; }
    .cmp-slot {
      width: 52px; height: 52px; border: 1px dashed #2a2a2a;
      border-radius: 10px; display: flex; align-items: center;
      justify-content: center; color: #2a2a2a; font-size: 20px;
      position: relative; overflow: hidden; flex-shrink: 0;
      background: #111;
    }
    .cmp-slot img { width: 100%; height: 100%; object-fit: contain; }
    .cmp-slot-x {
      position: absolute; top: 1px; right: 1px; width: 16px; height: 16px;
      border-radius: 50%; background: #f87171; color: #fff; font-size: 9px;
      display: flex; align-items: center; justify-content: center;
      cursor: pointer; border: none; line-height: 1;
    }
    .cmp-bar-label { font-size: 13px; color: #444; flex: 1; }
    .cmp-bar-label strong { color: #aaa; }
    .cmp-now-btn {
      padding: 10px 24px; border-radius: 999px; background: #00f0ff;
      color: #000; font-weight: 700; font-size: 13px; cursor: pointer;
      border: none; font-family: 'Space Grotesk', sans-serif; white-space: nowrap;
      transition: opacity 0.2s; opacity: 0.4; pointer-events: none;
    }
    .cmp-now-btn.ready { opacity: 1; pointer-events: auto; }
    .cmp-clear-btn {
      padding: 10px 16px; border-radius: 999px; background: transparent;
      color: #444; font-size: 13px; cursor: pointer;
      border: 1px solid #222; font-family: 'Space Grotesk', sans-serif;
      transition: all 0.2s;
    }
    .cmp-clear-btn:hover { color: #f87171; border-color: #f87171; }

    .cmp-modal {
      position: fixed; inset: 0; background: rgba(0,0,0,0.96);
      z-index: 10000; display: none; flex-direction: column; overflow-y: auto;
    }
    .cmp-modal.show { display: flex; }
    .cmp-modal-header {
      position: sticky; top: 0; background: #080808;
      border-bottom: 1px solid #1a1a1a; padding: 16px 24px;
      display: flex; align-items: center; justify-content: space-between;
      z-index: 1; flex-shrink: 0;
    }
    .cmp-modal-title {
      font-family: 'Sora', sans-serif; font-size: 1rem;
      font-weight: 700; color: #fff;
    }
    .cmp-close {
      width: 36px; height: 36px; border-radius: 50%;
      border: 1px solid #2a2a2a; background: transparent;
      color: #666; font-size: 18px; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: all 0.2s;
    }
    .cmp-close:hover { border-color: #fff; color: #fff; }
    .cmp-modal-body {
      padding: 32px 24px; max-width: 860px;
      margin: 0 auto; width: 100%;
    }

    .cmp-products {
      display: grid; grid-template-columns: 1fr 1fr;
      gap: 16px; margin-bottom: 28px;
    }
    .cmp-prod-card {
      background: #0f0f0f; border: 1px solid #1e1e1e;
      border-radius: 14px; padding: 20px; text-align: center;
    }
    .cmp-prod-img {
      width: 100%; height: 150px; object-fit: contain;
      background: #080808; border-radius: 8px; margin-bottom: 14px;
    }
    .cmp-prod-badge {
      display: inline-block; font-size: 11px; padding: 3px 10px;
      border-radius: 999px; border: 1px solid rgba(0,240,255,0.25);
      color: #00f0ff; background: rgba(0,240,255,0.08); margin-bottom: 8px;
    }
    .cmp-prod-name {
      font-family: 'Sora', sans-serif; font-weight: 700;
      font-size: 17px; color: #fff; margin-bottom: 4px;
    }
    .cmp-prod-price { font-size: 20px; font-weight: 700; color: #fff; margin-bottom: 14px; }
    .cmp-prod-btn {
      width: 100%; padding: 10px; border-radius: 8px;
      background: linear-gradient(135deg, #00c851, #00e676);
      border: none; color: #000; font-weight: 700; font-size: 13px;
      cursor: pointer; font-family: 'Space Grotesk', sans-serif;
      text-decoration: none; display: block;
    }

    .cmp-section-label {
      font-size: 11px; color: #333; letter-spacing: 0.12em;
      text-transform: uppercase; margin-bottom: 12px;
    }
    .cmp-table {
      background: #0a0a0a; border: 1px solid #141414;
      border-radius: 14px; overflow: hidden; margin-bottom: 28px;
    }
    .cmp-table-head {
      display: grid; grid-template-columns: 160px 1fr 1fr;
      padding: 10px 20px; background: #111;
      border-bottom: 1px solid #1a1a1a;
      font-size: 11px; color: #333; letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .cmp-row {
      display: grid; grid-template-columns: 160px 1fr 1fr;
      padding: 13px 20px; border-bottom: 1px solid #0f0f0f;
      align-items: center;
    }
    .cmp-row:last-child { border-bottom: none; }
    .cmp-row.diff { background: rgba(0,240,255,0.03); }
    .cmp-row-label { font-size: 12px; color: #444; }
    .cmp-row-val { font-size: 13px; color: #666; padding-right: 12px; }
    .cmp-row.diff .cmp-row-val { color: #00f0ff; }
    .diff-dot {
      display: inline-block; width: 5px; height: 5px;
      border-radius: 50%; background: #00f0ff;
      margin-left: 6px; vertical-align: middle;
    }

    .cmp-features { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    .cmp-feat-col { background: #0a0a0a; border: 1px solid #141414; border-radius: 14px; padding: 20px; }
    .cmp-feat-name { font-weight: 600; font-size: 14px; color: #fff; margin-bottom: 12px; }
    .cmp-feat-item { font-size: 13px; color: #555; padding: 6px 0; border-bottom: 1px solid #111; display: flex; gap: 8px; align-items: flex-start; }
    .cmp-feat-item:last-child { border-bottom: none; }
    .cmp-feat-item::before { content: '→'; color: #00f0ff; flex-shrink: 0; font-size: 11px; margin-top: 1px; }

    @media (max-width: 600px) {
      .cmp-products { grid-template-columns: 1fr; }
      .cmp-table-head, .cmp-row { grid-template-columns: 100px 1fr 1fr; }
      .cmp-features { grid-template-columns: 1fr; }
    }
  `;
  document.head.appendChild(style);

  // ── Bar ──
  const bar = document.createElement('div');
  bar.className = 'cmp-bar';
  bar.innerHTML = `
    <div class="cmp-slots">
      <div class="cmp-slot" id="cmp-slot-0">+</div>
      <div class="cmp-slot" id="cmp-slot-1">+</div>
    </div>
    <span class="cmp-bar-label">Select <strong>2 products</strong> to compare</span>
    <button class="cmp-clear-btn" id="cmp-clear">Clear</button>
    <button class="cmp-now-btn" id="cmp-now">Compare now →</button>
  `;
  document.body.appendChild(bar);

  // ── Modal ──
  const modal = document.createElement('div');
  modal.className = 'cmp-modal';
  modal.id = 'cmp-modal';
  document.body.appendChild(modal);

  // ── State management ──
  function getProduct(slug) {
    return window.AurixCatalog.find(p => p.slug === slug);
  }

  function updateBar() {
    const slot0 = document.getElementById('cmp-slot-0');
    const slot1 = document.getElementById('cmp-slot-1');
    const nowBtn = document.getElementById('cmp-now');
    const label = bar.querySelector('.cmp-bar-label');

    [slot0, slot1].forEach((slot, i) => {
      const slug = selected[i];
      if (slug) {
        const p = getProduct(slug);
        slot.innerHTML = `
          <img src="${p.image}" alt="${p.name}" />
          <button class="cmp-slot-x" data-slug="${slug}">✕</button>
        `;
        slot.querySelector('.cmp-slot-x').addEventListener('click', (e) => {
          e.stopPropagation();
          removeProduct(slug);
        });
      } else {
        slot.innerHTML = '+';
      }
    });

    if (selected.length === 0) {
      bar.classList.remove('show');
    } else {
      bar.classList.add('show');
    }

    if (selected.length === 2) {
      nowBtn.classList.add('ready');
      label.innerHTML = `Ready to <strong>compare</strong>`;
    } else {
      nowBtn.classList.remove('ready');
      const remaining = MAX - selected.length;
      label.innerHTML = `Select <strong>${remaining} more</strong> product${remaining > 1 ? 's' : ''}`;
    }
  }

  function addProduct(slug) {
    if (selected.includes(slug) || selected.length >= MAX) return;
    selected.push(slug);
    updateBar();
    updateCardStates();
  }

  function removeProduct(slug) {
    selected = selected.filter(s => s !== slug);
    updateBar();
    updateCardStates();
  }

  function clearAll() {
    selected = [];
    updateBar();
    updateCardStates();
  }

  function updateCardStates() {
    document.querySelectorAll('.product-card[data-slug]').forEach(card => {
      const slug = card.dataset.slug;
      const btn = card.querySelector('.cmp-btn');
      const isSelected = selected.includes(slug);
      card.classList.toggle('cmp-selected', isSelected);
      if (btn) {
        btn.classList.toggle('cmp-active', isSelected);
        btn.title = isSelected ? 'Remove from comparison' : 'Add to comparison';
        btn.textContent = isSelected ? '✓' : '+';
      }
    });
  }

  // ── Inject compare buttons into cards ──
  function injectButtons() {
    document.querySelectorAll('.product-card').forEach(card => {
      if (card.querySelector('.cmp-btn')) return;
      const link = card.querySelector('a');
      if (!link) return;

      const href = link.getAttribute('href') || '';
      const match = href.match(/slug=([^&]+)/);
      if (!match) return;
      const slug = match[1];
      card.dataset.slug = slug;

      const btn = document.createElement('button');
      btn.className = 'cmp-btn';
      btn.textContent = '+';
      btn.title = 'Add to comparison';
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (selected.includes(slug)) {
          removeProduct(slug);
        } else if (selected.length < MAX) {
          addProduct(slug);
        }
      });

      const visual = card.querySelector('.product-card-visual');
      if (visual) visual.appendChild(btn);
      else card.appendChild(btn);
    });
    updateCardStates();
  }

  // ── Comparison modal ──
  function buildModal() {
    const [p1, p2] = selected.map(getProduct);
    if (!p1 || !p2) return;

    const allKeys = [...new Set([...Object.keys(p1.specs), ...Object.keys(p2.specs)])];

    const rows = allKeys.map(key => {
      const v1 = p1.specs[key] || '—';
      const v2 = p2.specs[key] || '—';
      const isDiff = v1 !== v2;
      return `
        <div class="cmp-row ${isDiff ? 'diff' : ''}">
          <span class="cmp-row-label">${key}${isDiff ? '<span class="diff-dot"></span>' : ''}</span>
          <span class="cmp-row-val">${v1}</span>
          <span class="cmp-row-val">${v2}</span>
        </div>
      `;
    }).join('');

    modal.innerHTML = `
      <div class="cmp-modal-header">
        <span class="cmp-modal-title">Comparing ${p1.name} vs ${p2.name}</span>
        <button class="cmp-close" id="cmp-modal-close">✕</button>
      </div>
      <div class="cmp-modal-body">

        <div class="cmp-products">
          ${[p1, p2].map(p => `
            <div class="cmp-prod-card">
              <img class="cmp-prod-img" src="${p.image}" alt="${p.name}" />
              <div class="cmp-prod-badge">${p.badge}</div>
              <div class="cmp-prod-name">${p.name}</div>
              <div class="cmp-prod-price">$${p.price} <span style="font-size:13px;color:#444;text-decoration:line-through">$${p.originalPrice}</span></div>
              <a class="cmp-prod-btn" href="checkout.html?slug=${p.slug}">Buy → $${p.price}</a>
            </div>
          `).join('')}
        </div>

        <p class="cmp-section-label">Specifications — <span style="color:#00f0ff">cyan = different</span></p>
        <div class="cmp-table">
          <div class="cmp-table-head">
            <span>Spec</span>
            <span>${p1.name}</span>
            <span>${p2.name}</span>
          </div>
          ${rows}
        </div>

        <p class="cmp-section-label">Key features</p>
        <div class="cmp-features">
          ${[p1, p2].map(p => `
            <div class="cmp-feat-col">
              <div class="cmp-feat-name">${p.name}</div>
              ${p.features.map(f => `<div class="cmp-feat-item">${f}</div>`).join('')}
            </div>
          `).join('')}
        </div>

      </div>
    `;

    modal.classList.add('show');
    document.getElementById('cmp-modal-close').addEventListener('click', () => {
      modal.classList.remove('show');
    });
  }

  // ── Event listeners ──
  document.getElementById('cmp-now').addEventListener('click', () => {
    if (selected.length === 2) buildModal();
  });

  document.getElementById('cmp-clear').addEventListener('click', clearAll);

  // Close modal on background click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('show');
  });

  // ── Init + watch for dynamic cards ──
  function init() {
    injectButtons();
    const observer = new MutationObserver(injectButtons);
    const grid = document.querySelector('[data-products-grid], [data-featured-grid], .product-grid');
    if (grid) observer.observe(grid, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Re-inject after main.js renders featured grid
  window.addEventListener('load', injectButtons);
})();
