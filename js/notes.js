// LOGIN button

document.getElementById("loginBtn").addEventListener("click", function () {
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("loginBtn").style.display = "none";
});

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "username" && password === "password") {
    localStorage.setItem("loggedIn", true);
    updateLoginState();
  } else {
    alert("Username or password is incorrect. Please try again.");
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  updateLoginState();
}

document.getElementById("logoutBtn").addEventListener("click", logout);

function updateLoginState() {
  if (localStorage.getItem("loggedIn")) {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("loginBtn").style.display = "none";
    document.getElementById("logoutBtn").style.display = "inline";
    document.getElementById("welcomeMsg").style.display = "block";
  } else {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("loginBtn").style.display = "inline";
    document.getElementById("logoutBtn").style.display = "none";
    document.getElementById("welcomeMsg").style.display = "none";
  }
}

window.onload = function () {
  updateLoginState();
};

// Filter-bar

document.addEventListener("DOMContentLoaded", function () {
  fetchProducts();

  document
    .getElementById("gender-select")
    .addEventListener("change", filterAndDisplayProducts);
  document
    .getElementById("color-select")
    .addEventListener("change", filterAndDisplayProducts);
  document
    .getElementById("size-select")
    .addEventListener("change", filterAndDisplayProducts);
});

function filterAndDisplayProducts() {
  const selectedGender = document.getElementById("gender-select").value;
  const selectedColor = document.getElementById("color-select").value;
  const selectedSize = document.getElementById("size-select").value;

  const filteredProducts = allProducts.filter(
    (product) =>
      (selectedGender === "all" || product.gender === selectedGender) &&
      (selectedColor === "all" || product.color === selectedColor) &&
      (selectedSize === "all" || product.size === selectedSize)
  );
}

function displayProducts(products) {
  const container = document.getElementById("products");
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classname = "product.item";
    productDiv.innerHTML = `
              <img src="${product.image}" alt="Image of ${product.title}">
              <h2>${product.title}</h2>
              <p>${product.description}</p>
              <p>Price: ${product.price} kr</p>
              <p>On Sale: ${product.discountedPrice} kr</p>
          `;

    container.appendChild(productDiv);
  });
}

<div id="loginForm">
  Username: <input type="text" id="username" /> Password:
  <input type="password" id="password" />
  <button onclick="login()">Log In</button>
</div>;

<div id="filter-bar">
  <label for="gender-select">Select Gender:</label>
  <select id="gender-select">
    <option value="all">All Jackets</option>
    <option value="female">Women</option>
    <option value="male">Men</option>
  </select>
  <label for="color-select">Select Colour:</label>
  <select id="color-select">
    <option value="all">All Jackets</option>
    <option value="black">Black</option>
    <option value="brown">Brown</option>
    <option value="green">Green</option>
    <option value="red">Red</option>
    <option value="blue">Blue</option>
  </select>
  <label for="size-select">Select Size:</label>
  <select id="size-select">
    <option value="allSizes">All Jackets</option>
    <option value="XS">X-Small</option>
    <option value="S">Small</option>
    <option value="M">Medium</option>
    <option value="L">Large</option>
    <option value="XL">X-Large</option>
    <option value="XXL">2X-Large</option>
  </select>
</div>;
