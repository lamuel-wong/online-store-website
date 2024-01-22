/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Lamuel Tong Vargas Wong
 *      Student ID: 171959216
 *      Date:       2023/11/21
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");

function createProductCard(product) {
  // Create a <div> to hold the card
  const card = document.createElement('div');
  // Add the .card class to the <div>
  card.classList.add("card");

  // Create a product image, use the .card-image class
  const productImage = document.createElement('img');
  productImage.src = product.imageUrl;
  productImage.alt = product.title;
  productImage.classList.add("card-image");
  card.appendChild(productImage);

  // Create a <h3> for product title and for adding .card-title class
  const productName = document.createElement('h3');
  productName.textContent = product.title;
  productName.classList.add("card-title");
  card.appendChild(productName);

  // Create a <p> for product description and for adding card-description class
  const productDescription = document.createElement('p');
  productDescription.textContent = product.description;
  productDescription.classList.add("card-description");
  card.appendChild(productDescription);

  // Create a <span> for the price and add the .card-price class
  const productPrice = document.createElement('span');
  productPrice.textContent = `$${(product.price / 100).toFixed(2)} CAD`;
  productPrice.classList.add("card-price");
  card.appendChild(productPrice);

  // Return <div> element
  return card;
}

// Displays categories as buttons
function displayCategories() {
  const menu = document.getElementById("menu");
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.textContent = category.name;
    button.onclick = () => displayProducts(category.id);
    menu.appendChild(button);
  });
}

// Displays products of a selected category
function displayProducts(categoryId) {
  const selectedCategory = document.getElementById("selected-category");
  const category = categories.find((cat) => cat.id === categoryId);
  selectedCategory.textContent = category.name; // Update category title

  const productsContainer = document.getElementById("products-container");
  productsContainer.innerHTML = ""; // Clear existing products

  const filteredProducts = products
    .filter((product) => product.categories.includes(categoryId) && !product.discontinued);

  filteredProducts.forEach((product) => {
    const productCard = createProductCard(product);
    productsContainer.appendChild(productCard);
  });
}

// Initial setup on window load
window.onload = function () {
  displayCategories();

  // Display products of the first category by default
  if (categories.length > 0) {
    displayProducts(categories[0].id);
  }
};
