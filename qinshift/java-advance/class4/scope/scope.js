let test = 123;

let globalNumber = 12345;
function printGlobalNumber() {
    globalNumber = 5555;
    console.log(globalNumber);
    
}
printGlobalNumber();

function localScope(number) {
    let localNumber = 100;
    let result = localNumber + number;
    console.log("the result is", result);
    
}
localScope(132);
// console.log(localNumber); not possible
let greeting = "hello from Qinshift";
function printGreeting(){
    let greeting = "happy holidays"
    console.log(greeting);
}
printGreeting();

function outerFunction() {
    let outerVariable = "I am from the outer function";
    function innerFunction() {
        let innerVariable = "I am from innerFunction";
        console.log(outerVariable);
        console.log(innerVariable);
  }
  innerFunction();
}
outerFunction();
// innerFunction(); error - not possible
// global define var
let globalString = "this is global";
if (50 < 100) {
    let blockNumber = 50 + 100;
    console.log(blockNumber);
    globalString = "some inner";    
}
console.log(globalString); // output is "some inner"

// console.log(blockNumber); out of {} is not able to be read/access from outside

if (50 < 100) {
    var varblockNumber = 50 + 100;
}
console.log(varblockNumber); // var can or is global variable
