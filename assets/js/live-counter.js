(function () {
  const CITY_DOTS = [
    { x: 48, y: 28 },  // London
    { x: 51, y: 26 },  // Berlin
    { x: 43, y: 26 },  // Paris
    { x: 78, y: 30 },  // Moscow
    { x: 55, y: 38 },  // Dubai
    { x: 72, y: 42 },  // India
    { x: 85, y: 35 },  // Beijing
    { x: 89, y: 38 },  // Tokyo
    { x: 87, y: 55 },  // Sydney
    { x: 22, y: 28 },  // New York
    { x: 18, y: 32 },  // Chicago
    { x: 13, y: 35 },  // LA
    { x: 20, y: 45 },  // Sao Paulo
    { x: 50, y: 48 },  // Nairobi
    { x: 15, y: 25 },  // Toronto
  ];

  let currentCount = 1847 + Math.floor(Math.random() * 400);
  let displayCount = currentCount;
  let animFrame;

  function formatNumber(n) {
    return n.toLocaleString();
  }

  function animateCount(from, to, el) {
    const diff = to - from;
    const duration = 800;
    const start = performance.now();

    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(from + diff * ease);
      el.textContent = formatNumber(current);
      if (progress < 1) animFrame = requestAnimationFrame(step);
      else displayCount = to;
    }

    cancelAnimationFrame(animFrame);
    requestAnimationFrame(step);
  }

  function nudgeCount() {
    const el = document.getElementById('aurix-live-count');
    if (!el) return;
    const change = Math.floor(Math.random() * 7) - 2; // -2 to +4
    const newCount = Math.max(1200, currentCount + change);
    animateCount(displayCount, newCount, el);
    currentCount = newCount;
    setTimeout(nudgeCount, 2000 + Math.random() * 2000);
  }

  function spawnBlip(svgEl) {
    const dot = CITY_DOTS[Math.floor(Math.random() * CITY_DOTS.length)];
    const svgW = svgEl.viewBox.baseVal.width || 200;
    const svgH = svgEl.viewBox.baseVal.height || 100;
    const cx = (dot.x / 100) * svgW;
    const cy = (dot.y / 100) * svgH;

    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');

    // Pulse ring
    const ring = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    ring.setAttribute('cx', cx);
    ring.setAttribute('cy', cy);
    ring.setAttribute('r', '1');
    ring.setAttribute('fill', 'none');
    ring.setAttribute('stroke', '#00f0ff');
    ring.setAttribute('stroke-width', '0.5');
    ring.setAttribute('opacity', '0.8');

    // Core dot
    const core = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    core.setAttribute('cx', cx);
    core.setAttribute('cy', cy);
    core.setAttribute('r', '1.2');
    core.setAttribute('fill', '#00f0ff');
    core.setAttribute('opacity', '0.9');

    g.appendChild(ring);
    g.appendChild(core);
    svgEl.appendChild(g);

    // Animate ring expand + fade
    let size = 1;
    let opacity = 0.8;
    const expand = setInterval(() => {
      size += 0.3;
      opacity -= 0.04;
      ring.setAttribute('r', size);
      ring.setAttribute('opacity', Math.max(0, opacity));
      if (opacity <= 0) {
        clearInterval(expand);
        setTimeout(() => {
          // Fade core out
          let coreOpacity = 0.9;
          const fadeOut = setInterval(() => {
            coreOpacity -= 0.1;
            core.setAttribute('opacity', Math.max(0, coreOpacity));
            if (coreOpacity <= 0) {
              clearInterval(fadeOut);
              g.remove();
            }
          }, 60);
        }, 600);
      }
    }, 40);
  }

  function startBlips(svgEl) {
    function loop() {
      spawnBlip(svgEl);
      setTimeout(loop, 600 + Math.random() * 1000);
    }
    loop();
  }

  function init() {
    const el = document.getElementById('aurix-live-count');
    const svg = document.getElementById('aurix-world-svg');
    if (!el || !svg) return;

    el.textContent = formatNumber(currentCount);
    displayCount = currentCount;

    setTimeout(nudgeCount, 1500);
    startBlips(svg);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
