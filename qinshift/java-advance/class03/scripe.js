console.log("=== JSON ===");

let jsObject = {
    fName: "Bob",
    lName: "Bobsky",
    age: 34,
    favouriteSubject: [
        "JavaScript",
        "C#"
    ],
    printInfo: function () {
        console.log(`${this.fName} ${this.lName} is ${this.age} years old`);
        
    }
}
jsObject.printInfo();
console.log(typeof jsObject);

// ==> serialize JavaScript to json
let jsonString = JSON.stringify(jsObject);
console.log(jsonString);
console.log(typeof jsonString);
console.log(jsonString.fName); // not possible property to call, not function in

console.log("== create javascript from json ===");

let courseJson = `
{
  "trainer": "John Doe",
  "assistant": "Jane Doe",
  "students": [
    "Bob",
    "Samantha",
    "Chris",
    "Jill",
    "Greg",
    "Maria",
    "Tom",
    "Sue"
  ],
  "academy": "Code"
}`;

// ==> deserialize json to javascript object ==


let jsonObject = JSON.parse(courseJson);
console.log(jsonObject);




