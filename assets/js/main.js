(function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

  const toggle = document.querySelector(".menu-toggle");
  const navbar = document.querySelector(".navbar");
  if (toggle && navbar) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      navbar.classList.toggle("menu-open");
    });
  }

  const featuredGrid = document.querySelector("[data-featured-grid]");
  if (featuredGrid && window.AurixCatalog) {
    const featured = window.AurixCatalog.filter((item) => item.featured).slice(0, 4);
    featuredGrid.innerHTML = featured.map(createProductCard).join("");
    featuredGrid.querySelectorAll(".product-card.reveal").forEach((element) => {
      observer.observe(element);
      element.classList.add("is-visible");
    });
  }

  initScrollyExperience();
  initParallax();
  initTiltCards();
})();

function createProductCard(product) {
  return `
    <article class="product-card reveal">
      <a href="product.html?slug=${product.slug}">
        <div class="product-card-visual">${createProductMedia(product, "card", 0)}</div>
        <div class="product-card-tags">
          <span class="pill-sale">${product.badge}</span>
          <span class="pill-category">${product.category}</span>
        </div>
        <div class="product-card-hud">
          <span>Power ${product.power || "88"}</span>
          <span>Loadout Ready</span>
        </div>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="product-meta">
          <div class="price">
            <strong>$${product.price}</strong>
            <span>$${product.originalPrice}</span>
          </div>
          <span class="text-link">Inspect item</span>
        </div>
        <div class="product-card-action">
          <span class="button button-primary">Deploy to cart</span>
        </div>
      </a>
    </article>
  `;
}

function createProductMedia(product, size, variant) {
  const source = resolveProductImage(product, variant);
  return `
    <img
      class="product-render product-render--${size}"
      src="${source}"
      alt="${product.imageLabel || product.name}"
      loading="lazy"
    />
  `;
}

function resolveProductImage(product, variant) {
  if (Array.isArray(product.gallery) && product.gallery[variant]) {
    return product.gallery[variant];
  }

  if (product.image) {
    return product.image;
  }

  return buildProductImage(product, variant);
}

