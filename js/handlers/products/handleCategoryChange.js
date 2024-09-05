import { createProductsHtml } from "../ui/products/createProducts.js";

export function handleCategoryChange(products) {
  const categorySelect = document.querySelector("#category");

  if (categorySelect) {
    categorySelect.addEventListener("change", respondToCategoryChange);
  }
  function respondToCategoryChange(event) {
    const selectedCategory = event.target.value;

    const filteredProducts = products.filter((product) => {
      if (product.gender === selectedCategory) {
        return true;
      }
    });

    console.log(filteredProducts);
    createProductsHtml("#products-container", filteredProducts);
  }
}
