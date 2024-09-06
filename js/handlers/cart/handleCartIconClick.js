import { isIdInCart, removeFromCart } from "../../utils/cart.js";
import { addToCart } from "../../utils/cartFunctions.js";
export function handleCartIconClick() {
  const cartIcon = document.querySelector("#cart-icon");
  cartIcon.addEventListener("click", respondToCartIconClick);

  function respondToCartIconClick(event) {
    const cartIcon = event.target;

    const { id, title, image, price } = cartIcon.dataset;

    if (isIdInCart(id)) {
      removeFromCart(id);
      event.target.classList.add("fa-cart-plus");
      event.target.classList.remove("fa-cart-shopping", "toned");
    } else {
      addToCart(id, title, image, price);
      event.target.classList.remove("fa-cart-plus");
      event.target.classList.add("fa-cart-shopping", "toned");
    }
  }
}