function buildProductImage(product, variant) {
  const art = product.art;
  const [a, b, c] = art.palette;
  const accent = art.accent;
  let svg = "";

  if (art.type === "keyboard") {
    const rotation = [-8, -3, 4, 9][variant % 4];
    const gloss = [0.22, 0.16, 0.26, 0.18][variant % 4];
    svg = `
      <svg width="1200" height="760" viewBox="0 0 1200 760" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="760" rx="40" fill="#101010"/>
        <circle cx="1020" cy="120" r="160" fill="${accent}" fill-opacity="0.2"/>
        <circle cx="170" cy="640" r="180" fill="${b}" fill-opacity="0.16"/>
        <g transform="translate(140 190) rotate(${rotation} 430 160)">
          <rect x="0" y="0" width="860" height="320" rx="32" fill="url(#bg)" stroke="rgba(255,255,255,0.44)"/>
          <rect x="18" y="18" width="824" height="284" rx="26" fill="rgba(0,0,0,0.18)" stroke="rgba(255,255,255,0.22)"/>
          <rect x="54" y="54" width="752" height="212" rx="18" fill="rgba(255,255,255,${gloss})"/>
          <g fill="#151515" fill-opacity="0.2">
            <rect x="86" y="78" width="62" height="42" rx="9"/>
            <rect x="158" y="78" width="62" height="42" rx="9"/>
            <rect x="230" y="78" width="62" height="42" rx="9"/>
            <rect x="302" y="78" width="62" height="42" rx="9"/>
            <rect x="374" y="78" width="62" height="42" rx="9"/>
            <rect x="446" y="78" width="62" height="42" rx="9"/>
            <rect x="518" y="78" width="62" height="42" rx="9"/>
            <rect x="590" y="78" width="62" height="42" rx="9"/>
            <rect x="662" y="78" width="112" height="42" rx="9"/>
            <rect x="104" y="132" width="62" height="42" rx="9"/>
            <rect x="176" y="132" width="62" height="42" rx="9"/>
            <rect x="248" y="132" width="62" height="42" rx="9"/>
            <rect x="320" y="132" width="62" height="42" rx="9"/>
            <rect x="392" y="132" width="62" height="42" rx="9"/>
            <rect x="464" y="132" width="62" height="42" rx="9"/>
            <rect x="536" y="132" width="62" height="42" rx="9"/>
            <rect x="608" y="132" width="166" height="42" rx="9"/>
            <rect x="122" y="186" width="86" height="42" rx="9"/>
            <rect x="218" y="186" width="86" height="42" rx="9"/>
            <rect x="314" y="186" width="196" height="42" rx="9"/>
            <rect x="520" y="186" width="104" height="42" rx="9"/>
            <rect x="634" y="186" width="140" height="42" rx="9"/>
          </g>
        </g>
        <defs>
          <linearGradient id="bg" x1="60" y1="40" x2="780" y2="300" gradientUnits="userSpaceOnUse">
            <stop stop-color="${a}"/>
            <stop offset="0.54" stop-color="${b}"/>
            <stop offset="1" stop-color="${c}"/>
          </linearGradient>
        </defs>
      </svg>
    `;
  } else if (art.type === "mouse") {
    const tilt = [0, -6, 8, 14][variant % 4];
    svg = `
      <svg width="1000" height="760" viewBox="0 0 1000 760" xmlns="http://www.w3.org/2000/svg">
        <rect width="1000" height="760" rx="40" fill="url(#bg)"/>
        <circle cx="840" cy="140" r="130" fill="${accent}" fill-opacity="0.18"/>
        <g transform="translate(270 110) rotate(${tilt} 220 250)">
          <path d="M80 72C80 32.2355 112.236 0 152 0H288C327.764 0 360 32.2355 360 72V334C360 433.411 279.411 514 180 514H260C160.589 514 80 433.411 80 334V72Z" fill="url(#mouse)" />
          <path d="M220 72V222" stroke="#202020" stroke-opacity="0.18" stroke-width="5"/>
          <rect x="190" y="50" width="60" height="76" rx="20" fill="#212121" fill-opacity="0.18"/>
          <circle cx="220" cy="432" r="13" fill="${accent}"/>
        </g>
        <defs>
          <linearGradient id="bg" x1="90" y1="60" x2="910" y2="690" gradientUnits="userSpaceOnUse">
            <stop stop-color="${a}"/>
            <stop offset="0.58" stop-color="${b}"/>
            <stop offset="1" stop-color="${c}"/>
          </linearGradient>
          <linearGradient id="mouse" x1="220" y1="0" x2="220" y2="514" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#DADFE9"/>
          </linearGradient>
        </defs>
      </svg>
    `;
  } else if (art.type === "cable") {
    const hue = [0, 10, -12, 18][variant % 4];
    svg = `
      <svg width="1200" height="760" viewBox="0 0 1200 760" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="760" rx="40" fill="#0E0E0E"/>
        <rect x="60" y="60" width="1080" height="640" rx="34" fill="rgba(255,255,255,0.04)"/>
        <g transform="translate(160 180) rotate(${hue} 420 120)">
          <path d="M0 124C120 0 264 0 384 124C504 248 648 248 768 124V198C648 322 504 322 384 198C264 74 120 74 0 198V124Z" fill="${a}"/>
          <path d="M0 150C120 26 264 26 384 150C504 274 648 274 768 150V224C648 348 504 348 384 224C264 100 120 100 0 224V150Z" fill="${b}"/>
          <circle cx="802" cy="138" r="26" fill="#D6D6D6"/>
          <rect x="796" y="112" width="58" height="52" rx="12" fill="#C2C2C2"/>
        </g>
      </svg>
    `;
  } else {
    const shift = [0, 8, -8, 14][variant % 4];
    svg = `
      <svg width="1200" height="760" viewBox="0 0 1200 760" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="760" rx="40" fill="#101010"/>
        <rect x="82" y="142" width="1036" height="476" rx="34" fill="url(#pad)" transform="rotate(${shift} 600 380)"/>
        <defs>
          <linearGradient id="pad" x1="120" y1="180" x2="1020" y2="580" gradientUnits="userSpaceOnUse">
            <stop stop-color="${a}"/>
            <stop offset="0.54" stop-color="${b}"/>
            <stop offset="1" stop-color="${c}"/>
          </linearGradient>
        </defs>
      </svg>
    `;
  }

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function createArt(art, size) {
  const style = `--art-a:${art.palette[0]};--art-b:${art.palette[1]};--art-c:${art.palette[2]};--art-accent:${art.accent};`;
  if (art.type === "keyboard") {
    return `
      <div class="art art-${size} art-keyboard" style="${style}">
        <div class="art-surface"></div>
        <div class="art-grid"></div>
      </div>
    `;
  }

  if (art.type === "mouse") {
    return `
      <div class="art art-${size} art-mouse-wrap" style="${style}">
        <div class="art-mouse"></div>
      </div>
    `;
  }

  if (art.type === "cable") {
    return `
      <div class="art art-${size} art-cable-wrap" style="${style}">
        <div class="art-cable"></div>
      </div>
    `;
  }

  return `
    <div class="art art-${size} art-pad-wrap" style="${style}">
      <div class="art-pad"></div>
    </div>
  `;
}

function initScrollyExperience() {
  const mediaRoot = document.querySelector("[data-scrolly-visual]");
  const tag = document.querySelector("[data-scrolly-tag]");
  const title = document.querySelector("[data-scrolly-title]");
  const text = document.querySelector("[data-scrolly-text]");
  const steps = document.querySelectorAll(".story-step[data-product]");

  if (!mediaRoot || !tag || !title || !text || !steps.length || !window.AurixCatalog) return;

  const activate = (slug) => {
    const product = window.AurixCatalog.find((item) => item.slug === slug);
    if (!product) return;
    mediaRoot.innerHTML = createProductMedia(product, "detail", 1);
    tag.textContent = product.tagline;
    title.textContent = product.name;
    text.textContent = product.description;
    steps.forEach((step) => step.classList.toggle("is-active", step.dataset.product === slug));
  };

  activate(steps[0].dataset.product);

  const scrollyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activate(entry.target.dataset.product);
        }
      });
    },
    { threshold: 0.55 }
  );

  steps.forEach((step) => {
    scrollyObserver.observe(step);
    step.addEventListener("mouseenter", () => activate(step.dataset.product));
  });
}

function initParallax() {
  const parallaxItems = document.querySelectorAll("[data-parallax]");
  if (!parallaxItems.length) return;

  const update = () => {
    const viewportHeight = window.innerHeight || 1;
    parallaxItems.forEach((item) => {
      const speed = Number(item.dataset.parallax || 0);
      const rect = item.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const offset = (center - viewportHeight / 2) * speed;
      item.style.transform = `translate3d(0, ${offset}px, 0)`;
    });
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
}

function initTiltCards() {
  const tiltItems = document.querySelectorAll("[data-tilt]");
  tiltItems.forEach((item) => {
    item.addEventListener("mousemove", (event) => {
      const rect = item.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      const rotateY = (px - 0.5) * 8;
      const rotateX = (0.5 - py) * 8;
      item.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    item.addEventListener("mouseleave", () => {
      item.style.transform = "";
    });
  });
}
