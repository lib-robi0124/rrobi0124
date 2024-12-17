
/* function Person(firstName, lastName, birthYear, isEmployeed){
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
console.log(`Robert birthYear is ${robert.calulateAge(2024)}`);*/

function Pet(name, animal, color){
    this.name = name;
    this.animal = animal;
    this.color = color;
    this.speak = function(animal) {
        if(animal === "dog"){
            return "av av av";            
        } else if(animal === "cat"){
            return "mjau maju";
        }
    }
}
let ada = new Pet("Ada", "dog", "white");
let roki = new Pet("Roki", "cat", "yellow-grey");
console.log(`${ada.name} is a good ${ada.animal}, she is ${ada.color} and very loud, speaking: ${ada.speak("dog")}`);
console.log(`${roki.name} is a good ${roki.animal}, he is ${roki.color} and very loud, speaking: ${roki.speak("cat")}`);


