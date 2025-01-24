function factoriel(number) {
    if(number <= 1) {
        return 1;
    }
    return number * factoriel(number - 1)
}
console.log(factoriel(5));

function sumTwoNumber(number) {
    if(number <= 0) {
        return 0;
    }
    return number + sumTwoNumber(--number)
}
console.log(sumTwoNumber(10));

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n -1) + fibonacci(n -2);
}
console.log("Fibonacci of 5 is: ", fibonacci(5));
console.log("Fibonacci of 5 is: ", fibonacci(10));



