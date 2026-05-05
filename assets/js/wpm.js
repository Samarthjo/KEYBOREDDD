(function () {
  const PROMPTS = [
    "hall effect switches remove contact wear entirely giving your keystrokes a longer lifespan and a smoother actuation curve with every single press",
    "ultralight mice under fifty grams let your wrist glide across the pad with almost no resistance making fast flicks and precise tracking feel completely effortless",
    "a good mechanical keyboard changes how you think about typing the tactile feedback and sound profile turn every keystroke into something satisfying and deliberate",
    "coiled cables add a clean aesthetic to any desk setup while keeping your keyboard tethered without the mess of a straight cable draped across your mousepad",
    "polling rate determines how often your mouse reports its position to your computer a higher rate means smoother cursor movement and faster response in competitive games"
  ];

  const THRESHOLD_WPM = 60;
  const DISCOUNT_CODE = "AURIX20";

  let startTime = null;
  let timerInterval = null;
  let currentPrompt = "";
  let started = false;
  let finished = false;

  function getPrompt() {
    return PROMPTS[Math.floor(Math.random() * PROMPTS.length)];
  }

  function calcWPM(typed, seconds) {
    const words = typed.trim().split(/\s+/).filter(Boolean).length;
    return Math.round((words / seconds) * 60);
  }

  function calcAccuracy(original, typed) {
    let correct = 0;
    for (let i = 0; i < typed.length; i++) {
      if (typed[i] === original[i]) correct++;
    }
    return typed.length === 0 ? 100 : Math.round((correct / typed.length) * 100);
  }

  function percentile(wpm) {
    if (wpm >= 100) return 99;
    if (wpm >= 80)  return 93;
    if (wpm >= 70)  return 85;
    if (wpm >= 60)  return 73;
    if (wpm >= 50)  return 58;
    if (wpm >= 40)  return 42;
    if (wpm >= 30)  return 25;
    return 12;
  }

  function renderPrompt(typed) {
    const display = document.getElementById('aurix-wpm-display');
    if (!display) return;
    let html = '';
    for (let i = 0; i < currentPrompt.length; i++) {
      const ch = currentPrompt[i];
      if (i < typed.length) {
        const correct = typed[i] === ch;
        html += `<span class="wpm-char ${correct ? 'wpm-correct' : 'wpm-wrong'}">${ch}</span>`;
      } else if (i === typed.length) {
        html += `<span class="wpm-char wpm-cursor">${ch}</span>`;
      } else {
        html += `<span class="wpm-char wpm-dim">${ch}</span>`;
      }
    }
    display.innerHTML = html;
  }

  function showResult(wpm, accuracy) {
    const box = document.getElementById('aurix-wpm-result');
    const pct = percentile(wpm);
    const won = wpm >= THRESHOLD_WPM;

    box.innerHTML = `
      <div class="wpm-result-inner">
        <div class="wpm-stat-row">
          <div class="wpm-stat">
            <span class="wpm-big">${wpm}</span>
            <span class="wpm-label">WPM</span>
          </div>
          <div class="wpm-stat">
            <span class="wpm-big">${accuracy}%</span>
            <span class="wpm-label">Accuracy</span>
          </div>
          <div class="wpm-stat">
            <span class="wpm-big">Top ${100 - pct}%</span>
            <span class="wpm-label">of typists</span>
          </div>
        </div>
        ${won
          ? `<div class="wpm-win">
               <div class="wpm-win-title">You unlocked a discount</div>
               <div class="wpm-code">${DISCOUNT_CODE}</div>
               <div class="wpm-win-sub">20% off your first order — you type fast, you deserve it.</div>
             </div>`
          : `<div class="wpm-try-again">
               <div class="wpm-try-text">Hit <strong>${THRESHOLD_WPM} WPM</strong> to unlock a discount code.</div>
             </div>`
        }
        <button class="wpm-retry-btn" id="aurix-wpm-retry">Try again</button>
      </div>
    `;
    box.style.display = 'block';
    document.getElementById('aurix-wpm-retry').addEventListener('click', resetChallenge);
    if (won) launchConfetti();
  }

  function launchConfetti() {
    const colors = ['#00f0ff', '#ff00ff', '#ffffff', '#a78bfa', '#34d399'];
    for (let i = 0; i < 80; i++) {
      setTimeout(() => {
        const el = document.createElement('div');
        const size = Math.random() * 8 + 4;
        el.style.cssText = `
          position: fixed;
          left: ${Math.random() * 100}vw;
          top: -10px;
          width: ${size}px;
          height: ${size}px;
          background: ${colors[Math.floor(Math.random() * colors.length)]};
          border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
          pointer-events: none;
          z-index: 99998;
          animation: wpm-fall ${1.2 + Math.random() * 1.5}s ease-in forwards;
        `;
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 3000);
      }, i * 30);
    }
  }

  function resetChallenge() {
    started = false;
    finished = false;
    startTime = null;
    clearInterval(timerInterval);
    currentPrompt = getPrompt();

    const input = document.getElementById('aurix-wpm-input');
    const result = document.getElementById('aurix-wpm-result');
    const liveWpm = document.getElementById('aurix-wpm-live');
    const timer = document.getElementById('aurix-wpm-timer');

    if (input) { input.value = ''; input.disabled = false; }
    if (result) result.style.display = 'none';
    if (liveWpm) liveWpm.textContent = '0 WPM';
    if (timer) timer.textContent = '0s';

    renderPrompt('');
  }

  function init() {
    const input = document.getElementById('aurix-wpm-input');
    if (!input) return;

    currentPrompt = getPrompt();
    renderPrompt('');

    input.addEventListener('input', function () {
      if (finished) return;
      const typed = this.value;

      if (!started && typed.length > 0) {
        started = true;
        startTime = Date.now();
        timerInterval = setInterval(() => {
          const elapsed = Math.round((Date.now() - startTime) / 1000);
          const el = document.getElementById('aurix-wpm-timer');
          if (el) el.textContent = elapsed + 's';
        }, 500);
      }

      renderPrompt(typed);

      if (started) {
        const elapsed = (Date.now() - startTime) / 1000;
        if (elapsed > 0) {
          const live = document.getElementById('aurix-wpm-live');
          if (live) live.textContent = calcWPM(typed, elapsed) + ' WPM';
        }
      }

      // Finished when prompt is fully typed
      if (typed.length >= currentPrompt.length) {
        finished = true;
        clearInterval(timerInterval);
        input.disabled = true;
        const elapsed = (Date.now() - startTime) / 1000;
        const wpm = calcWPM(typed, elapsed);
        const acc = calcAccuracy(currentPrompt, typed);
        showResult(wpm, acc);
      }
    });

    input.addEventListener('paste', e => e.preventDefault());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
