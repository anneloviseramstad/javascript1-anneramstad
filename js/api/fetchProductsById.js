import { productsUrl } from "/constants/api.js";

export async function fetchProductsById(id) {
  const url = `${productsUrl}/${id}`;

  const response = await fetch(url);

  if (response.ok) {
    const json = await response.json();
    return json;
  }
  throw new Error("Error fetching products");
}
