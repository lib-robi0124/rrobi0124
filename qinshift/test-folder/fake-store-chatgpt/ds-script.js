const apiUrl = "https://fakestoreapi.in/api/products";
let currentPage = 1;
let selectedCategory = 'all';
let categories = [];
let cart = [];
const productsPerPage = 8;

const elements = {
    productsBtn: document.getElementById("productsBtn"),
    cartBtn: document.getElementById("cartBtn"),
    prevBtn: document.getElementById("prevBtn"),
    nextBtn: document.getElementById("nextBtn"),
    productGrid: document.getElementById("product-grid"),
    categoryMenu: document.getElementById("category-menu"),
    cartBody: document.getElementById("cartBody")
};

// Fetch product categories
async function fetchCategories() {
    const response = await fetch(`${apiUrl}/categories`);
    const data = await response.json();
    categories = data;
    renderCategoryMenu();
}

// Render category menu
function renderCategoryMenu() {
    categories.forEach(category => {
        const categoryBtn = document.createElement('button');
        categoryBtn.classList.add('category-btn', 'btn', 'm-1');
        categoryBtn.textContent = category;
        categoryBtn.dataset.category = category;
        categoryBtn.addEventListener('click', () => filterByCategory(category));
        elements.categoryMenu.appendChild(categoryBtn);
    });
}

// Fetch and display products
async function fetchProducts() {
    const response = await fetch(`${apiUrl}?limit=${productsPerPage}&page=${currentPage}`);
    const products = await response.json();
    renderProducts(products);
}

// Render products
function renderProducts(products) {
    elements.productGrid.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('col-md-3', 'mb-4');
        productCard.innerHTML = `
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.title}">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">$${product.price}</p>
                    <p class="card-text">${product.category}</p>
                    <button onclick="addToCart(${product.id}, '${product.title}', ${product.price})" class="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        `;
        elements.productGrid.appendChild(productCard);
    });
}

// Filter products by category
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

// Update cart
function updateCart() {
    elements.cartBody.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>${item.title} - $${item.price}</p>
        `;
        elements.cartBody.appendChild(cartItem);
    });
}

// Event listeners
elements.prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        fetchProducts();
    }
});

elements.nextBtn.addEventListener('click', () => {
    currentPage++;
    fetchProducts();
});

elements.cartBtn.addEventListener('click', () => {
    new bootstrap.Modal(document.getElementById('cartModal')).show();
});

// Initial fetch
fetchCategories();
fetchProducts();