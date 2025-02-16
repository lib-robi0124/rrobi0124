// create button event to fetch all products
// show them in product cart
// create button ADD to Cart
// create event ADD to Cart button to create constructor Object with parametars
// when you chouse category item
// -- clean products , fetch by category 

const BASE_API_URL = "https://fakestoreapi.in/api/products";
let currentPage = 1;

const elements = {
    productsBtn: document.getElementById("productsBtn"),
    tvBtn: document.getElementById("tvBtn"),
    audioBtn: document.getElementById("audioBtn"),
    laptopBtn: document.getElementById("laptopBtn"),
    mobileBtn: document.getElementById("mobileBtn"),
    gaminBtn: document.getElementById("gamingBtn"),
    applianceBtn: document.getElementById("aplianceBtn"),
    productgrid: document.getElementById("product-grid"),
    cartBtn: document.getElementById("cartBtn"),
    loader: document.getElementById("loader"),
    prevBtn: document.getElementById("prevBtn"),
    nextBtn: document.getElementById("nextBtn"),
}
function Productscards(image, title, price, category, id) {
    this.image = image;
    this.title = title;
    this.price = price;
    this.category = category;
    this.id = id;
   
}

async function fetchByCategory() {
    try {
        elements.loader.style.display = "block";
        const url = `${BASE_API_URL}/category?type=${category}`;
        const response = await fetch(url);
        if (!response.ok)
            throw new Error(`HTTP error! Status ${response.status}`);
        const data = await response.json();
      showProductCards(data);
    } catch (error) {
        console.error("Error fetching data: ", error);
        elements.resultDiv.innerHTML = `<p class="text-danger text-center">An error occurred. Please try again later.</p>`
    } finally {
       elements.loader.style.display = "none";
    }}

async function getAllProducts() {
    try {
        elements.loader.style.display = "block";
    const urlAll = ` ${BASE_API_URL}?page=${currentPage}&limit=8`
    const response = await fetch(urlAll)
    if (!response.ok)
        throw new Error(`HTTP error! Status ${response.status}`);
    const products = await response.json();
       showProductCards(products)
} catch (error) {
    console.error("Error fetching data: ", error);
    elements.resultDiv.innerHTML = `<p class="text-danger text-center">An error occurred. Please try again later.</p>`
} finally {
    elements.loader.style.display = "none";
 }}


 function showProductCards(){
    elements.productgrid.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
            const cardProduct = new Productscards(data[i].image, data[i].title, data[i].price, data[i].category, data[i].id);
            const productCard = document.createElement('div');
            productCard.classList.add('col');
            productCard.innerHTML = `
                 <div class="card h-100">
                            <img src="${cardProduct.image}" class="card-img-top" alt="${cardProduct.title}" style="height: 200px; object-fit: cover;">
                            <div class="card-body">
                                <h5 class="card-title">${cardProduct.title}</h5>
                                <p class="card-text">Price: $ ${cardProduct.price}</p>
                                <p class="card-text">Category: ${cardProduct.category}</p>
                                <button class="btn btn-primary" onclick="addToCart(${cardProduct.id}, '${cardProduct.title}', ${cardProduct.price})">Add to Cart</button>
                            </div>
                        </div>
            `;
            elements.productgrid.appendChild(productCard);
                }
 }
// Event listeners for category buttons
elements.tvBtn.addEventListener("click", () => fetchByCategory('tv'));
elements.audioBtn.addEventListener("click", () => fetchByCategory('audio'));
elements.laptopBtn.addEventListener("click", () => fetchByCategory('laptop'));
elements.mobileBtn.addEventListener("click", () => fetchByCategory('mobile'));
elements.gamingBtn.addEventListener("click", () => fetchByCategory('gaming'));
elements.applianceBtn.addEventListener("click", () => fetchByCategory('appliance'));

elements.productsBtn.addEventListener("click", async () => {
    currentPage = 1; // Reset to the first page when selecting "people"
    await getAllProducts();
});
elements.nextBtn.addEventListener("click", async () => {
    currentPage++;
    await getAllProducts();
})

elements.prevBtn.addEventListener("click", async () => {
    if(currentPage > 1) {
    currentPage--;
    await getAllProducts();
    }
})