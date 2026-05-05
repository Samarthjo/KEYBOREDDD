(function () {
  function init() {
    const keys = document.querySelectorAll('.story-key');
    if (!keys.length) return;

    const section = document.getElementById('scroll-story-section');
    if (!section) return;

    let triggered = false;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !triggered) {
          triggered = true;
          animateKeys(keys);
        }
      });
    }, { threshold: 0.3 });

    observer.observe(section);
  }

  function animateKeys(keys) {
    keys.forEach((key, i) => {
      setTimeout(() => {
        // Press down
        key.classList.add('story-key-press');

        setTimeout(() => {
          // Release back up + stay lit
          key.classList.remove('story-key-press');
          key.classList.add('story-key-lit');
        }, 140);

      }, i * 110);
    });
  }

  // Re-trigger on scroll back (optional — remove if you want once-only)
  function resetOnLeave() {
    const section = document.getElementById('scroll-story-section');
    if (!section) return;

    const resetObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          document.querySelectorAll('.story-key').forEach(k => {
            k.classList.remove('story-key-lit', 'story-key-press');
          });
          // Re-init to allow re-trigger on next scroll in
          init();
        }
      });
    }, { threshold: 0.05 });

    resetObserver.observe(section);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { init(); resetOnLeave(); });
  } else {
    init();
    resetOnLeave();
  }
})();
