import { createProductsHtml } from "../../ui/products/createProducts.js";

export function handleCategoryChange(products) {
  const categorySelect = document.querySelector("#category");

  if (categorySelect) {
    categorySelect.addEventListener("change", respondToCategoryChange);
  }
  function respondToCategoryChange(event) {
    console.log(event.target.value);

    const selectedCategory = event.target.value;

    const filteredProducts = products.filter((product) => {
      if (product.gender === selectedCategory) {
        return true;
      }
    });
    createProductsHtml("#products-container", filteredProducts);
  }
}
