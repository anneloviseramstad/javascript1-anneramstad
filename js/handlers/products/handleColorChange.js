import { createProductsHtml } from "../../ui/products/createProducts.js";

export function handleColorChange(products) {
  const colorSelect = document.querySelector("#baseColor");

  if (colorSelect) {
    colorSelect.addEventListener("change", respondToColorChange);
  }
  function respondToColorChange(event) {
    const selectedColor = event.target.value;

    const filteredProducts = products.filter((product) => {
      if (product.baseColor === selectedColor) {
        return true;
      }
    });

    console.log(filteredProducts);
    createProductsHtml("#products-container", filteredProducts);
  }
}
