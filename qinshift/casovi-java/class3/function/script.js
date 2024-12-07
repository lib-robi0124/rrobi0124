// === function declaration ==
function sayHello() {
console.log("Hello there!");

}

// ==== calling a function to be exec ==

sayHello();

function sayGoodbye() {
    console.log("Good by, nice weekend");
}

// sayGoodbye();

function addTwoNumbers(){
    let number1 = parseInt(prompt("please enter first number"));
    let number2 = parseInt(prompt("please enter secound number"));
    result = number1 + number2;
    alert(`sum of two numbers is: ${result}`);
}
       // addTwoNumbers();

        // == functions with arguments ==

        function sayMyFullName(FirstName, LastName){
            document.write(`${FirstName}, ${LastName}`);
        }
        //sayMyFullName("Robert","Ristovski");


        function greetPerson(){
            let name1 = prompt("please enter name");
            alert(`Hello there ${name1}`);
        }

        // greetPerson();

        // ==function that returns values ==

        function returnValue(value){
            return value;
        }
        console.log(returnValue("this is returned!"));