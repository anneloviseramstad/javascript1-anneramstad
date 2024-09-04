import { displayMessage } from "../common/displayMessage.js";

export function createCartHtml(container, cart) {
  if (cart.length === 0) {
    return displayMessage(container, "warning", "Your cart is empty");
  }

  cart.forEach((cartItem) => {
    console.log(cartItem);
    const { title } = cartItem;

    const cartCard = document.createElement("div");
    cartCard.classList.add("cart-item");

    const infoWrapper = document.createElement("div");
    infoWrapper.classList.add("cart-info");

    const titleElement = document.createElement("h3");
    titleElement.textContent = title;

    const priceElement = document.createElement("p");
    priceElement.textContent = `$${cartItem.price}`;

    const imageElement = document.createElement("img");
    imageElement.src = cartItem.image;
    cartCard.classList.add("cart-image");
    imageElement.alt = "image of " + cartItem.title;

    cartCard.append(titleElement);
    cartCard.append(priceElement);
    cartCard.append(imageElement);
    container.append(cartCard);
  });
}
