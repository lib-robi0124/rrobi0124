console.log("==LOCIGAL OPERATORS ====");
console.log(30 > 50); // false
console.log(30 < 50); //trus

console.log("==Logical and && ====");
console.log(true && true);
console.log(true && false);

let num1 = 50;
let num2 = 100;
console.log(num1 < num2 && num2 === 150); //true && false => false

console.log(num1 < num2 && num2 + 50 === 150);


let expresion = num1 < num2 && num2 <= 100 && num1 + 10 !== 60;
console.log(expresion);

console.log("==Logical OR || ====");

console.log(true || false);
console.log(false || false);

let number1 = 3;
let number2 = 13;

console.log(number1 > number2 || number2 >= 10); // true
console.log(5 > 0 && (5 + 6 < 10) || 10 > 5);

console.log("==Logical NOT ! ===="); // negacija na logikata..
console.log(!true);
console.log(!false); 
let numone = 100;
let numtwo = 1000;
console.log(!(numone > numtwo) && "Bob" == "Bob"); //true


console.log("== EQUALITIES ====");
console.log(3 == "3"); //true
console.log(3 === "3"); //false


console.log("== TRUTHY / FALSE  ====");

let numberOne = -1000;
let numberTwo = 0;

console.log(Boolean(numberOne));
console.log(!!numberTwo);
console.log(Boolean(numberTwo));
console.log(!!"");
console.log(Boolean(" "));



















