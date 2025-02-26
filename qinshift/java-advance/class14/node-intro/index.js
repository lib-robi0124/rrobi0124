const greetService = require("./modeules/greetService.js")



console.log("== this is main JS file ==");

let boban = "Bob";
console.log(boban);

greetService.sayHello(boban);
greetService.sayBye("john");



