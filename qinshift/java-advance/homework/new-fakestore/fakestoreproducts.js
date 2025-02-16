// create button event to fetch all products
// show them in product cart
// create button ADD to Cart
// create event ADD to Cart button to create constructor Object with parametars
// when you chouse category item
// -- clean products , fetch by category 

const BASE_API_URL = "https://fakestoreapi.in/api/products";
let currentPage = 1;
const swapiResource = {
    productAll: "productAll",
    tv: "tv",
    audio: "audio",
    laptop: "laptop",
    mobile: "mobile",
    audio: "audio",
    gaming: "gaming",
    appliance: "appliance",
    currentResource: null ,
}
const elements = {
    productsBtn: document.getElementById("productsBtn"),
    productgrid: document.getElementById("product-grid"),
    tvBtn: document.getElementById("tvBtn"),
    audioBtn: document.getElementById("audioBtn"),
    laptopBtn: document.getElementById("laptopBtn"),
    mobileBtn: document.getElementById("mobileBtn"),
    gaminBtn: document.getElementById("gamingBtn"),
    applianceBtn: document.getElementById("aplianceBtn"),
    productgrid: document.getElementById("product-grid"),
    cartBtn: document.getElementById("cartBtn"),
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
function getAllProducts() {
    fetch(BASE_API_URL)
      .then((res) => res.json())
      .then((products) => {
        console.log(products);
        elements.productgrid.innerHTML = '';
        for (let i = 0; i < products.length; i++) {
          
                const cardProduct = new Productscards(products[i].image, products[i].title, products[i].price, products[i].category, products[i].id);
                console.log(cardProduct);

                const productCard = document.createElement('div');
                productCard.classList.add('col');
                productCard.innerHTML = `
                     <div class="card h-100">
                                <img src="${cardProduct.image}" class="card-img-top" alt="${cardProduct.title}" style="height: 200px; object-fit: cover;">
                                <div class="card-body">
                                    <h5 class="card-title">${cardProduct.title}</h5>
                                    <p class="card-text">Price: $${cardProduct.price}</p>
                                    <p class="card-text">Category: ${cardProduct.category}</p>
                                    <button class="btn btn-primary" onclick="addToCart(${cardProduct.id}, '${cardProduct.title}', ${cardProduct.price})">Add to Cart</button>
                                </div>
                            </div>
                `;
                elements.productgrid.appendChild(productCard);
            
        }
      })
      .catch((error) => console.error('Error fetching products:', error));
};
  if (elements.productsBtn) {
    elements.productsBtn.addEventListener("click", getAllProducts);
}

      

    