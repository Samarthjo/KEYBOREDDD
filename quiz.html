<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Find Your Switch | Aurix Input Lab</title>
  <meta name="description" content="4-question quiz to find your perfect mechanical keyboard switch and recommended Aurix keyboard." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Sora:wght@400;600;700;800&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --cyan: #00f0ff;
      --magenta: #ff00c8;
      --green: #39ff14;
      --bg: #060608;
      --bg2: #0d0d10;
      --bg3: #131318;
      --border: rgba(255,255,255,0.07);
      --border-hover: rgba(0,240,255,0.35);
      --text: #f0f0f0;
      --muted: #555;
      --muted2: #888;
      --font-display: 'Sora', sans-serif;
      --font-body: 'Space Grotesk', sans-serif;
      --radius: 14px;
      --radius-sm: 8px;
    }

    html { scroll-behavior: smooth; }
    body {
      background: var(--bg);
      color: var(--text);
      font-family: var(--font-body);
      min-height: 100vh;
      overflow-x: hidden;
    }

    /* ── NAV ── */
    .navbar {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 100;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 32px;
      height: 60px;
      background: rgba(6,6,8,0.85);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border);
    }
    .brand {
      display: flex; align-items: center; gap: 10px;
      text-decoration: none;
    }
    .brand-mark {
      width: 28px; height: 28px; border-radius: 6px;
      background: linear-gradient(135deg, var(--cyan), var(--magenta));
      display: block;
    }
    .brand-copy { display: flex; flex-direction: column; line-height: 1; }
    .brand-copy strong { font-size: 13px; font-weight: 700; color: #fff; letter-spacing: 0.1em; }
    .brand-copy small { font-size: 9px; color: var(--muted2); letter-spacing: 0.15em; }
    .nav-back {
      font-size: 13px; color: var(--muted2); text-decoration: none;
      display: flex; align-items: center; gap: 6px;
      transition: color 0.2s;
    }
    .nav-back:hover { color: var(--cyan); }
    .nav-back svg { transition: transform 0.2s; }
    .nav-back:hover svg { transform: translateX(-3px); }

    /* ── HERO ── */
    .quiz-hero {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 100px 24px 60px;
      position: relative;
      text-align: center;
    }
    .quiz-hero::before {
      content: '';
      position: absolute; inset: 0;
      background:
        radial-gradient(ellipse 70% 50% at 30% 40%, rgba(0,240,255,0.05) 0%, transparent 60%),
        radial-gradient(ellipse 60% 40% at 75% 65%, rgba(255,0,200,0.04) 0%, transparent 60%);
      pointer-events: none;
    }
    .hero-eyebrow {
      font-size: 11px; letter-spacing: 0.16em;
      text-transform: uppercase; color: var(--cyan);
      margin-bottom: 16px;
    }
    .hero-h1 {
      font-family: var(--font-display);
      font-size: clamp(2.2rem, 6vw, 4rem);
      font-weight: 800;
      line-height: 1.1;
      color: #fff;
      margin-bottom: 18px;
      max-width: 700px;
    }
    .hero-h1 em { font-style: normal; color: var(--cyan); }
    .hero-sub {
      font-size: 16px; color: var(--muted2);
      max-width: 480px;
      line-height: 1.7;
      margin-bottom: 48px;
    }
    .start-btn {
      display: inline-flex; align-items: center; gap: 10px;
      background: var(--cyan);
      color: #000;
      font-family: var(--font-body);
      font-size: 15px; font-weight: 700;
      padding: 14px 36px;
      border-radius: 50px;
      border: none; cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
      letter-spacing: 0.03em;
      text-decoration: none;
    }
    .start-btn:hover { transform: translateY(-2px); box-shadow: 0 0 32px rgba(0,240,255,0.3); }
    .start-btn:active { transform: scale(0.97); }
    .hero-chips {
      display: flex; gap: 10px; margin-top: 32px; flex-wrap: wrap; justify-content: center;
    }
    .hero-chip {
      font-size: 12px; color: var(--muted2);
      border: 1px solid var(--border);
      border-radius: 20px; padding: 6px 14px;
    }

    /* ── QUIZ WRAPPER ── */
    #quiz-section {
      display: none;
      min-height: 100vh;
      padding: 80px 24px 60px;
      position: relative;
    }
    #quiz-section.active { display: block; }

    .quiz-container {
      max-width: 760px;
      margin: 0 auto;
    }

    /* Progress bar */
    .progress-bar-wrap {
      display: flex; align-items: center; gap: 16px;
      margin-bottom: 48px;
    }
    .progress-track {
      flex: 1; height: 2px;
      background: var(--border);
      border-radius: 2px;
      overflow: hidden;
    }
    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, var(--cyan), var(--magenta));
      border-radius: 2px;
      transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      width: 0%;
    }
    .progress-label {
      font-size: 12px; color: var(--muted);
      white-space: nowrap; letter-spacing: 0.08em;
    }

    /* Question card */
    .question-card {
      display: none;
      animation: qSlideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }
    .question-card.active { display: block; }
    @keyframes qSlideIn {
      from { opacity: 0; transform: translateX(24px); }
      to   { opacity: 1; transform: translateX(0); }
    }

    .q-number {
      font-size: 11px; letter-spacing: 0.14em;
      text-transform: uppercase; color: var(--cyan);
      margin-bottom: 12px;
    }
    .q-text {
      font-family: var(--font-display);
      font-size: clamp(1.4rem, 3.5vw, 2rem);
      font-weight: 700; color: #fff;
      line-height: 1.25;
      margin-bottom: 10px;
    }
    .q-sub {
      font-size: 14px; color: var(--muted2);
      margin-bottom: 36px;
    }

    /* Option grid */
    .options-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }
    @media (max-width: 560px) { .options-grid { grid-template-columns: 1fr; } }

    .option-btn {
      position: relative;
      background: var(--bg2);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 20px 20px 20px 52px;
      text-align: left;
      cursor: pointer;
      transition: border-color 0.2s, background 0.2s, transform 0.15s;
      overflow: hidden;
    }
    .option-btn::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(0,240,255,0.04), transparent);
      opacity: 0;
      transition: opacity 0.2s;
    }
    .option-btn:hover { border-color: var(--border-hover); transform: translateY(-2px); }
    .option-btn:hover::before { opacity: 1; }
    .option-btn.selected {
      border-color: var(--cyan);
      background: rgba(0,240,255,0.06);
    }
    .option-btn.selected .opt-letter { color: #000; background: var(--cyan); }

    .opt-letter {
      position: absolute;
      left: 16px; top: 50%;
      transform: translateY(-50%);
      width: 28px; height: 28px;
      border-radius: 6px;
      background: var(--bg3);
      border: 1px solid var(--border);
      display: flex; align-items: center; justify-content: center;
      font-size: 12px; font-weight: 700; color: var(--muted2);
      transition: background 0.2s, color 0.2s;
    }
    .opt-title {
      font-size: 14px; font-weight: 600; color: #fff;
      margin-bottom: 4px;
    }
    .opt-desc { font-size: 12px; color: var(--muted2); line-height: 1.5; }

    /* Nav buttons */
    .q-nav {
      display: flex; justify-content: space-between; align-items: center;
      margin-top: 32px;
    }
    .q-back-btn {
      background: transparent;
      border: 1px solid var(--border);
      color: var(--muted2);
      font-family: var(--font-body);
      font-size: 13px; padding: 10px 20px;
      border-radius: 8px; cursor: pointer;
      transition: border-color 0.2s, color 0.2s;
    }
    .q-back-btn:hover { border-color: #fff; color: #fff; }
    .q-back-btn:disabled { opacity: 0.2; pointer-events: none; }

    .q-next-btn {
      background: var(--cyan);
      border: none; color: #000;
      font-family: var(--font-body);
      font-size: 14px; font-weight: 700;
      padding: 12px 28px; border-radius: 8px;
      cursor: pointer;
      transition: transform 0.15s, box-shadow 0.2s, opacity 0.2s;
      opacity: 0.3;
      pointer-events: none;
    }
    .q-next-btn.enabled {
      opacity: 1; pointer-events: auto;
    }
    .q-next-btn.enabled:hover { transform: translateY(-1px); box-shadow: 0 0 20px rgba(0,240,255,0.25); }

    /* ── TRIVIA INTERLUDE ── */
    .trivia-card {
      display: none;
      text-align: center;
      padding: 60px 24px;
      animation: qSlideIn 0.4s ease forwards;
    }
    .trivia-card.active { display: block; }
    .trivia-icon { font-size: 36px; margin-bottom: 16px; }
    .trivia-label {
      font-size: 11px; letter-spacing: 0.14em;
      color: var(--magenta); text-transform: uppercase;
      margin-bottom: 10px;
    }
    .trivia-fact {
      font-family: var(--font-display);
      font-size: clamp(1.1rem, 3vw, 1.6rem);
      font-weight: 600; color: #fff;
      max-width: 560px; margin: 0 auto 12px;
      line-height: 1.4;
    }
    .trivia-source { font-size: 13px; color: var(--muted); margin-bottom: 36px; }
    .trivia-continue {
      background: transparent; border: 1px solid var(--border-hover);
      color: var(--cyan); font-family: var(--font-body);
      font-size: 13px; padding: 10px 24px; border-radius: 8px;
      cursor: pointer; transition: background 0.2s;
    }
    .trivia-continue:hover { background: rgba(0,240,255,0.08); }

    /* ── RESULT SCREEN ── */
    #result-section {
      display: none;
      min-height: 100vh;
      padding: 80px 24px 60px;
    }
    #result-section.active { display: block; }

    .result-container { max-width: 900px; margin: 0 auto; }

    .result-header { text-align: center; margin-bottom: 56px; }
    .result-eyebrow {
      font-size: 11px; letter-spacing: 0.14em;
      text-transform: uppercase; color: var(--green);
      margin-bottom: 14px;
    }
    .result-h2 {
      font-family: var(--font-display);
      font-size: clamp(1.8rem, 5vw, 3rem);
      font-weight: 800; color: #fff; line-height: 1.15;
    }
    .result-h2 em { font-style: normal; color: var(--cyan); }
    .result-switch-name {
      font-size: 15px; color: var(--muted2);
      margin-top: 10px;
    }

    /* Result grid */
    .result-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 20px;
    }
    @media (max-width: 680px) { .result-grid { grid-template-columns: 1fr; } }

    /* Switch animation panel */
    .switch-panel {
      background: var(--bg2);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 28px 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .switch-panel-title {
      font-size: 11px; letter-spacing: 0.12em;
      text-transform: uppercase; color: var(--muted);
      margin-bottom: 20px; align-self: flex-start;
    }
    .switch-svg-wrap {
      width: 100%; display: flex; justify-content: center;
      margin-bottom: 20px;
    }
    .switch-legend {
      width: 100%;
      display: flex; flex-direction: column; gap: 8px;
    }
    .legend-item {
      display: flex; align-items: center; gap: 10px;
      font-size: 12px; color: var(--muted2);
    }
    .legend-dot {
      width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0;
    }
    .legend-label { font-weight: 500; color: #ccc; margin-right: 4px; }

    /* Product card */
    .product-result-card {
      background: var(--bg2);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }
    .product-img-wrap {
      width: 100%; aspect-ratio: 4/3;
      overflow: hidden; background: var(--bg3);
    }
    .product-img-wrap img {
      width: 100%; height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }
    .product-result-card:hover .product-img-wrap img { transform: scale(1.04); }
    .product-card-body { padding: 24px; flex: 1; }
    .product-badge {
      display: inline-block;
      font-size: 10px; letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--cyan); border: 1px solid rgba(0,240,255,0.3);
      padding: 4px 10px; border-radius: 20px;
      margin-bottom: 12px;
    }
    .product-name {
      font-family: var(--font-display);
      font-size: 1.4rem; font-weight: 700; color: #fff;
      margin-bottom: 6px;
    }
    .product-tagline { font-size: 13px; color: var(--muted2); margin-bottom: 14px; }
    .product-why {
      font-size: 13px; color: #aaa; line-height: 1.6;
      padding: 12px; background: var(--bg3);
      border-radius: 8px; margin-bottom: 20px;
      border-left: 2px solid var(--cyan);
    }
    .product-price {
      font-size: 22px; font-weight: 700; color: #fff;
      margin-bottom: 16px;
    }
    .product-price span { font-size: 14px; color: var(--muted); text-decoration: line-through; margin-left: 8px; }
    .product-cta {
      display: block; text-align: center;
      background: var(--cyan); color: #000;
      font-family: var(--font-body); font-size: 14px; font-weight: 700;
      padding: 13px 24px; border-radius: 8px;
      text-decoration: none;
      transition: transform 0.15s, box-shadow 0.2s;
    }
    .product-cta:hover { transform: translateY(-2px); box-shadow: 0 0 24px rgba(0,240,255,0.25); }

    /* Switch traits */
    .traits-panel {
      grid-column: 1 / -1;
      background: var(--bg2);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 28px;
    }
    .traits-title {
      font-size: 11px; letter-spacing: 0.12em;
      text-transform: uppercase; color: var(--muted);
      margin-bottom: 20px;
    }
    .traits-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
    }
    @media (max-width: 560px) { .traits-grid { grid-template-columns: 1fr 1fr; } }
    .trait-item {}
    .trait-name { font-size: 12px; color: var(--muted2); margin-bottom: 8px; }
    .trait-bar {
      height: 4px; background: var(--bg3);
      border-radius: 2px; overflow: hidden; margin-bottom: 4px;
    }
    .trait-fill {
      height: 100%; border-radius: 2px;
      background: linear-gradient(90deg, var(--cyan), var(--magenta));
      transform-origin: left;
      transform: scaleX(0);
      transition: transform 1s cubic-bezier(0.4,0,0.2,1);
    }
    .trait-val { font-size: 11px; color: var(--muted); }

    /* Also consider */
    .also-row {
      margin-top: 20px;
      background: var(--bg2);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 24px;
    }
    .also-title {
      font-size: 11px; letter-spacing: 0.12em;
      text-transform: uppercase; color: var(--muted);
      margin-bottom: 16px;
    }
    .also-cards {
      display: flex; gap: 12px; flex-wrap: wrap;
    }
    .also-card {
      flex: 1; min-width: 160px;
      background: var(--bg3);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 14px 16px;
      text-decoration: none;
      transition: border-color 0.2s;
    }
    .also-card:hover { border-color: var(--border-hover); }
    .also-card-name { font-size: 14px; font-weight: 600; color: #fff; margin-bottom: 4px; }
    .also-card-tag { font-size: 12px; color: var(--muted2); }
    .also-card-price { font-size: 13px; color: var(--cyan); margin-top: 8px; font-weight: 600; }

    /* Retake */
    .retake-row {
      text-align: center; margin-top: 40px; padding-bottom: 60px;
    }
    .retake-btn {
      background: transparent; border: 1px solid var(--border);
      color: var(--muted2); font-family: var(--font-body);
      font-size: 13px; padding: 11px 28px; border-radius: 8px;
      cursor: pointer; transition: border-color 0.2s, color 0.2s;
    }
    .retake-btn:hover { border-color: #fff; color: #fff; }

    /* Noise texture overlay */
    body::after {
      content: '';
      position: fixed; inset: 0;
      pointer-events: none; z-index: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
      opacity: 0.4;
    }
  </style>
</head>
<body>

<!-- NAV -->
<nav class="navbar">
  <a class="brand" href="index.html">
    <span class="brand-mark"></span>
    <span class="brand-copy">
      <strong>AURIX</strong>
      <small>INPUT LAB</small>
    </span>
  </a>
  <a class="nav-back" href="index.html">
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 2L4 7l5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    Back to site
  </a>
</nav>

<!-- HERO -->
<section class="quiz-hero" id="hero-section">
  <p class="hero-eyebrow">Switch personality quiz</p>
  <h1 class="hero-h1">Find your <em>perfect</em> switch in 4 questions.</h1>
  <p class="hero-sub">Answer a few questions about how you type, where you work, and what you love — we'll match you to the right switch type and keyboard.</p>
  <button class="start-btn" onclick="startQuiz()">
    Start the quiz
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </button>
  <div class="hero-chips">
    <span class="hero-chip">4 questions</span>
    <span class="hero-chip">~1 minute</span>
    <span class="hero-chip">Personalized keyboard rec</span>
    <span class="hero-chip">Animated switch breakdown</span>
  </div>
</section>

<!-- QUIZ -->
<section id="quiz-section">
  <div class="quiz-container">
    <div class="progress-bar-wrap">
      <div class="progress-track"><div class="progress-fill" id="progress-fill"></div></div>
      <span class="progress-label" id="progress-label">Q1 of 4</span>
    </div>

    <!-- Q1: Typing style -->
    <div class="question-card active" id="q1">
      <p class="q-number">Question 01 / 04</p>
      <h2 class="q-text">What best describes how you use your keyboard?</h2>
      <p class="q-sub">Think about the majority of your day-to-day typing.</p>
      <div class="options-grid">
        <button class="option-btn" data-q="1" data-v="heavy" onclick="selectOption(this)">
          <span class="opt-letter">A</span>
          <div class="opt-title">Heavy all-day typer</div>
          <div class="opt-desc">Writing, coding, or emails for hours at a stretch.</div>
        </button>
        <button class="option-btn" data-q="1" data-v="gaming" onclick="selectOption(this)">
          <span class="opt-letter">B</span>
          <div class="opt-title">Competitive gamer</div>
          <div class="opt-desc">Fast inputs, low latency, reaction-speed matters.</div>
        </button>
        <button class="option-btn" data-q="1" data-v="creative" onclick="selectOption(this)">
          <span class="opt-letter">C</span>
          <div class="opt-title">Creative / content work</div>
          <div class="opt-desc">Shortcuts, macros, switching between apps constantly.</div>
        </button>
        <button class="option-btn" data-q="1" data-v="casual" onclick="selectOption(this)">
          <span class="opt-letter">D</span>
          <div class="opt-title">Casual everyday use</div>
          <div class="opt-desc">Browsing, light work, mostly light typing sessions.</div>
        </button>
      </div>
      <div class="q-nav">
        <button class="q-back-btn" disabled>← Back</button>
        <button class="q-next-btn" id="next-q1" onclick="goToTrivia(1)">Next →</button>
      </div>
    </div>

    <!-- TRIVIA 1 -->
    <div class="trivia-card" id="trivia1">
      <div class="trivia-icon">⌨️</div>
      <p class="trivia-label">Did you know?</p>
      <p class="trivia-fact">"The first mechanical switch patent was filed in 1983. Cherry MX switches have been the gold standard ever since."</p>
      <p class="trivia-source">— Mechanical Keyboard History</p>
      <button class="trivia-continue" onclick="showQuestion(2)">Continue →</button>
    </div>

    <!-- Q2: Noise tolerance -->
    <div class="question-card" id="q2">
      <p class="q-number">Question 02 / 04</p>
      <h2 class="q-text">How important is sound to you?</h2>
      <p class="q-sub">Think about your workspace and the people around you.</p>
      <div class="options-grid">
        <button class="option-btn" data-q="2" data-v="silent" onclick="selectOption(this)">
          <span class="opt-letter">A</span>
          <div class="opt-title">Library silent</div>
          <div class="opt-desc">Shared office, calls all day. Quiet is non-negotiable.</div>
        </button>
        <button class="option-btn" data-q="2" data-v="subtle" onclick="selectOption(this)">
          <span class="opt-letter">B</span>
          <div class="opt-title">Subtle thock</div>
          <div class="opt-desc">I like a little sound — that satisfying low thud.</div>
        </button>
        <button class="option-btn" data-q="2" data-v="clicky" onclick="selectOption(this)">
          <span class="opt-letter">C</span>
          <div class="opt-title">Loud and proud</div>
          <div class="opt-desc">I type alone. I want to HEAR every keystroke.</div>
        </button>
        <button class="option-btn" data-q="2" data-v="dontcare" onclick="selectOption(this)">
          <span class="opt-letter">D</span>
          <div class="opt-title">Doesn't matter</div>
          <div class="opt-desc">Sound isn't a factor in my decision at all.</div>
        </button>
      </div>
      <div class="q-nav">
        <button class="q-back-btn" onclick="goBackTo(1)">← Back</button>
        <button class="q-next-btn" id="next-q2" onclick="goToTrivia(2)">Next →</button>
      </div>
    </div>

    <!-- TRIVIA 2 -->
    <div class="trivia-card" id="trivia2">
      <div class="trivia-icon">🔊</div>
      <p class="trivia-label">Switch science</p>
      <p class="trivia-fact">"Clicky switches produce sound from a physical click jacket — a separate component that snaps past a bump in the stem. Linear switches have none of that."</p>
      <p class="trivia-source">— How Mechanical Switches Work</p>
      <button class="trivia-continue" onclick="showQuestion(3)">Continue →</button>
    </div>

    <!-- Q3: Tactile feel -->
    <div class="question-card" id="q3">
      <p class="q-number">Question 03 / 04</p>
      <h2 class="q-text">What's your ideal switch feel?</h2>
      <p class="q-sub">Forget sound — what do your fingertips want?</p>
      <div class="options-grid">
        <button class="option-btn" data-q="3" data-v="buttery" onclick="selectOption(this)">
          <span class="opt-letter">A</span>
          <div class="opt-title">Buttery smooth</div>
          <div class="opt-desc">Zero resistance, linear all the way down. Pure speed.</div>
        </button>
        <button class="option-btn" data-q="3" data-v="bump" onclick="selectOption(this)">
          <span class="opt-letter">B</span>
          <div class="opt-title">Tactile bump</div>
          <div class="opt-desc">I want to feel exactly where the key registers.</div>
        </button>
        <button class="option-btn" data-q="3" data-v="crisp" onclick="selectOption(this)">
          <span class="opt-letter">C</span>
          <div class="opt-title">Crisp click</div>
          <div class="opt-desc">Both a bump AND a click. Full tactile + audio feedback.</div>
        </button>
        <button class="option-btn" data-q="3" data-v="heavy" onclick="selectOption(this)">
          <span class="opt-letter">D</span>
          <div class="opt-title">Heavy resistance</div>
          <div class="opt-desc">I want springs that push back hard — reduces typos.</div>
        </button>
      </div>
      <div class="q-nav">
        <button class="q-back-btn" onclick="goBackTo(2)">← Back</button>
        <button class="q-next-btn" id="next-q3" onclick="goToTrivia(3)">Next →</button>
      </div>
    </div>

    <!-- TRIVIA 3 -->
    <div class="trivia-card" id="trivia3">
      <div class="trivia-icon">🧲</div>
      <p class="trivia-label">Hall-effect explained</p>
      <p class="trivia-fact">"Hall-effect switches use magnets instead of physical contacts. This means zero wear, adjustable actuation points, and consistent force curves across millions of presses."</p>
      <p class="trivia-source">— Aurix Engineering Notes</p>
      <button class="trivia-continue" onclick="showQuestion(4)">Continue →</button>
    </div>

    <!-- Q4: Setup vibe -->
    <div class="question-card" id="q4">
      <p class="q-number">Question 04 / 04</p>
      <h2 class="q-text">Which setup vibe fits your desk best?</h2>
      <p class="q-sub">Aesthetics matter. What does your dream desk look like?</p>
      <div class="options-grid">
        <button class="option-btn" data-q="4" data-v="minimal" onclick="selectOption(this)">
          <span class="opt-letter">A</span>
          <div class="opt-title">Dark & minimal</div>
          <div class="opt-desc">Stealth black, no clutter, subtle lighting if any.</div>
        </button>
        <button class="option-btn" data-q="4" data-v="neon" onclick="selectOption(this)">
          <span class="opt-letter">B</span>
          <div class="opt-title">Neon RGB showpiece</div>
          <div class="opt-desc">Glowing edges, cyan-magenta lights, a desk you film.</div>
        </button>
        <button class="option-btn" data-q="4" data-v="pro" onclick="selectOption(this)">
          <span class="opt-letter">C</span>
          <div class="opt-title">Clean pro workspace</div>
          <div class="opt-desc">Neutral tones, works in both office and home setups.</div>
        </button>
        <button class="option-btn" data-q="4" data-v="bold" onclick="selectOption(this)">
          <span class="opt-letter">D</span>
          <div class="opt-title">Bold statement piece</div>
          <div class="opt-desc">Colour, personality, something people ask about.</div>
        </button>
      </div>
      <div class="q-nav">
        <button class="q-back-btn" onclick="goBackTo(3)">← Back</button>
        <button class="q-next-btn" id="next-q4" onclick="showResult()">See my match →</button>
      </div>
    </div>
  </div>
</section>

<!-- RESULT -->
<section id="result-section">
  <div class="result-container">
    <div class="result-header">
      <p class="result-eyebrow" id="result-eyebrow">Your perfect match</p>
      <h2 class="result-h2" id="result-h2">Loading…</h2>
      <p class="result-switch-name" id="result-switch-name"></p>
    </div>

    <div class="result-grid">
      <!-- SVG animation panel -->
      <div class="switch-panel">
        <p class="switch-panel-title">Switch cross-section — live animation</p>
        <div class="switch-svg-wrap">
          <svg id="switch-svg" width="220" height="320" viewBox="0 0 220 320" xmlns="http://www.w3.org/2000/svg">
            <!-- Housing -->
            <rect x="55" y="80" width="110" height="190" rx="8" fill="#1a1a22" stroke="#333" stroke-width="1.5"/>
            <!-- Top housing cap -->
            <rect x="65" y="70" width="90" height="30" rx="5" fill="#222230" stroke="#444" stroke-width="1"/>
            <!-- Keycap -->
            <rect id="sv-keycap" x="50" y="30" width="120" height="38" rx="8" fill="#2a2a3a" stroke="#555" stroke-width="1.5"/>
            <text x="110" y="54" text-anchor="middle" font-family="Space Grotesk,sans-serif" font-size="11" fill="#888">KEY</text>
            <!-- Stem -->
            <rect id="sv-stem" x="95" y="68" width="30" height="56" rx="3" fill="#444"/>
            <!-- Spring -->
            <g id="sv-spring">
              <line x1="110" y1="174" x2="110" y2="186" stroke="#666" stroke-width="2"/>
              <line x1="100" y1="180" x2="120" y2="180" stroke="#666" stroke-width="1.5"/>
              <line x1="110" y1="186" x2="110" y2="198" stroke="#666" stroke-width="2"/>
              <line x1="100" y1="192" x2="120" y2="192" stroke="#666" stroke-width="1.5"/>
              <line x1="110" y1="198" x2="110" y2="210" stroke="#666" stroke-width="2"/>
              <line x1="100" y1="204" x2="120" y2="204" stroke="#666" stroke-width="1.5"/>
              <line x1="110" y1="210" x2="110" y2="222" stroke="#666" stroke-width="2"/>
            </g>
            <!-- Contact / magnet area -->
            <rect id="sv-contact" x="85" y="228" width="50" height="16" rx="4" fill="#1e2a1e" stroke="#2a4a2a" stroke-width="1"/>
            <text id="sv-contact-label" x="110" y="240" text-anchor="middle" font-family="Space Grotesk,sans-serif" font-size="9" fill="#3a6a3a">CONTACT</text>
            <!-- LED -->
            <circle id="sv-led" cx="110" cy="260" r="8" fill="#111" stroke="#222" stroke-width="1"/>
            <!-- Base plate -->
            <rect x="65" y="272" width="90" height="14" rx="3" fill="#16161e" stroke="#333" stroke-width="1"/>
            <!-- Bump indicator (tactile) -->
            <circle id="sv-bump" cx="110" cy="148" r="6" fill="transparent"/>
            <!-- Labels -->
            <text x="175" y="52" font-family="Space Grotesk,sans-serif" font-size="9" fill="#555">Keycap</text>
            <line x1="170" y1="50" x2="172" y2="50" stroke="#333" stroke-width="1"/>
            <text x="175" y="105" font-family="Space Grotesk,sans-serif" font-size="9" fill="#555">Stem</text>
            <text x="175" y="198" font-family="Space Grotesk,sans-serif" font-size="9" fill="#555">Spring</text>
            <text x="175" y="238" font-family="Space Grotesk,sans-serif" font-size="9" fill="#555">Contact</text>
          </svg>
        </div>
        <div class="switch-legend" id="switch-legend"></div>
      </div>

      <!-- Product card -->
      <div class="product-result-card" id="product-card">
        <div class="product-img-wrap">
          <img id="product-img" src="" alt="" />
        </div>
        <div class="product-card-body">
          <span class="product-badge" id="product-badge"></span>
          <h3 class="product-name" id="product-name"></h3>
          <p class="product-tagline" id="product-tagline"></p>
          <p class="product-why" id="product-why"></p>
          <p class="product-price" id="product-price"></p>
          <a class="product-cta" id="product-cta" href="#">View this keyboard →</a>
        </div>
      </div>

      <!-- Traits bar -->
      <div class="traits-panel">
        <p class="traits-title">Switch characteristics</p>
        <div class="traits-grid" id="traits-grid"></div>
      </div>
    </div>

    <!-- Also consider -->
    <div class="also-row">
      <p class="also-title">Also worth considering</p>
      <div class="also-cards" id="also-cards"></div>
    </div>

    <div class="retake-row">
      <button class="retake-btn" onclick="retakeQuiz()">↺ Retake the quiz</button>
    </div>
  </div>
</section>

<script>
/* ── DATA ── */
const CATALOG = [
  { slug:"nova65-he", name:"Nova65 HE", category:"keyboard", price:229, originalPrice:279, badge:"S-tier drop", tagline:"Contour cyber 65% keyboard", image:"assets/product-images/Keyboard 1.jpg", specs:{ Layout:"65%", Switches:"Magnetic Hall-effect", Connectivity:"USB-C / 2.4G / Bluetooth" }, switchType:"hall-effect" },
  { slug:"vector-tkl", name:"Vector TKL", category:"keyboard", price:199, originalPrice:249, badge:"Arena ready", tagline:"Molten arcade tenkeyless", image:"assets/product-images/Keyboard 3.jpg", specs:{ Layout:"TKL", Switches:"Linear mechanical", Connectivity:"USB-C / 2.4G" }, switchType:"linear" },
  { slug:"mono75-pro", name:"Mono75 Pro", category:"keyboard", price:259, originalPrice:319, badge:"Stealth build", tagline:"Dark-frame 75% keyboard", image:"assets/product-images/Keyboard 4.jpg", specs:{ Layout:"75%", Switches:"Tactile mechanical", Connectivity:"USB-C / Bluetooth / 2.4G" }, switchType:"tactile" }
];

/* Switch profiles: result logic */
const SWITCH_PROFILES = {
  "hall-effect": {
    name: "Hall-Effect Magnetic",
    headline: "You're built for <em>Hall-Effect</em>.",
    sub: "Magnetic switches — adjustable actuation, zero wear, endgame precision.",
    color: "#00f0ff",
    traits: [
      { name:"Smoothness",  val:98 },
      { name:"Tactility",   val:45 },
      { name:"Noise",       val:20 },
      { name:"Durability",  val:100 }
    ],
    legend: [
      { color:"#00f0ff", label:"Magnet", desc:"No physical contact — lasts forever" },
      { color:"#39ff14", label:"Actuation", desc:"Adjustable from 0.1mm–4.0mm" },
      { color:"#ff67ac", label:"Spring", desc:"Returns cleanly with zero pre-travel" }
    ],
    animType: "smooth",
    slug: "nova65-he"
  },
  "linear": {
    name: "Linear Mechanical",
    headline: "You're a <em>Linear</em> switch person.",
    sub: "Smooth, fast, silent enough — the choice of most competitive players.",
    color: "#ff824d",
    traits: [
      { name:"Smoothness",  val:95 },
      { name:"Tactility",   val:10 },
      { name:"Noise",       val:35 },
      { name:"Durability",  val:80 }
    ],
    legend: [
      { color:"#ff824d", label:"Stem", desc:"Travels straight down — no bump" },
      { color:"#ffd07b", label:"Spring", desc:"Consistent resistance curve" },
      { color:"#888",    label:"Contact", desc:"Registers at bottom of travel" }
    ],
    animType: "smooth",
    slug: "vector-tkl"
  },
  "tactile": {
    name: "Tactile Mechanical",
    headline: "You need a <em>Tactile</em> switch.",
    sub: "A satisfying bump at actuation — perfect feedback without the noise.",
    color: "#c05621",
    traits: [
      { name:"Smoothness",  val:60 },
      { name:"Tactility",   val:85 },
      { name:"Noise",       val:55 },
      { name:"Durability",  val:80 }
    ],
    legend: [
      { color:"#c05621", label:"Bump", desc:"Physical resistance at actuation point" },
      { color:"#ffd07b", label:"Spring", desc:"Returns with tactile feedback" },
      { color:"#888",    label:"Contact", desc:"Registers slightly before bottom" }
    ],
    animType: "tactile",
    slug: "mono75-pro"
  },
  "clicky": {
    name: "Clicky Mechanical",
    headline: "Pure <em>Clicky</em> is your match.",
    sub: "Tactile bump plus audible click — the most satisfying typing experience.",
    color: "#2b6cb0",
    traits: [
      { name:"Smoothness",  val:40 },
      { name:"Tactility",   val:90 },
      { name:"Noise",       val:95 },
      { name:"Durability",  val:75 }
    ],
    legend: [
      { color:"#2b6cb0", label:"Click jacket", desc:"Physical component that snaps to click" },
      { color:"#ffd07b", label:"Bump",         desc:"Tactile resistance before the click" },
      { color:"#888",    label:"Contact",      desc:"Registers at the click point" }
    ],
    animType: "clicky",
    slug: "nova65-he"
  }
};

/* Scoring matrix */
const SCORING = {
  // q1 answers map to switch affinities
  q1: { heavy:{ tactile:2, "hall-effect":1 }, gaming:{ linear:2, "hall-effect":2 }, creative:{ tactile:2, "hall-effect":1 }, casual:{ linear:1, tactile:1 } },
  q2: { silent:{ linear:2 }, subtle:{ tactile:2, "hall-effect":1 }, clicky:{ clicky:3 }, dontcare:{ linear:1, "hall-effect":1 } },
  q3: { buttery:{ linear:3 }, bump:{ tactile:3, "hall-effect":1 }, crisp:{ clicky:3 }, heavy:{ tactile:2 } },
  q4: { minimal:{ linear:1, tactile:1 }, neon:{ "hall-effect":2 }, pro:{ tactile:1, "hall-effect":1 }, bold:{ clicky:1, "hall-effect":1 } }
};

/* State */
let answers = {};
let currentQ = 1;

function startQuiz() {
  document.getElementById('hero-section').style.display = 'none';
  document.getElementById('quiz-section').classList.add('active');
  updateProgress(1);
}

function selectOption(btn) {
  const q = btn.dataset.q;
  document.querySelectorAll(`.option-btn[data-q="${q}"]`).forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  answers[q] = btn.dataset.v;
  document.getElementById(`next-q${q}`).classList.add('enabled');
}

function updateProgress(q) {
  const pct = ((q - 1) / 4) * 100;
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-label').textContent = `Q${q} of 4`;
}

function showQuestion(n) {
  /* hide trivias */
  document.querySelectorAll('.trivia-card').forEach(t => t.classList.remove('active'));
  /* hide all questions */
  document.querySelectorAll('.question-card').forEach(q => q.classList.remove('active'));
  const card = document.getElementById(`q${n}`);
  card.classList.add('active');
  /* re-trigger animation */
  card.style.animation = 'none';
  card.offsetHeight;
  card.style.animation = '';
  currentQ = n;
  updateProgress(n);
}

function goToTrivia(afterQ) {
  if (!answers[afterQ]) return;
  document.querySelectorAll('.question-card').forEach(q => q.classList.remove('active'));
  if (afterQ < 4) {
    const t = document.getElementById(`trivia${afterQ}`);
    t.classList.add('active');
    updateProgress(afterQ + 0.5);
  } else {
    showResult();
  }
}

function goBackTo(n) {
  document.querySelectorAll('.trivia-card').forEach(t => t.classList.remove('active'));
  showQuestion(n);
}

/* ── RESULT ENGINE ── */
function computeResult() {
  const scores = { linear:0, tactile:0, clicky:0, "hall-effect":0 };
  [1,2,3,4].forEach(q => {
    const ans = answers[String(q)];
    if (!ans) return;
    const map = SCORING[`q${q}`][ans];
    if (map) Object.entries(map).forEach(([sw, pts]) => scores[sw] += pts);
  });
  /* pick highest */
  return Object.entries(scores).sort((a,b) => b[1]-a[1])[0][0];
}

function showResult() {
  document.getElementById('quiz-section').classList.remove('active');
  const resultSection = document.getElementById('result-section');
  resultSection.classList.add('active');

  const switchType = computeResult();
  const profile = SWITCH_PROFILES[switchType];
  const product = CATALOG.find(p => p.slug === profile.slug) || CATALOG[0];

  /* Header */
  document.getElementById('result-h2').innerHTML = profile.headline;
  document.getElementById('result-switch-name').textContent = profile.name + ' switch type';

  /* Product card */
  document.getElementById('product-img').src = product.image;
  document.getElementById('product-img').alt = product.name;
  document.getElementById('product-badge').textContent = product.badge;
  document.getElementById('product-name').textContent = product.name;
  document.getElementById('product-tagline').textContent = product.tagline;
  document.getElementById('product-why').textContent = buildWhyCopy(switchType, product);
  document.getElementById('product-price').innerHTML = `$${product.price} <span>$${product.originalPrice}</span>`;
  document.getElementById('product-cta').href = `product.html?slug=${product.slug}`;

  /* Traits */
  const tg = document.getElementById('traits-grid');
  tg.innerHTML = profile.traits.map(t => `
    <div class="trait-item">
      <div class="trait-name">${t.name}</div>
      <div class="trait-bar"><div class="trait-fill" data-val="${t.val/100}" style="background: linear-gradient(90deg, ${profile.color}, #ff00c8);"></div></div>
      <div class="trait-val">${t.val}/100</div>
    </div>
  `).join('');
  /* Animate bars after paint */
  requestAnimationFrame(() => requestAnimationFrame(() => {
    document.querySelectorAll('.trait-fill').forEach(f => {
      f.style.transform = `scaleX(${f.dataset.val})`;
    });
  }));

  /* Switch legend */
  const lg = document.getElementById('switch-legend');
  lg.innerHTML = profile.legend.map(l => `
    <div class="legend-item">
      <div class="legend-dot" style="background:${l.color}"></div>
      <div><span class="legend-label">${l.label}</span><span style="font-size:11px;color:var(--muted)">${l.desc}</span></div>
    </div>
  `).join('');

  /* Also consider */
  const others = CATALOG.filter(p => p.slug !== product.slug && p.category === 'keyboard');
  document.getElementById('also-cards').innerHTML = others.map(p => `
    <a class="also-card" href="product.html?slug=${p.slug}">
      <div class="also-card-name">${p.name}</div>
      <div class="also-card-tag">${p.tagline}</div>
      <div class="also-card-price">$${p.price}</div>
    </a>
  `).join('');

  /* Start SVG animation */
  startSwitchAnimation(profile.animType, profile.color);
}

function buildWhyCopy(switchType, product) {
  const copies = {
    "hall-effect": `The ${product.name} uses magnetic hall-effect switches — your answers show you want precision and longevity without compromise. Adjustable actuation and zero physical contacts means it grows with you.`,
    "linear": `The ${product.name} ships with pre-lubed linear switches — perfectly matched to how you type. Smooth, fast, no bump to slow you down mid-game or mid-sprint.`,
    "tactile": `The ${product.name}'s tactile switches match your need for feedback without the noise. You'll feel every actuation point clearly without disturbing anyone around you.`,
    "clicky": `The ${product.name} delivers both the bump and the click you're after. Your answers show you love full sensory feedback — this setup will satisfy every keypress.`
  };
  return copies[switchType] || '';
}

/* ── SVG ANIMATION ── */
function startSwitchAnimation(type, color) {
  const keycap = document.getElementById('sv-keycap');
  const stem   = document.getElementById('sv-stem');
  const spring = document.getElementById('sv-spring');
  const contact = document.getElementById('sv-contact');
  const led    = document.getElementById('sv-led');
  const bump   = document.getElementById('sv-bump');

  /* Colorize contact + led to match switch type */
  contact.setAttribute('fill', color + '22');
  contact.setAttribute('stroke', color + '88');
  document.getElementById('sv-contact-label').setAttribute('fill', color);
  stem.setAttribute('fill', color + 'bb');
  bump.setAttribute('fill', type === 'tactile' || type === 'clicky' ? color : 'transparent');

  let frame = 0;
  const TOTAL = 120; /* frames per cycle */

  function easeInOut(t) { return t < 0.5 ? 2*t*t : -1+(4-2*t)*t; }

  function tick() {
    frame = (frame + 1) % TOTAL;
    const t = frame / TOTAL;
    /* Press phase: t 0→0.4, hold: 0.4→0.6, release: 0.6→1.0 */
    let press = 0;
    if (t < 0.4) press = easeInOut(t / 0.4);
    else if (t < 0.6) press = 1;
    else press = easeInOut(1 - (t - 0.6) / 0.4);

    const travel = press * 24; /* 24px total travel */

    /* Move keycap + stem */
    keycap.setAttribute('y', 30 + travel);
    stem.setAttribute('y', 68 + travel);
    stem.setAttribute('height', Math.max(1, 56 - travel * 0.3));

    /* Compress spring (scale it visually) */
    const springScale = 1 - press * 0.4;
    spring.setAttribute('transform', `translate(0, ${travel * 0.6}) scale(1, ${springScale})`);
    spring.setAttribute('transform-origin', `110 174`);

    /* LED glow on contact */
    const activated = press > 0.45;
    led.setAttribute('fill', activated ? color : '#111');
    led.setAttribute('stroke', activated ? color + '88' : '#222');

    /* Tactile bump flash */
    if (type === 'tactile' || type === 'clicky') {
      const bumpActive = press > 0.3 && press < 0.55;
      bump.setAttribute('fill', bumpActive ? color : 'transparent');
      bump.setAttribute('r', bumpActive ? '7' : '6');
    }

    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function retakeQuiz() {
  answers = {};
  currentQ = 1;
  /* Reset selections */
  document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
  document.querySelectorAll('.q-next-btn').forEach(b => b.classList.remove('enabled'));
  /* Reset trait bars */
  document.querySelectorAll('.trait-fill').forEach(f => f.style.transform = 'scaleX(0)');
  /* Show hero */
  document.getElementById('result-section').classList.remove('active');
  document.getElementById('quiz-section').classList.remove('active');
  const hero = document.getElementById('hero-section');
  hero.style.display = '';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>
</body>
</html>
