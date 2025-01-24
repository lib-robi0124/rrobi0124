(function() {
    console.log("this will be exec immmediately");
    
})();

((num1, num2) => console.log(num1 + num2))(101, 202);

// https://dummyjson.com/products/1

(() => {
const productUrl = "https://dummyjson.com/products/1";
const productContainer = document.getElementById("product-container");
fetch(productUrl)
    .then(response => response.json())
    .then(product => {
        console.log(product);
        productContainer.innerHTML = `
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <p>${product.price}</p>
        `;
    })
})();


    (function sayHello(name) {
        console.log(`Hello ${name}`);
        
    })("Jane Doe");