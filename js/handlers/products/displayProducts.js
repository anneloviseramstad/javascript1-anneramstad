import { fetchProducts } from "../../api/products/fetchProducts.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import { createProductsHtml } from "../../ui/products/createProducts.js";
import { filterProducts } from "./filterProducts.js";
import { handleCategoryChange } from "./handleCategoryChange.js";
import { handleSizeChange } from "./handleSizeChange.js";
export async function displayProducts() {
  const container = document.querySelector("#products-container");
  try {
    const products = await fetchProducts();

    createProductsHtml(container, products);
    filterProducts(products);
    handleCategoryChange(products);
    handleSizeChange(products);
  } catch (error) {
    console.error(error);
    displayMessage("#products-container", "error", error.message);
  }
}
