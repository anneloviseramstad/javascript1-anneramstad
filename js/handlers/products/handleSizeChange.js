import { createProductsHtml } from "../ui/products/createProducts.js";

export function handleSizeChange(products) {
  const sizeSelect = document.querySelector("#sizes");

  if (sizeSelect) {
    sizeSelect.addEventListener("change", respondToSizeChange);
  }
  function respondToSizeChange(event) {
    const selectedSize = event.target.value;

    const filteredSizes = products.filter((product) => {
      if (product.sizes === selectedSize) {
        return true;
      }
    });

    console.log(filteredSizes);
    createProductsHtml("#products-container", filteredSizes);
  }
}
