import { productsUrl } from "../constants/api.js";

export async function fetchProducts() {
  const response = await fetch(productsUrl);

  if (response.ok) {
    const json = await response.json();
    return json;
  }
  throw new Error("Error fetching products");
}
