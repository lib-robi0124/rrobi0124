
let dog = new Object();
dog.name = "Sparky";
dog.color = "Brown";
dog.age = 1;
dog.favoriteFood = ["Carrot", "Watermellon", "Bacon"];
dog.bark = function () {
  console.log("BARK BARK BARK");
};
dog.eat = function (food) {
  dog.favoriteFood.forEach(fav =>
      fav.toLowerCase() === food.toLowerCase() ? console.log("*My favorite!*") : "");
  console.log("NOM NOM NOM");
};
console.log(dog.name); // Sparky
dog.name = "Scooby";
console.log(dog.name); // Scooby
dog.bark() // BARK BARK BARK
dog.bark = function () {
  console.log("AF AF AF");
}
dog.bark() // AF AF AF

function Dog(name, color, age, favoriteFood) {
    this.name = name === undefined ? "unnamed" : name; // in case there is no name
    this.color = color;
    this.age = age;
    this.hasOwner = false; // default value for all
    this.favoriteFood = favoriteFood;
    this.bark = function () {
      console.log("BARK BARK BARK");
    };
    this.eat = function (food) {
      dog.favoriteFood.forEach(fav =>
          fav.toLowerCase() === food.toLowerCase() ? console.log("*My favorite!*") : "");
      console.log("NOM NOM NOM");
    }
  }
  
  let sparky = new Dog("Sparky", "Brown", 1, ["Chicken", "Cucumber"]);
  let doggy = new Dog(); // will have name unnamed