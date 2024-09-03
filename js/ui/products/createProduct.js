export function createProductHtml(container, product) {
  container.innerHTML = "";
  console.log("product", product);

  const { title, price } = product;

  const productCard = document.createElement("div");
  productCard.classList.add("product-detail");

  const imageElement = document.createElement("img");
  imageElement.src = `${product.image}`;
  imageElement.alt = `Image of ${title}`;
  productCard.append(imageElement);

  const titleElement = document.createElement("h4");
  titleElement.textContent = title;

  const priceElement = document.createElement("p");
  priceElement.textContent = price;

  productCard.append(titleElement);
  productCard.append(priceElement);

  container.append(productCard);
}
