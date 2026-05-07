(function () {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  canvas.style.cssText = `
    position: fixed;
    top: 0; left: 0;
    width: 100vw; height: 100vh;
    pointer-events: none;
    z-index: 99999;
  `;
  document.body.appendChild(canvas);

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const trail = [];
  const MAX = 28;
  let mouse = { x: -200, y: -200 };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    trail.push({ x: e.clientX, y: e.clientY, age: 0 });
    if (trail.length > MAX) trail.shift();
  });

  // Custom dot cursor
  const dot = document.createElement('div');
  dot.style.cssText = `
    position: fixed;
    width: 10px; height: 10px;
    background: #00f0ff;
    border-radius: 50%;
    pointer-events: none;
    z-index: 100000;
    transform: translate(-50%, -50%);
    transition: transform 0.1s ease;
    box-shadow: 0 0 8px rgba(0, 240, 255, 0.6);
  `;
  document.body.appendChild(dot);
  document.body.style.cursor = 'none';

  window.addEventListener('mousemove', (e) => {
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    dot.style.opacity = '1';
  });

  // Hide dot during scroll, restore on next mouse move
  let scrollTimer;
  window.addEventListener('scroll', () => {
    dot.style.opacity = '0';
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      dot.style.opacity = '1';
    }, 200);
  }, { passive: true });

  // Make dot grow on hoverable elements
  document.querySelectorAll('a, button, [role="button"]').forEach(el => {
    el.addEventListener('mouseenter', () => {
      dot.style.transform = 'translate(-50%, -50%) scale(2.5)';
    });
    el.addEventListener('mouseleave', () => {
      dot.style.transform = 'translate(-50%, -50%) scale(1)';
    });
  });

  function hsl(index, total) {
    const hue = (index / total) * 360;
    return `hsl(${hue}, 100%, 60%)`;
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < trail.length; i++) {
      const point = trail[i];
      const progress = i / trail.length;
      const radius = progress * 7;
      const alpha = progress * 0.8;

      ctx.beginPath();
      ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = hsl(i, trail.length);
      ctx.globalAlpha = alpha;
      ctx.fill();
    }

    ctx.globalAlpha = 1;

    // Age out and shrink trail when mouse is idle
    if (trail.length > 0) {
      trail[0].age++;
      if (trail[0].age > 8) trail.shift();
    }

    requestAnimationFrame(draw);
  }

  draw();
})();
