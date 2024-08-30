import { productsUrl } from "../../constants/api.js";

export async function fetchProducts() {
  const response = await fetch(productsUrl);
  const products = await response.json();
  return products;
}
