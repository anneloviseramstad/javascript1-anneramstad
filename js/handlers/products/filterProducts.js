import { createProductsHtml } from "../ui/products/createProducts.js";

export function filterProducts(products) {
  const searchInput = document.querySelector("#search");

  if (searchInput) {
    searchInput.addEventListener("input", handleFilter);
  }

  function handleFilter(event) {
    const filterValue = event.target.value.trim().toLowerCase();
    console.log(filterValue);

    const filterProducts = products.filter((product) => {
      if (product.title.toLowerCase().startsWith(filterValue)) {
        return true;
      }
    });
    console.log(filterProducts);
    createProductsHtml("#products-container", filterProducts);
  }
}
