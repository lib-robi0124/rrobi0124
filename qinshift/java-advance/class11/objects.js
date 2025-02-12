
// example: anonymous object
let dog = {
    name: "Marly",
    "color": "brown",
    age: 1,
    owner: {
        firstName: "Bob",
        lastName: "Bobsky",
    },
    bark: function() {
        console.log("AW AW AW");
    },
    printInfo: function() {
        // console.log(`Dog: ${name}, Age: ${age} `);
        console.log(`Dog: ${this.name}, Age: ${this.age} Owner ${this.owner.firstName}`); 
    },
    getThis: this,
    printThisAnonymous: () => {
        console.log(this);
            }, 
printTHis: function () {
    console.log(this);
    
},
printThis: function () {
    console.log(this);
    
},
}

dog.printInfo();
console.log(dog.getThis);
dog.printThisAnonymous();
dog.printThis();


// ==> constructor func

function Person(firstName, lastName){
    // if(firstName){
    //     this.firstName = firstName
    // } else { 
    // this.firstName = "unnamed"
    // }

    this.firstName = firstName ? firstName : "unnamed";
    // this.firstName = firstName ?? "unnamed";
    // this.firstName = firstName || "unnamed";


    this.lastName = lastName;

    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
    // "this" example
    this.getThis = this;
    this.printThisAnonymous = () => {
        console.log(this);
        
    }
    this.printThis = function () {
        console.log(this);
        
    }
}

let john = new Person("John", "Doe");
console.log(john.getFullName());
console.log(john.getThis);
john.printThisAnonymous();
john.printThis();

console.log(this === window);
console.log(window);
window.testWindowsObject();


function testWindowsObject() {
    console.log("helo , this is globaly declared function");
    
}

console.log(window.document);
console.log(document);


//object built in methods

//***create */
let person = {
    firstName: "Bob",
    lastName: "Bobsky",
    greet: function () {
        console.log("hello");
        
    },
}

console.log(person);

let bob = Object.create(person);
console.log(bob);
console.log(bob.firstName);
console.log(bob.lastName);

//**assign */

let bobsAddress = {
    street: "Bobsky st.",
    city: "Skopje",
    printInfo: function() {
        console.log("info");
        
    }
}

// let bobsInfo = Object.assign(bob, bobsAddress);
let bobsInfo = Object.assign(person, bobsAddress);

console.log(bobsInfo);
bobsInfo.printInfo();

let barnie = {
    name: "Barnie",
    age: 1,
    bark: function () {
        console.log("AW AW AW");
        
    }
}

/////*** explore Object */

//*** keys */
let barniesKeys = Object.keys(barnie);
console.log(barniesKeys);

//** values */

let barniesValues = Object.values(barnie);
console.log(barniesValues);

//** entres */

let keyValuePairs = Object.entries(barnie);
console.log(keyValuePairs);

//** changing the object access */

Object.freeze(barnie);
barnie.isGoodDog = true;
barnie.name = "chapo";
console.log(barnie);

//** seal */

let marley = {
    name: "Marly",
    color: "brown",
}

Object.seal(marley);
marley.color = "grey";
marley.isGoodDog = true;
console.log(marley);



