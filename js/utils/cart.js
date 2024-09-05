const CART_KEY = "cart";

function saveToCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

export function isIdInCart(id) {
  const cart = getCart();
  return cart.some((item) => item.id === id);
}

export function addToCart(id, title, image, price) {
  const newItem = { id: id, title: title, image: image, price: price };

  const cart = getCart();
  cart.push(newItem);
  saveToCart(cart);
}

export function removeFromCart(id) {
  const cart = getCart();
  const newCart = cart.filter((item) => item.id !== id);
  saveToCart(newCart);
}

export function clearCart() {
  localStorage.removeItem(CART_KEY);
}

export function getTotalPrice(cart) {
  const total = cart.reduce((accumulator, currentValue) => {
    const price = parseFloat(currentValue.price);
    return accumulator + price;
  }, 0);
  return total.toFixed(2);
}
