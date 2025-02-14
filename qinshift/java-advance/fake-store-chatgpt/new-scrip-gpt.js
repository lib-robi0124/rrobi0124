let currentPage = 1;
let selectedCategory = 'all';
let categories = [];
let cart = [];
const urls = {
  category: "https://fakestoreapi.in/api/products/categories",  // Corrected URL for categories
  allProducts: "https://fakestoreapi.in/api/products",         
  productsByCategory: "https://fakestoreapi.in/api/products/category/", // Fixed URL for category products
};

// DOM elements
const elements = {
  productsBtn: document.getElementById("productsBtn"),
  cartBtn: document.getElementById("cartBtn"),
  categoryBtn: document.getElementById("categoryBtn"),
  prevBtn: document.getElementById("prevBtn"),
  nextBtn: document.getElementById("nextBtn"),
  filterDiv: document.getElementById("filters"),
  categoryHeader: document.getElementById("category-title"),
  productsDiv: document.getElementById("show-products"),
  productGrid: document.getElementById('product-grid'),
  cartDisplay: document.getElementById("cart-display"), // Assuming you will display cart items somewhere
};

// Product Constructor
function Product(image, title, price, category, id) {
  this.image = image;
  this.title = title;
  this.price = price;
  this.category = category;
  this.id = id;
}

// Fetch and display categories
async function fetchCategories() {
  const response = await fetch(urls.category);
  const data = await response.json();
  categories.push(...data); // Update categories

  // Add category buttons to the menu
  const categoryMenu = document.getElementById('category-menu');
  data.forEach(category => {
    const categoryBtn = document.createElement('button');
    categoryBtn.classList.add('category-btn', 'btn');
    categoryBtn.textContent = category;
    categoryBtn.dataset.category = category;
    categoryBtn.addEventListener('click', () => filterByCategory(category));
    categoryMenu.appendChild(categoryBtn);
  });
}

// Fetch and display products based on category and pagination
async function fetchProducts() {
  const url = selectedCategory === 'all' 
    ? `${urls.allProducts}?page=${currentPage}&limit=8` 
    : `${urls.productsByCategory}${selectedCategory}?page=${currentPage}&limit=8`;
  const response = await fetch(url);
  const products = await response.json();

  elements.productGrid.innerHTML = ''; // Clear previous products

  // Create product cards
  products.forEach(product => {
    const cardProduct = new Product(product.image, product.title, product.price, product.category, product.id);
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
      <img src="${cardProduct.image}" alt="${cardProduct.title}">
      <h3>${cardProduct.title}</h3>
      <p>$${cardProduct.price}</p>
      <p>Category: ${cardProduct.category}</p>
      <button onclick="addToCart(${cardProduct.id}, '${cardProduct.title}', ${cardProduct.price})">Add to Cart</button>
    `;
    elements.productGrid.appendChild(productCard);
  });
}

// Filter products by category
function filterByCategory(category) {
  selectedCategory = category;
  currentPage = 1; // Reset page number to 1
  fetchProducts();
}

// Handle pagination
function changePage(direction) {
  if (direction === 'next') {
    currentPage++;
  } else if (direction === 'prev' && currentPage > 1) {
    currentPage--;
  }
  fetchProducts();
}

// Handle add to cart
function addToCart(id, title, price) {
  cart.push({ id, title, price });
  updateCart();
}

// Update the cart display
function updateCart() {
  const cartContainer = document.getElementById("cart-display");
  cartContainer.innerHTML = ""; // Clear current cart

  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.textContent = `${item.title} - $${item.price}`;
    cartContainer.appendChild(cartItem);
  });
}

// document.getElementById('makePurchaseBtn').addEventListener('click', () => {
//   alert('Your purchase has been completed!');
//   cart = []; // Clear cart after purchase
//   updateCart(); // Update the cart display
// });

// Event Listeners for Pagination
elements.prevBtn.addEventListener('click', () => changePage('prev'));
elements.nextBtn.addEventListener('click', () => changePage('next'));

// Initialize the application
function init() {
  fetchCategories(); // Fetch categories
  fetchProducts(); // Fetch products
}

init();
