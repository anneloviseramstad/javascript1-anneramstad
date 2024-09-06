import { isIdInCart } from "../../utils/cart.js";

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

    productCard.append(imageElement);
    productCard.append(titleElement);
    productCard.append(priceElement);

    const cartIcon = document.createElement("i");
    cartIcon.classList.add("fa-solid", "fa-cart-plus");
    cartIcon.dataset.id = id;
    cartIcon.dataset.title = title;
    cartIcon.dataset.image = image;
    cartIcon.dataset.price = price;
    cartIcon.addEventListener("click", function (event) {
      event.stopPropagation();
      console.log("Product is added to cart");
    });

    if (isIdInCart(id)) {
      cartIcon.classList.add("in-cart");
    }

    productCard.append(link);
    productCard.append(cartIcon);

    parent.append(productCard);
  });
}
