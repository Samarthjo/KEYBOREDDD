(function () {
  let audioCtx = null;
  let currentSwitch = 'clicky';

  function getCtx() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    return audioCtx;
  }

  function playLinear() {
    const ctx = getCtx();
    const t = ctx.currentTime;

    // Soft muted thud — low frequency burst
    const buf = ctx.createBuffer(1, ctx.sampleRate * 0.12, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      const env = Math.exp(-i / (ctx.sampleRate * 0.018));
      data[i] = (Math.random() * 2 - 1) * env * 0.5;
    }
    const src = ctx.createBufferSource();
    src.buffer = buf;

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 900;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.55, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.1);

    src.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    src.start(t);
  }

  function playClicky() {
    const ctx = getCtx();
    const t = ctx.currentTime;

    // Sharp click transient
    const clickBuf = ctx.createBuffer(1, ctx.sampleRate * 0.004, ctx.sampleRate);
    const clickData = clickBuf.getChannelData(0);
    for (let i = 0; i < clickData.length; i++) {
      clickData[i] = (Math.random() * 2 - 1) * (1 - i / clickData.length);
    }
    const click = ctx.createBufferSource();
    click.buffer = clickBuf;
    const clickGain = ctx.createGain();
    clickGain.gain.setValueAtTime(1.1, t);
    click.connect(clickGain);
    clickGain.connect(ctx.destination);
    click.start(t);

    // Clack body after the click
    const clackBuf = ctx.createBuffer(1, ctx.sampleRate * 0.09, ctx.sampleRate);
    const clackData = clackBuf.getChannelData(0);
    for (let i = 0; i < clackData.length; i++) {
      const env = Math.exp(-i / (ctx.sampleRate * 0.022));
      clackData[i] = (Math.random() * 2 - 1) * env;
    }
    const clack = ctx.createBufferSource();
    clack.buffer = clackBuf;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 2200;
    filter.Q.value = 0.8;

    const clackGain = ctx.createGain();
    clackGain.gain.setValueAtTime(0.7, t + 0.004);
    clackGain.gain.exponentialRampToValueAtTime(0.001, t + 0.09);

    clack.connect(filter);
    filter.connect(clackGain);
    clackGain.connect(ctx.destination);
    clack.start(t + 0.004);
  }

  function playTactile() {
    const ctx = getCtx();
    const t = ctx.currentTime;

    // Bump thud — mid frequency, more body than linear
    const buf = ctx.createBuffer(1, ctx.sampleRate * 0.1, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      const env = Math.exp(-i / (ctx.sampleRate * 0.025));
      data[i] = (Math.random() * 2 - 1) * env;
    }
    const src = ctx.createBufferSource();
    src.buffer = buf;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 1100;
    filter.Q.value = 1.2;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.75, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.09);

    src.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    src.start(t);
  }

  function playSwitch() {
    if (currentSwitch === 'linear')   playLinear();
    else if (currentSwitch === 'clicky')   playClicky();
    else if (currentSwitch === 'tactile')  playTactile();
  }

  function animateKey(el) {
    el.style.transform = 'translateY(3px) scale(0.95)';
    el.style.background = 'rgba(0,240,255,0.18)';
    el.style.borderColor = '#00f0ff';
    setTimeout(() => {
      el.style.transform = '';
      el.style.background = '';
      el.style.borderColor = '';
    }, 120);
  }

  function init() {
    // Switch selector buttons
    document.querySelectorAll('.sound-switch-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        currentSwitch = this.dataset.switch;
        document.querySelectorAll('.sound-switch-btn').forEach(b => b.classList.remove('active-switch'));
        this.classList.add('active-switch');
        playSwitch(); // preview the sound immediately
      });
    });

    // Keyboard keys
    document.querySelectorAll('.sound-key').forEach(key => {
      key.addEventListener('click', function () {
        playSwitch();
        animateKey(this);
      });
    });

    // Physical keyboard also triggers sounds while focused on the demo section
    const section = document.getElementById('sound-demo-section');
    if (section) {
      document.addEventListener('keydown', function (e) {
        // Only trigger if user is not typing in the WPM input
        if (document.activeElement.tagName === 'TEXTAREA' || document.activeElement.tagName === 'INPUT') return;
        playSwitch();
        // Light up the matching key if it exists
        const match = document.querySelector(`.sound-key[data-key="${e.key.toUpperCase()}"]`);
        if (match) animateKey(match);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
