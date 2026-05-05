(function () {
  const STRENGTH = 0.35;   // how far the button moves (0 = none, 1 = full pull)
  const RADIUS   = 90;     // pixel distance from button center to start pulling

  function initMagnetic() {
    // Target every button, anchor styled as button, and nav link
    const targets = document.querySelectorAll(
      'a, button, .btn, [class*="button"], [class*="cta"]'
    );

    targets.forEach(el => {
      // Skip tiny inline links — only affect block-ish elements
      el.addEventListener('mousemove', onMove);
      el.addEventListener('mouseleave', onLeave);
    });
  }

  function onMove(e) {
    const el = this;
    const rect = el.getBoundingClientRect();

    const cx = rect.left + rect.width  / 2;
    const cy = rect.top  + rect.height / 2;

    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < RADIUS) {
      const pull = (1 - dist / RADIUS) * STRENGTH;
      const moveX = dx * pull * 1.6;
      const moveY = dy * pull * 1.6;

      el.style.transform    = `translate(${moveX}px, ${moveY}px)`;
      el.style.transition   = 'transform 0.15s ease';
    }
  }

  function onLeave() {
    this.style.transform  = 'translate(0, 0)';
    this.style.transition = 'transform 0.45s cubic-bezier(0.23, 1, 0.32, 1)';
  }

  // Run after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMagnetic);
  } else {
    initMagnetic();
  }
})();
