
// selectors

// select by Id ( more uniques ID a moze multy class)
let myFisrtElement = document.getElementById("main");
console.log(myFisrtElement);

// select by Tag name
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);
console.log("First paragraph in my html file", paragraphs[0]);

let divs = document.getElementsByTagName("div");
console.log(divs);
console.log("scond div in my html file" , divs[1]);

// select by Class name

let paragraphsByClassName = document.getElementsByClassName("myParagraph");
console.log(paragraphsByClassName);

let mySecondParagraph = document.getElementsByClassName("second");
console.log(mySecondParagraph);

// Query selectory

let myHeaderTag = document.querySelector("h1");
console.log(myHeaderTag);

let myHeaderId = document.querySelector("#myTitle");
console.log(myHeaderId);

let myDivClass = document.querySelector(".myDiv");
console.log(myDivClass);

// querySelectorAll()

let allHeaders = document.querySelectorAll("h1");
console.log(allHeaders);

// traversing thru the DOM tree

// nextLementSibling
let myHeader = document.getElementById("myTitle");
let sibling = myHeader.nextElementSibling;
console.log("My Header", myHeader);
console.log("First sibling", sibling);

// firstElementChild
let firstDiv = document.getElementById("main");
let divSibling = firstDiv.nextElementSibling;
console.log(divSibling);

let firstDivChild = firstDiv.firstElementChild;
console.log(firstDivChild);

let divSiblingChild = divSibling.firstElementChild;
console.log(divSiblingChild);

let firstDivParent = firstDiv.parentElement;
console.log(firstDivParent);


let elementToFind = document.getElementById("main").nextElementSibling.firstElementChild;
console.log(elementToFind);

let bodyElement = document.querySelector("body");
console.log(bodyElement);

let allChildren = bodyElement.children;
let firstChild = bodyElement.firstElementChild;
let lastChild = bodyElement.lastElementChild; 

console.log(allChildren);
console.log(firstChild);
console.log(lastChild);





 
