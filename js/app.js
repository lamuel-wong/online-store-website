const { products, categories } = window;

// For debugging, display all data in the console
console.log({ products, categories }, "Store Data");

function createProductCard(product) {
  // To hold the card
  const card = document.createElement('div');
  card.classList.add("card");

  // For creating a product image using .card-image class
  const productImage = document.createElement('img');
  productImage.src = product.imageUrl;
  productImage.alt = product.title;
  productImage.classList.add("card-image");
  card.appendChild(productImage);

  // For product title and for adding .card-title class
  const productName = document.createElement('h3');
  productName.textContent = product.title;
  productName.classList.add("card-title");
  card.appendChild(productName);

  // For product description and for adding card-description class
  const productDescription = document.createElement('p');
  productDescription.textContent = product.description;
  productDescription.classList.add("card-description");
  card.appendChild(productDescription);

  // For the price and adding the .card-price class
  const productPrice = document.createElement('span');
  productPrice.textContent = `$${(product.price / 100).toFixed(2)} CAD`;
  productPrice.classList.add("card-price");
  card.appendChild(productPrice);

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
