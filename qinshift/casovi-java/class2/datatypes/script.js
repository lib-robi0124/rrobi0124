console.log("====STRINGS=====");

let firstname;
firstname = "Bob";

let lastname = "Bobsky";

// using double quotes
let doubleqoutes = "this is a string with double quotes";
// single quotes
let singlequotes = 'this is string with single quotes';
// using backticks
let backticksstring = `this is string with backstiks (template literals)`;

console.log("== combining strings ====");
// === using '+'
let fullname = "first name" + "" + firstname;
console.log(fullname);
console.log("las name:" + " " + lastname);

console.log(firstname + " is " + 30 + ' years old');
console.log(2 + "2");

fullname = `Full name ${firstname} ${lastname}`;
console.log(fullname);

console.log("=== quotes within strings =====");

// let sentence = 'this isn't possible'
let sentence1 = "this isn't hard" ;
let sentence2 = 'he replied: "hey there"';
let sentence3 = 'this isn\'t possible';
let sentence4 = '\' TO BE\' or \'NOT TO BE\'';
let sentence5 = `"${sentence4}, the question is now"`;
console.log(sentence5);

console.log("==== NON - VALUE VALUES =====");

// undefined

let undefinedVariable;
console.log(undefinedVariable);

// null

let emptyVariable = null;
console.log(emptyVariable);

console.log("==== SPECIAL NUMBER =====");
console.log("==== NaN ====="); // not a number
console.log(typeof NaN);
let result = 100 / "deset";
console.log(result);

console.log(isNaN(result)); //true
console.log(isNaN('text')); //true
console.log(Number.isNaN('text')); //false

console.log('==infinity===');
let infinity = Infinity;
console.log(infinity);
console.log(typeof infinity);

console.log(1 / 0);
console.log(-1 / 0);

