import { displayProducts } from "./handlers/products/displayProducts.js";
import { displayProduct } from "./handlers/products/displayProduct.js";
import { displayCart } from "./handlers/cart/displayCart.js";

function router() {
  const { pathname } = window.location;

  console.log(pathname);

  switch (pathname) {
    case "/":
    case "/index.html":
    case "/anneloviseramstad.github.io/javascript1-anneramstad/":
      console.log("I'm on the home page");
      displayProducts();
      break;
    case "/product/index.html":
      console.log("I'm on the products page");
      displayProduct();
      break;
    case "/checkout/index.html":
      displayCart();
  }
}

router();
