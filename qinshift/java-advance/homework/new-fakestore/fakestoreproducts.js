// create button event to fetch all products
// show them in product cart
// create button ADD to Cart
// create event ADD to Cart button to create constructor Object with parametars
// when you chouse category item
// -- clean products , fetch by category 


const BASE_API_URL = "https://fakestoreapi.in/api/products"; //** make base url  */
let currentPage = 1; //** starting page for all products next / prev request */

const elements = {            //** catch all Btn and make categories in Btn */
    productsBtn: document.getElementById("productsBtn"),
    // tvBtn: document.getElementById("tvBtn"),
    // audioBtn: document.getElementById("audioBtn"),
    // laptopBtn: document.getElementById("laptopBtn"),
    // mobileBtn: document.getElementById("mobileBtn"),
    // gamingBtn: document.getElementById("gamingBtn"),
    // applianceBtn: document.getElementById("applianceBtn"),
    productgrid: document.getElementById("product-grid"),
    cartBtn: document.getElementById("cartBtn"),
    loader: document.getElementById("loader"),
    prevBtn: document.getElementById("prevBtn"),
    nextBtn: document.getElementById("nextBtn"),
}
function Productscards(image, title, price, category, id) {  //** construction func for Card */
    this.image = image;   
    this.title = title;
    this.price = price;
    this.category = category;
    this.id = id;
   
}
//** func to fetch filter categories item  */
async function fetchByCategory(category) {
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
    }};

//** func for All Products with limit 8 */    
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
 }};

//** func to show product card in HTML */
 function showProductCards(data){
    elements.productgrid.innerHTML = ''; // Clear the product grid before adding new cards
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
        } };
// Example call to showProductCards - for testing
// const exampleData = [
//     { image: 'image1.jpg', title: 'Product 1', price: 100, category: 'tv', id: 1 },
//     { image: 'image2.jpg', title: 'Product 2', price: 200, category: 'audio', id: 2 }
// ];
// showProductCards(exampleData);


//**  Event listeners for category buttons */
// elements.tvBtn.addEventListener("click", () => fetchByCategory('tv'));
// elements.audioBtn.addEventListener("click", () => fetchByCategory('audio'));
// elements.laptopBtn.addEventListener("click", () => fetchByCategory('laptop'));
// elements.mobileBtn.addEventListener("click", () => fetchByCategory('mobile'));
// elements.gamingBtn.addEventListener("click", () => fetchByCategory('gaming'));
// elements.applianceBtn.addEventListener("click", () => fetchByCategory('appliance'));

const categories = ['tv', 'audio', 'laptop', 'mobile', 'gaming', 'appliance'];
categories.forEach(cat => {
    document.getElementById(`${cat}Btn`).addEventListener("click", () => fetchByCategory(cat));
});

elements.productsBtn.addEventListener("click", async () => {
    currentPage = 1; 
    await getAllProducts();
});
elements.nextBtn.addEventListener("click", async () => {
    currentPage++;
    await getAllProducts();
});

elements.prevBtn.addEventListener("click", async () => {
    if(currentPage > 1) {
    currentPage--;
    await getAllProducts();
    }
});