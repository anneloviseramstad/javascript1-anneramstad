import { fetchProductsById } from "../../api/fetchProductsById.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import { createProductHtml } from "../../ui/products/createProduct.js";
import { getQueryParam } from "../../utils/getQueryParam.js";
import { handleCartIconClick } from "../cart/handleCartIconClick.js";

export async function displayProduct() {
  const id = getQueryParam("id");

  if (!id) {
    window.location.href = "/";
  }

  const container = document.querySelector("#details-container");

  try {
    const product = await fetchProductsById(id);

    createProductHtml(container, product);
    handleCartIconClick(product);
  } catch (error) {
    console.error(error);
    displayMessage(container, "error", error.message);
  }
}
