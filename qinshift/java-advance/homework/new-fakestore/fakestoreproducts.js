// const apiUrl = "https://fakestoreapi.in/api/products";

// const elements = {
//     productsBtn: document.getElementById("productsBtn"),
//     productGrid: document.getElementById("product-grid"),
//     prevBtn: document.getElementById("prevBtn"),
//     nextBtn: document.getElementById("nextBtn"),
// };

// async function fetchAllProducts() {
//     try {
//         const response = await fetch(apiUrl);
//         if (!response.ok) {
//             throw new Error("Failed to fetch products");
//         }
//         const products = await response.json();
//         displayProducts(products);
//     } catch (error) {
//         console.error("Error fetching products:", error);
//     }
// }

// function displayProducts(products) {
//     elements.productGrid.innerHTML = "";
//     products.forEach(product => {
//         const productCard = document.createElement('div');
//         productCard.className = 'col';
//         productCard.innerHTML = `
//             <div class="card h-100">
//                 <img src="${product.image}" class="card-img-top" alt="${product.title}" style="height: 200px; object-fit: contain;">
//                 <div class="card-body">
//                     <h5 class="card-title">${product.title}</h5>
//                     <p class="card-text">$${product.price}</p>
//                     <p class="card-text"><small class="text-muted">Category: ${product.category}</small></p>
//                     <button class="btn btn-primary" onclick="addToCart(${product.id}, '${product.title}', ${product.price})">Add to Cart</button>
//                 </div>
//             </div>
//         `;
//         elements.productGrid.appendChild(productCard);
//     });
// }

// elements.productsBtn.addEventListener("click", fetchAllProducts);

// function addToCart(id, title, price) {
//     alert(`Added ${title} to cart!`);
// }
// const apiUrl = "https://fakestoreapi.in/api/products";

// const elements = {
//     productsBtn: document.getElementById("productsBtn"),
//     productGrid: document.getElementById("product-grid"),
//     prevBtn: document.getElementById("prevBtn"),
//     nextBtn: document.getElementById("nextBtn"),
// };

// let currentPage = 1;
// const productsPerPage = 6; // Number of products to display per page

// async function fetchAllProducts(page = 1) {
//     try {
//         const response = await fetch(`${apiUrl}?page=${page}&limit=${productsPerPage}`);
//         if (!response.ok) {
//             throw new Error("Failed to fetch products");
//         }
//         const products = await response.json();
//         displayProducts(products);
//         console.log(products);

//     } catch (error) {
//         console.error("Error fetching products:", error);
//     }
        
// }

// function displayProducts(products) {
//     elements.productGrid.innerHTML = "";
// //     products.forEach(product =>
//     for(let product of products) {
//         const productCard = document.createElement('div');
//         productCard.className = 'col';
//         productCard.innerHTML = `
//             <div class="card h-100">
//                 <img src="${product.image}" class="card-img-top" alt="${product.title}" style="height: 200px; object-fit: contain;">
//                 <div class="card-body">
//                     <h5 class="card-title">${product.title}</h5>
//                     <p class="card-text">$${product.price}</p>
//                     <p class="card-text"><small class="text-muted">Category: ${product.category}</small></p>
//                     <button class="btn btn-primary" onclick="addToCart(${product.id}, '${product.title}', ${product.price})">Add to Cart</button>
//                 </div>
//             </div>
//         `;
//         elements.productGrid.appendChild(productCard);
//     };
// }


// function addToCart(id, title, price) {
//     alert(`Added ${title} to cart!`);
// }

// // Event Listeners
// elements.productsBtn.addEventListener("click", () => fetchAllProducts(currentPage));

// elements.prevBtn.addEventListener("click", () => {
//     if (currentPage > 1) {
//         currentPage--;
//         fetchAllProducts(currentPage);
//     }
// });

// elements.nextBtn.addEventListener("click", () => {
//     currentPage++;
//     fetchAllProducts(currentPage);
// });

// // Initial fetch
// fetchAllProducts(currentPage);
const apiUrl = "https://fakestoreapi.in/api/products";

const elements = {
    productsBtn: document.getElementById("productsBtn"),
    productGrid: document.getElementById("product-grid"),
    prevBtn: document.getElementById("prevBtn"),
    nextBtn: document.getElementById("nextBtn"),
};

let currentPage = 1;
const productsPerPage = 6;
let products = [];

async function fetchAllProducts() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Failed to fetch products");
        products = await response.json();
        displayProducts();
    } catch (error) {
        elements.productGrid.innerHTML = `<p class="text-danger">Error fetching products: ${error.message}</p>`;
    }
}
// // function showProducts(products) {
// //     let html = "";
// //     for (let product of products) {
// //       let card = `<div class="card" style="width: 25rem;">
// //                   <img src="${product.image}" class="card-img-top" alt="..." style="width: 100%; height: 20rem; object-fit: contain;">
// //                   <div class="card-body">
// //                     <h5 class="card-title">${product.title}</h5>
// //                     <p class="card-text">Price: ${product.price} $</p>
// //                     <button class="btn btn-primary cart" data-product-id='${product.id}'>Add to cart</button>
// //                   </div>
// //                 </div>`;
// //       html += card;
// //     }
// //     productsDiv.innerHTML = html;
// //     addCartEventListeners();
// //   }
function displayProducts() {
    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;
    const paginatedProducts = products.slice(start, end);

    elements.productGrid.innerHTML = "";

    if (paginatedProducts.length === 0) {
        elements.productGrid.innerHTML = `<p class="text-center">No products available.</p>`;
    } else {
        paginatedProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'col';
            productCard.innerHTML = `
                <div class="card h-100">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}" style="height: 200px; object-fit: contain;">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">$${product.price}</p>
                        <p class="card-text"><small class="text-muted">Category: ${product.category}</small></p>
                        <button class="btn btn-primary" onclick="addToCart(${product.id}, '${product.title}', ${product.price})">Add to Cart</button>
                    </div>
                </div>`;
            elements.productGrid.appendChild(productCard);
        });
    }

    elements.prevBtn.disabled = currentPage === 1;
    elements.nextBtn.disabled = end >= products.length;
}

function addToCart(id, title, price) {
    alert(`Added ${title} to cart!`);
}

elements.productsBtn.addEventListener("click", fetchAllProducts);
elements.prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        displayProducts();
    }
});
elements.nextBtn.addEventListener("click", () => {
    if ((currentPage * productsPerPage) < products.length) {
        currentPage++;
        displayProducts();
    }
});

fetchAllProducts();