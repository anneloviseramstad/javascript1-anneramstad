import { isIdInCart } from "../../utils/cart.js";

export function createProductHtml(container, product) {
  container.innerHTML = "";

  const { id, title, price, image, baseColor, description } = product;

  const productCard = document.createElement("div");
  productCard.classList.add("product-detail");

  const imageElement = document.createElement("img");
  imageElement.src = image;
  imageElement.alt = `Image of ${title}`;
  imageElement.classList.add("product-image");
  productCard.append(imageElement);

  const infoWrapper = document.createElement("div");
  infoWrapper.classList.add("product-info");

  const titleElement = document.createElement("h2");
  titleElement.textContent = title;

  const priceElement = document.createElement("h3");
  priceElement.textContent = `Price: ${price}`;

  const colorElement = document.createElement("p");
  colorElement.textContent = `Color: ${baseColor}`;

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = description;

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

  infoWrapper.append(titleElement);
  infoWrapper.append(colorElement);
  infoWrapper.append(priceElement);
  infoWrapper.append(cartIcon);
  infoWrapper.append(descriptionElement);

  productCard.append(imageElement);
  productCard.append(infoWrapper);

  container.append(productCard);
}
