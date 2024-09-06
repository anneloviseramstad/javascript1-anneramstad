import { displayProducts } from "./handlers/products/displayProducts.js";
import { displayProduct } from "./handlers/products/displayProduct.js";
import { displayCart } from "./handlers/cart/displayCart.js";
import { fetchProductsByGender } from "./api/filterProductsByGender.js";
function router() {
  //const { pathname } = window.location;
  const fullPath = window.location.pathname;
  const pathParts = fullPath.split("/").slice(2).join("/");
  const pathname = `/${pathParts}`;

  switch (pathname) {
    case "/":
    case "/index.html":
    case "/checkout/confirmation/index.html":
      displayProducts();
      break;
    case "/women/index.html":
    case "/men/index.html":
      fetchProductsByGender();
      break;
    case "/product/index.html":
      displayProduct();
      break;
    case "/checkout/index.html":
      displayCart();
  }
}

router();
