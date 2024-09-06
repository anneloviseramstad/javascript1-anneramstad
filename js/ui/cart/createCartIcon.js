import { isIdInCart } from "../../utils/cart.js";

export function createCartIcon(
  id,
  title,
  price,
  image,
  baseColor,
  description
) {
  const cartIcon = document.createElement("i");
  cartIcon.classList.add("fa-solid", "fa-cart-plus");
  cartIcon.id = "cart-icon";
  cartIcon.dataset.id = id;
  cartIcon.dataset.title = title;
  cartIcon.dataset.price = price;
  cartIcon.dataset.image = image;
  cartIcon.dataset.baseColor = baseColor;
  cartIcon.dataset.description = description;

  if (isIdInCart(id)) {
    cartIcon.classList.add("fa-cart-shopping", "toned");
  } else {
    cartIcon.classList.add("fa-cart-plus");
  }

  return cartIcon;
}
