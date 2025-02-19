class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  getFullName() {
    console.log(`Person is: ${this.firstName} + ${this.lastName}`);
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, grade) {
    super(firstName, lastName, age);
    this.grade = grade;
  }
  getStudentInfo() {
    console.log(
      `Person is: ${this.firstName}  ${this.lastName} and has ${this.grade} grade`
    );
  }
}

const student1 = new Student("robert", "perov", 45, 8);
student1.getStudentInfo();

//** task 2 */

class Car {
  constructor(brand, model, speed) {
    this.brand = brand;
    this.model = model;
    this.speed = speed;
  }
  get speed() {
    return `This is ${this.brand} speed ${this._speed} km/h`;
  }
  set speed(value) {
    if (value <= 0) {
      console.error("speed can not be minus");
      return;
    }
    this._speed = value;
  }
  printInfo() {
    console.log(
      `Car is ${this.brand} brand ${this.model} with speed ${this.speed}`
    );
  }
}

const bmwcar = new Car("BMW", "X1", 160);
console.log(bmwcar.speed);
