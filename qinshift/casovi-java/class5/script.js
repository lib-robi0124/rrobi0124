//create an object

let person = {
    firstName: "Robert",
    lastName: "Ristovski",
    age: 52,
    hobbies: ["swimming", "skiing", "running"],
    isLazy: false,

    getFullName: function () {
        return this.firstName + " " + this.lastName;
    },

    showHobbies: function () {
        for (let hobby of this.hobbies) {
            console.log(hobby);
        }
    }
}

console.log(person);
console.log(person.firstName);
console.log(person.getFullName());
person.showHobbies();

// we can change the object after their creation
// add property or metod after object is created

person.height = 189;
console.log(person);

person.getHeight = function () {
    return this.height;
}

console.log(person.height);

let pet = {
    calledName: "Ada",
    age: 4,
    color: "white",
    agressive: false,
    activity: ["running", "eating", "love"],

    getPetName: function () {
        return this.calledName + " " + this.color;
    },
}
console.log(pet);




