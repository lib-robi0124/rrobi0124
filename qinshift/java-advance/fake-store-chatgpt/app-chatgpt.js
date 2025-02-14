const apiUrl = "https://fakestoreapi.in/api/products";
let currentPage = 1;
let selectedCategory = 'all';
let cart = [];

// Fetch product categories and products
async function fetchCategories() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  const categories = [...new Set(data.map(product => product.category))];
  
  // Add category buttons
  const categoryMenu = document.getElementById('category-menu');
  categories.forEach(category => {
    const categoryBtn = document.createElement('button');
    categoryBtn.classList.add('category-btn');
    categoryBtn.textContent = category;
    categoryBtn.dataset.category = category;
    categoryBtn.addEventListener('click', () => filterByCategory(category));
    categoryMenu.appendChild(categoryBtn);
  });

  // All categories button
  const allCategoriesBtn = document.createElement('button');
  allCategoriesBtn.classList.add('category-btn');
  allCategoriesBtn.textContent = "All Categories";
  allCategoriesBtn.dataset.category = 'all';
  allCategoriesBtn.addEventListener('click', () => filterByCategory('all'));
  categoryMenu.appendChild(allCategoriesBtn);
}

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

// Update cart display
function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  cartItems.innerHTML = '';
  let total = 0;
  
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.title} - $${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });
  
  cartTotal.textContent = total.toFixed(2);
}

// Handle pagination
document.getElementById('next-btn').addEventListener('click', () => {
  currentPage++;
  fetchProducts();
});

document.getElementById('prev-btn').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    fetchProducts();
  }
});

// Handle purchase
document.getElementById('purchase-btn').addEventListener('click', () => {
  alert('Purchase successful!');
  cart = [];
  updateCart();
  fetchProducts();
});

// Initial fetch of categories and products
fetchCategories();
fetchProducts();
