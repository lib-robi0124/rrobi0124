

function Person(firstName, lastName, birthYear, isEmployeed){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.isEmployeed = isEmployeed;
    this.getFullName = function(){
        return `${this.firstName} ${lastName}`;
    }
    this.calulateAge = function(currentYear){
        return currentYear - this.birthYear;
    }
}

let robert = new Person("Robert", "Ristovski", 52, true);
let sara = new Person("Sara", "Ristovska", 20, false);

console.log(sara);
console.log(robert.calulateAge(2024));




