export function createProducts(container, products) {
  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    const div = document.createElement("div");
    div.classList.add("product");

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.title;

    const h2 = document.createElement("h2");
    h2.textContent = product.title;

    const p = document.createElement("p");
    p.textContent = product.description;

    div.append(img);
    div.append(h2);
    div.append(p);
    container.append(div);
  }
}
