(function () {
  if (document.body.dataset.page !== "products" || !window.AurixCatalog) return;

  const params = new URLSearchParams(window.location.search);
  let activeCategory = params.get("category") || "all";
  let activeSort = "featured";

  const grid = document.querySelector("[data-products-grid]");
  const count = document.querySelector("[data-results-count]");
  const categoryButtons = document.querySelectorAll("[data-filter-group='category'] [data-filter]");
  const sortButtons = document.querySelectorAll("[data-filter-group='sort'] [data-sort]");

  function render() {
    let products = [...window.AurixCatalog];

    if (activeCategory !== "all") {
      products = products.filter((product) => product.category === activeCategory);
    }

    if (activeSort === "price-low") {
      products.sort((a, b) => a.price - b.price);
    } else if (activeSort === "price-high") {
      products.sort((a, b) => b.price - a.price);
    } else {
      products.sort((a, b) => Number(b.featured) - Number(a.featured));
    }

    grid.innerHTML = products.map(createProductCard).join("");
    count.textContent = `${products.length} product${products.length === 1 ? "" : "s"}`;
    document.querySelectorAll(".product-card.reveal").forEach((element) => {
      element.classList.add("is-visible");
    });
  }

  categoryButtons.forEach((button) => {
    if (button.dataset.filter === activeCategory) {
      button.classList.add("is-active");
    }

    button.addEventListener("click", () => {
      activeCategory = button.dataset.filter;
      categoryButtons.forEach((item) => item.classList.toggle("is-active", item === button));
      render();
    });
  });

  sortButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeSort = button.dataset.sort;
      sortButtons.forEach((item) => item.classList.toggle("is-active", item === button));
      render();
    });
  });

  render();
})();
