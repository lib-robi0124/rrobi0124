
const animal ={
    type: "mamal",
    eat: function () {
        console.log("nom nom nom");
    }
}

const dog = Object.create(animal);
dog.breed = "malteze pudle";
console.log(dog);

///** __proto__ */

console.log(dog.type);

console.log(dog.__proto__.type);

console.log(dog.__proto__.__proto__);


//** prototype */

function Animal(name) {
    this.name = name;
    this.eat = () => console.log(`${this.name} is eating`);
}

console.log(Animal.prototype);

Animal.prototype.makeSound = function () {
    console.log(`the ${this.name} make sound`);
}
Animal.prototype.isWild = false;
console.log(Animal.prototype);


console.log(Animal.prototype);

const cat = new Animal("cat");
cat.makeSound();
console.log(cat);

//** object.setPrototypeOf */

const swimAbality = {
    isGoodSwimmer: false,
    swim: function () {
        console.log(`${this.name} is swimming. It is a ${this.isGoodSwimmer ? "good" : "bad"}`);
        
    }
}

const turtle = new Animal("turtle");
turtle.makeSound();
// turtle.swim(); //error

// Object.setPrototypeOf(turtle, swimAbality);
turtle.isGoodSwimmer = true;
// turtle.swim();
console.log(turtle);

Object.setPrototypeOf(swimAbality, Animal.prototype);
Object.setPrototypeOf(turtle, swimAbality);
turtle.makeSound();
turtle.swim();
console.log(turtle);


//** Object.getPrototypeOf */

const bird = new Animal("dove")
bird.makeSound();

console.log(Object.getPrototypeOf(bird));
console.log(Object.getPrototypeOf(bird) === Animal.prototype);





