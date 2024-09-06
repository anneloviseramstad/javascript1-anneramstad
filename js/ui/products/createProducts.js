import { createCartIcon } from "../../ui/cart/createCartIcon.js";

export function createProductsHtml(container, products) {
  let parent = container;

  if (typeof container === "string") {
    parent = document.querySelector(container);
  }

  if (products.length === 0) {
    parent.innerHTML = "No products found";
    return;
  }

  parent.innerHTML = "";

  products.forEach((product) => {
    const { id, title, price, image } = product;

    const productCard = document.createElement("a");
    productCard.classList.add("product");
    productCard.href = `/javascript1-anneramstad/product/index.html?id=${id}`;

    const imageElement = document.createElement("img");
    imageElement.src = image;
    imageElement.alt = `Image of ${title}`;

    const titleElement = document.createElement("h3");
    titleElement.textContent = title;

    const priceElement = document.createElement("p");
    priceElement.textContent = price;

    const cartIcon = createCartIcon(id, title, price, image);

    productCard.append(imageElement);
    productCard.append(titleElement);
    productCard.append(priceElement);
    productCard.append(cartIcon);
    parent.append(productCard);
  });
}
