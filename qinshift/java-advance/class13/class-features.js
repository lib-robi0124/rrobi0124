class Employee {
  static idCounter = 0;

  constructor(firstName, lastName, age, salary) {
    // this.id = ++idCounter; //** undefined */
    this.id = ++Employee.idCounter;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.salary = salary;
  }

  printInfo() {
    console.log(
      `Employee: ${this.firstName} ${this.lastName}. Age ${this.age}. Salary ${this.salary}.`
    );
  }
  greetColleague(name) {
    console.log(`${this.firstName} says hello to ${name}`);
  }
  static getTotalEmlooes() {
    return `Total Emplooes: ${Employee.idCounter}`;
  }
}

const bob = new Employee("Bob", "Bobski", 35, 4325);
bob.printInfo();
console.log(bob.id);
console.log(bob);

console.log(Employee.idCounter);
const empl1 = new Employee();
const empl2 = new Employee();
const empl3 = new Employee();

console.log(Employee.getTotalEmlooes());
// empl3.getTotalEmlooes(); not OK

class StringHelper {
  static toTitleCase(str = "") {
    let splitString = str.split(" ");
    for (let i = 0; i < splitString.length; i++) {
      let word = splitString[i];
      splitString[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    return splitString.join(" ");
  }
  static truncate(str, maxLength) {
    return str.length < maxLength ? str : str.substring(0, maxLength) + "...";
  }
}

console.log(StringHelper.toTitleCase("tHis is MeSSeD uP teXT"));
console.log(StringHelper.truncate("This is very very very very very very very very very long string", 7));

// this is MeSSeD uP teXT => This Is Messed Up Text

//** == GET / SET == */

class Product {
    static idCounter = 0;

    constructor(name, price) {
        this.id = ++Product.idCounter;
        this.name = name;
        this.price = price;
    }

    get price() {
        console.log("hello from price property getter");
        return `$${this._price.toFixed(2)}`;
    }

    set price(value) {
        console.log("hello from price property setter");
        if(value <= 0) {
            console.error("price can not be minus");
            return;
        }
        this._price = value;
    }
    get id() {
        return this._id;
    }

    set id(value) {
        if (!this.id) {
            console.log(`Id ${this.id} added`);
                        this._id = value;
        } else {
            console.error("can not reassing ID value");
            
        }
    }
}

const product = new Product("laptop", 123456);
console.log(product.name);
console.log(product.price);
console.log(product);


