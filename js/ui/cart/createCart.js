import { displayMessage } from "common/displayMessage.js";
import { clearCart, getTotalPrice } from "../utils/cart.js";

export function createCartHtml(container, cart) {
  if (cart.length === 0) {
    return displayMessage(container, "warning", "Your cart is empty");
  }

  const totalItems = document.createElement("p");
  totalItems.textContent = `Total Items: ${cart.length}`;

  const totalPrice = document.createElement("p");
  totalPrice.textContent = `Total Price: $${getTotalPrice(cart)}`;
  totalPrice.classList.add("total-price");

  container.append(totalItems);
  container.append(totalPrice);

  const button = confirmationButton();

  cart.forEach((cartItem) => {
    console.log(cartItem);
    const { title } = cartItem;

    const cartCard = document.createElement("div");
    cartCard.classList.add("cart-detail");

    const titleElement = document.createElement("h3");
    titleElement.textContent = title;

    const priceElement = document.createElement("p");
    priceElement.textContent = `Price: $${cartItem.price}`;

    const imageElement = document.createElement("img");
    imageElement.src = cartItem.image;
    cartCard.classList.add("cart-image");
    imageElement.alt = "image of " + cartItem.title;

    cartCard.append(titleElement);
    cartCard.append(priceElement);
    cartCard.append(imageElement);
    container.append(cartCard);
    container.append(totalPrice);
    container.append(button);
  });
}

function confirmationButton() {
  const button = document.createElement("button");
  button.classList.add("btn", "btn-checkout");
  button.textContent = "Complete Order";

  button.addEventListener("click", () => {
    clearCart();
    window.location.href = "/checkout/confirmation/index.html";
  });

  return button;
}
