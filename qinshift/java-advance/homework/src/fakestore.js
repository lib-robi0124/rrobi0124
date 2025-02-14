// const apiUrl = "https://fakestoreapi.in/api/products";
let currentPage = 1;
let selectedCategory = 'all';
let categories = [];
let cart = [];
const urls = {
  category: "https://fakestoreapi.in/api/products/category",
  allProducts: "https://fakestoreapi.in/api/products",
  productsByCategory: "https://fakestoreapi.com/products/category/",
};

const elements = {
  productsBtn: document.getElementById("productsBtn"),
  cartBtn: document.getElementById("cartBtn"),
  categoryBtn: document.getElementById("categoryBtn"),
  prevBtn: document.getElementById("prevBtn"),
  nextBtn: document.getElementById("nextBtn"),
  filterDiv: document.getElementById("filters"),
  categoryHeader: document.getElementById("category-title"),
  productsDiv: document.getElementById("show-products"),
}
// function Categories()

// Fetch product categories and products
async function fetchCategories() {
  const response = await fetch(urls.category);
  const data = await response.json();
  categories.push(...data.categories); 

//   // Add category buttons
  const categoryMenu = document.getElementById('category-menu');
  categories.forEach(category => {
    const categoryBtn = document.createElement('button');
    categoryBtn.classList.add('category-btn');
    categoryBtn.textContent = category;
    categoryBtn.dataset.category = category;
    categoryBtn.addEventListener('click', () => filterByCategory(category));
    categoryMenu.appendChild(categoryBtn);
  }); }
  // Fetch and display products based on category and pagination
async function fetchProducts() {
  const response = await fetch(`${apiUrl}?category=${selectedCategory}&page=${currentPage}`);
  const products = await response.json();
  const productGrid = document.getElementById('product-grid');
  productGrid.innerHTML = '';

  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>$${product.price}</p>
      <p>Category: ${product.category}</p>
      <button onclick="addToCart(${product.id}, '${product.title}', ${product.price})">Add to Cart</button>
    `;
    productGrid.appendChild(productCard);
  });
}
// Handle category filter
function filterByCategory(category) {
  selectedCategory = category;
  currentPage = 1;
  fetchProducts();
}

// Add item to cart
function addToCart(id, title, price) {
  cart.push({ id, title, price });
  updateCart();
}


