// common use-cases:

function handleTimeout() {
    console.log("hellp after 3 sec ( callback func)");
    
}

// setTimeout(() => {
//     console.log("hellp after 3 sec ( callback func)");
    
// }, 3000)

// setTimeout(handleTimeout, 3000);

// document.querySelector("button").addEventListener("click", () => {
//     console.log("button is clicked");
    
// })
// debugger;
function handleBtnClick() {
    console.log("button is clicked");
}
document.querySelector("button").addEventListener("click", handleBtnClick);

function performAsyncOper(callback) {
    console.log("async oper started");
    setTimeout(() => {
        const result = "async oper completed"
        callback(result);
    }, 5000);
    console.log("..processing..");
      
}
function printResult(item) {
    console.log(item);
    
}
performAsyncOper(printResult);
// debugger;
performAsyncOper(console.log);

let testArray = [1, 2, 3, 5, 7];
testArray.forEach(n => console.log(n));

function renderDataFromApi(url, renderFunc) {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        renderFunc(data);
   })
}

function displayUser(user) {
    //locig for display user
    let h3 = document.createElement("h3");
    h3.textContent = `${user.firstName} ${user.lastName}`;
    document.body.appendChild(h3);
}
renderDataFromApi('https://dummyjson.com/users/1', displayUser);

renderDataFromApi('https://dummyjson.com/products/1', product => console.log(product));
renderDataFromApi('https://dummyjson.com/products/1', finction(product) {
    console.log(product)}) ;

function renderProduct(product) {
    console.log(product);
    
}
renderDataFromApi('https://dummyjson.com/products/1', renderProduct);

// callback func as func arg

function  callbackFunc(someFunc) {
    console.log(("fetching data.."));
    setTimeout(() => {
        console.log("data fetshed");
        someFunc();
    }, 3000)
    console.log("processing");
    
}
callbackFunc(() => console.log("yey! we have data"))

function functionArguments(func1, func2) {
    console.log("exec funcs");
    func1()
    func2()
    }

functionArguments(() => console.log("hello from func1"), () => console.log("hello from func2"))