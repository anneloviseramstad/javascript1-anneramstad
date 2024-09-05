import { displayProducts } from "./handlers/products/displayProducts.js";
import { displayProduct } from "./handlers/products/displayProduct.js";
import { displayCart } from "./handlers/cart/displayCart.js";

function router() {
  //const { pathname } = window.location;
  const fullPath = window.location.pathname;
  const pathParts = fullPath.split("/").slice(2).join("/");
  const pathname = `/${pathParts}`;

  switch (pathname) {
    case "/":
    case "/index.html":
      console.log("I'm on the home page");
      displayProducts();
      break;
    case "product/index.html":
      console.log("I'm on the products page");
      displayProduct();
      break;
    case "checkout/index.html":
      displayCart();
  }
}

router();
