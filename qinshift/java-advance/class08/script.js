// sync
function first() {
    console.log("First thing");
 }
function second() {
    console.log("Second thing");
 };


 function fibonacci(n) {
    if (n <=1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n -2);
 }
 let fibonacciResult = fibonacci(40);
 console.log(fibonacciResult);
 
 second();
 first();

 // async

 fetch("https://dummyjson.com/products/1")
 .then(response => response.json())
 .then(product => console.log("Here is the product", product))

 console.log("this is printed after the product! (or not");
 
 document.querySelector("button").addEventListener("click", () => {
    console.log("button is clicked");
    
 })

 setTimeout(() => {
console.log("this is printed after 4 ec");

 }, 4000); //4000ms = 4sec

//  setInterval(() => {
// console.log("this is printed every 3 sec!");

// //  }, 3000)
// let intervalID = setInterval(() => {
//     console.log("this is printed every 3 sec with stop");
    
// }, 3000)
// clearInterval(intervalID);

function greet(name) {
setTimeout(() =>     console.log(`hello ${name}`), 5000);
    
}
greet("Frose");


console.log(1);
console.log(2);
console.log(4);

setTimeout(() => console.log(4), 1000);
console.log(5);
setTimeout(() => console.log(6), 2000);



