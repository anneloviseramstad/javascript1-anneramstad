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

  const cartIcon = createCartIcon(
    id,
    title,
    price,
    image,
    baseColor,
    description
  );

  infoWrapper.append(titleElement);
  infoWrapper.append(colorElement);
  infoWrapper.append(priceElement);
  infoWrapper.append(cartIcon);
  infoWrapper.append(descriptionElement);

  productCard.append(imageElement);
  productCard.append(infoWrapper);

  container.append(productCard);
}
