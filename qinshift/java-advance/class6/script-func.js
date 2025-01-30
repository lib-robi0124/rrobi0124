function multiply(num1, num2 = 10) {
    console.log(`result: ${num1 * num2}`);
    
}
multiply(5, 2);
multiply(7);

// func - first class citizens
// func as variable
let greet = name => console.log(`hello ${name}`);
greet("robert");

// func used as argument to another func

function calculator(calculateFunc, num1, num2){
    return calculateFunc(num1, num2);
}
function sum(number1, number2) {
    return number1 + number2;
}
// debugger;
let sumResult = calculator(sum, 5, 10);

let subtractResult = calculator(function(num1, num2) {
    return num1 - num2;
}, 100, 80);

function logFunction(func) {
    func();
};

logFunction(() => console.log("hello"));

console.log(calculator((x, y) => x * y), 30, 2);

function getOperation(operator) {
    switch (operator) {
        case "+":
        return (num1, num2) => num1 + num2;
        case "-":
            return (num1, num2) => num1 - num2;
            case "/":
                return (num1, num2) => num1 / num2;
                case "**":
                    return (num1, num2) => num1 ** num2;
                    default:
                        break;
    }
}
const divide = getOperation("/");
console.log(divide(10, 2));
console.log(getOperation("**"), 2, 3);

function greetStudent (name){
    console.log(`Hello ${name}`);
    
}
greetStudent.firstName = "Bob";
greetStudent(greetStudent.firstName);

function someFunction() {
    console.log((arguments));
    console.log(arguments.length);
       
}
someFunction("Bob", "Jane", "Tom", "Jill", "Darko", 123);

function sumOfNumbers() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}
console.log(sumOfNumbers(10, 20, 30, 40));
console.log(sumOfNumbers(10, 20, 30, 40, 50, 60, 70));


