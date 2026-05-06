(function () {
  let ctx = null;
  let isPlaying = false;
  let masterGain = null;
  let nextKeyTime = 0;
  let scheduleTimer = null;
  let fadeInterval = null;
  const overlay = document.createElement('div');

  overlay.style.cssText = `
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0);
    pointer-events: none;
    z-index: 9998;
    transition: background 1.2s ease;
  `;
  document.body.appendChild(overlay);

  function getCtx() {
    if (!ctx) {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
      masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0, ctx.currentTime);
      masterGain.connect(ctx.destination);
    }
    return ctx;
  }

  function playKey(time, type) {
    const c = getCtx();
    const buf = c.createBuffer(1, c.sampleRate * 0.09, c.sampleRate);
    const data = buf.getChannelData(0);

    for (let i = 0; i < data.length; i++) {
      const decay = type === 'clicky'
        ? Math.exp(-i / (c.sampleRate * 0.018))
        : Math.exp(-i / (c.sampleRate * 0.028));
      data[i] = (Math.random() * 2 - 1) * decay;
    }

    const src = c.createBufferSource();
    src.buffer = buf;

    const filter = c.createBiquadFilter();
    filter.type = type === 'clicky' ? 'bandpass' : 'lowpass';
    filter.frequency.value = type === 'clicky' ? 2000 : 900;
    filter.Q.value = 0.8;

    const gain = c.createGain();
    const vol = 0.12 + Math.random() * 0.1;
    gain.gain.setValueAtTime(vol, time);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.09);

    src.connect(filter);
    filter.connect(gain);
    gain.connect(masterGain);
    src.start(time);
  }

  function scheduleKeys() {
    const c = getCtx();
    const lookAhead = 0.2;
    const scheduleInterval = 0.1;
    const types = ['clicky', 'linear', 'clicky', 'tactile'];

    while (nextKeyTime < c.currentTime + lookAhead) {
      const type = types[Math.floor(Math.random() * types.length)];
      playKey(nextKeyTime, type);

      // Realistic typing rhythm — burst then pause
      const isBurst = Math.random() > 0.3;
      nextKeyTime += isBurst
        ? 0.06 + Math.random() * 0.08   // fast burst
        : 0.2 + Math.random() * 0.6;    // pause between words
    }

    scheduleTimer = setTimeout(scheduleKeys, scheduleInterval * 1000);
  }

  function fadeGain(from, to, duration) {
    clearInterval(fadeInterval);
    const c = getCtx();
    const steps = 40;
    const stepTime = duration / steps;
    let step = 0;

    fadeInterval = setInterval(() => {
      step++;
      const progress = step / steps;
      const value = from + (to - from) * progress;
      masterGain.gain.setValueAtTime(value, c.currentTime);
      if (step >= steps) clearInterval(fadeInterval);
    }, stepTime);
  }

  function startAmbient() {
    getCtx();
    if (ctx.state === 'suspended') ctx.resume();
    nextKeyTime = ctx.currentTime + 0.1;
    scheduleKeys();
    fadeGain(0, 0.9, 1500);
    overlay.style.background = 'rgba(0,0,0,0.45)';
  }

  function stopAmbient() {
    fadeGain(0.9, 0, 1000);
    overlay.style.background = 'rgba(0,0,0,0)';
    setTimeout(() => {
      clearTimeout(scheduleTimer);
    }, 1000);
  }

  function toggleAmbient() {
    isPlaying = !isPlaying;
    const btn = document.getElementById('ambient-btn');

    if (isPlaying) {
      startAmbient();
      if (btn) {
        btn.textContent = '⏹ Focus off';
        btn.style.borderColor = '#00f0ff';
        btn.style.color = '#00f0ff';
        btn.style.boxShadow = '0 0 12px rgba(0,240,255,0.2)';
      }
    } else {
      stopAmbient();
      if (btn) {
        btn.textContent = '🎧 Focus mode';
        btn.style.borderColor = '';
        btn.style.color = '';
        btn.style.boxShadow = '';
      }
    }
  }

  function init() {
    const btn = document.getElementById('ambient-btn');
    if (btn) btn.addEventListener('click', toggleAmbient);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
