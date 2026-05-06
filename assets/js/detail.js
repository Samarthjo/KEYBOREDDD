(function () {
  if (document.body.dataset.page !== "product" || !window.AurixCatalog) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug") || "nova65-he";
  const product = window.AurixCatalog.find((item) => item.slug === slug) || window.AurixCatalog[0];
  const related = window.AurixCatalog
    .filter((item) => item.slug !== product.slug && item.category === product.category)
    .slice(0, 3);

  const root = document.querySelector("[data-product-detail]");
  const galleryItems = [];
  root.innerHTML = `
    <section class="detail-grid">
      <div class="detail-gallery reveal">
        <div class="detail-visual" data-main-art>${createProductMedia(product, "detail", 0)}</div>
        <div class="detail-thumbs">
          ${galleryItems
            .map(
              (index) => `
                <button class="thumb ${index === 0 ? "is-active" : ""}" data-thumb="${index}">
                  ${createProductMedia(product, "thumb", index)}
                </button>
              `
            )
            .join("")}
        </div>
      </div>
      <aside class="detail-copy reveal">
        <div class="detail-header">
          <p class="eyebrow">${product.tagline}</p>
          <h1>${product.name}</h1>
          <p>${product.description}</p>
        </div>
        <div class="detail-hud">
          <span class="detail-stat">Power ${product.power || "88"}</span>
          <span class="detail-stat">Rank ${product.badge}</span>
        </div>
        <div class="detail-price">
          <strong>$${product.price}</strong>
          <span>$${product.originalPrice}</span>
        </div>
        <div class="detail-actions">
          <a class="button button-primary" href="products.html">Buy loadout</a>
          <a class="button button-secondary" href="products.html">Back to catalog</a>
        </div>
        <ul>
          ${product.features.map((feature) => `<li>${feature}</li>`).join("")}
        </ul>
      </aside>
    </section>

    <section class="detail-section reveal">
      <p class="eyebrow">Overview</p>
      <h2>Built to look premium on the desk and perform under pressure</h2>
      <ul class="spec-list">
        ${product.features.map((feature) => `<li>${feature}</li>`).join("")}
      </ul>
    </section>

    <section id="specs" class="detail-specs reveal">
      <p class="eyebrow">Specifications</p>
      <h2>Technical details</h2>
      <div class="spec-grid">
        ${Object.entries(product.specs)
          .map(
            ([label, value]) => `
              <article class="spec-card">
                <strong>${label}</strong>
                <p>${value}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>

    <section id="related" class="related-products reveal">
      <div class="section-heading split">
        <div>
          <p class="eyebrow">Related products</p>
          <h2>More in this category</h2>
        </div>
        <a class="text-link" href="products.html?category=${product.category}">See all ${product.category}s</a>
      </div>
      <div class="product-grid">
        ${related.map(createProductCard).join("")}
      </div>
    </section>
  `;

  document.querySelectorAll(".thumb").forEach((thumb, index) => {
    thumb.addEventListener("click", () => {
      document.querySelectorAll(".thumb").forEach((item) => item.classList.remove("is-active"));
      thumb.classList.add("is-active");
      const main = document.querySelector("[data-main-art]");
      main.innerHTML = createProductMedia(product, "detail", index);
    });
  });

  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
})();
