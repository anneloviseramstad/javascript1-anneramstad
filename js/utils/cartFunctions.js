export function addToCart(id, title, image, price) {
  const newItem = { id: id, title: title, image: image, price: price };

  const cart = getCart();
  cart.push(newItem);
  saveToCart(cart);
}
