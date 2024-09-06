import { fetchProducts } from "./products/fetchProducts";

export async function fetchProductsByGender(gender) {
  const products = await fetchProducts();
  return products.filter((product) => product.gender === gender);
}

async function fetchProductsByGender() {
  const path = window.location.pathname;

  let gender = "";

  if (path.includes("men")) {
    gender = "male";
  } else if (path.includes("women")) {
    gender = "female";
  }

  try {
    const products = await fetchProductsByGender(gender);

    renderProducts(products);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
function renderProducts(products) {
  const productContainer = document.getElementById("product-container");

  productContainer.innerHTML = "";

  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
    <h2>${product.name}</h2>
    <p>${product.description}</p>
    <p>Price: ${product.price}</p>
  `;
    productContainer.appendChild(productElement);
  });
}

displayProductsForGender();
