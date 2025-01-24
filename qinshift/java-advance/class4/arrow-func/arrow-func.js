function sayHello() {
    console.log("Hello !");
    
}
let sayHelloAnonym = function () {
    console.log("Hello Ano");
    
}

let sayHelloArrow = () => {
    console.log("Hello Arrow!");

}
sayHelloArrow();

    
    let sayHelloArrowOneLine = () => console.log("Hello Arrow (one line)!");
    sayHelloArrowOneLine();

function getRundomNumber() {
    return Math.floor(Math.random() * 100);
}
    const getRandom = () => Math.floor(Math.random() * 100);
    let randomNum = getRandom();
    console.log(randomNum);

    function isEven(number) {
        return number % 2 === 0;
    }
    const isNumberEven = (number) => number % 2 === 0;
    console.log("The Number 68 is even: ", isNumberEven(68));

    const sum = (num1 , num2) => num1 + num2;
    console.log(sum(20, 30));

    const getMaxNumber = (num1, num2) => {
        if(num1 > num2) {
            return num1;
        }
        return num2;
    }
    console.log(getMaxNumber(10, 80));

    document.querySelector("button").addEventListener("click", () => {
        console.log("click");
        
    })
    const postsUrl = "https://jsonplaceholder.typicode.com/posts";
//     fetch(postsUrl)
//         .then(function (response) {
//     const parsedData = response.json(); //parsed from json to object
//     return parsedData;
// })
//         .then(function (data) {
//         console.log(data);
//     })
// .catch(function(error) {
//     console.error("ERROR occured", error)
// });

fetch(postsUrl)
.then((response) => response.json())
.then(data => console.log(data))
 .catch(error => console.error(error));

    
    
    