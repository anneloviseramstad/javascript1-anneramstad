export function displayMessage(container, messageType, message) {
  let parent = container;

  if (typeof container === "string") {
    const parent = document.querySelector(container);
  }
  parent.innerHTML = `<div class="${messageType}">${message}</div>`;
}
