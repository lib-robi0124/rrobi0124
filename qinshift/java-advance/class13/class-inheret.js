
// function Employee(firstName, lastName, age, salary) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.salary = salary;
//     this.printInfo = function () {
//         console.log(`Employee: ${this.firstName} ${this.lastName}. Age ${this.age}. Salary ${this.salary}.`);
//     }
// }

class Employee {
    constructor(firstName, lastName, age, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.salary = salary;
    }

    printInfo() {
        console.log(`Employee: ${this.firstName} ${this.lastName}. Age ${this.age}. Salary ${this.salary}.`);
    }
    greetColleague(name) {
        console.log(`${this.firstName} says hello to ${name}`);
        
    }
}

const bob = new Employee("Bob", "Bobsky", 30, 3000);
console.log(bob);
bob.printInfo();
bob.greetColleague("John");


//** class inheritance */

// function Developer(firstName, lastName, age, salary, pragrammingLanguages) {
//     // Object.setPrototypeOf(this, new Employee(firstName, lastName, age, salary));
//     Employee.call(this.firstName, lastName, age, salary)
// this.pragrammingLanguages = pragrammingLanguages ?? [];

// this.code = function () {
//     console.log(`${this.firstName} is doing magic :D`);
    
// } };

class Developer extends Employee {
    constructor(firstName, lastName, age, salary, pragrammingLanguages) {
        super(firstName, lastName, age, salary);
        this.pragrammingLanguages = pragrammingLanguages;

    }
    code(){
    console.log(`${this.firstName} is doing magic :D`);
    }};

class Manager extends Employee {
    constructor(firstName, lastName, age, salary, department){
        super(firstName, lastName, age, salary);
        this.department = department;
    }
    organiseMeeting() {
        console.log(`the manager ${this.firstName} is organising meeting for the ${this.team}`);
}};

class Tester extends Employee {
    constructor(firstName, lastName, age, salary, bugsFound) {
        super(firstName, lastName, age, salary);
        this.bugsFound = bugsFound;
    }
    testSoftware () {
        console.log(`${this.firstName} is testing and found ${this.bugsFound} bugs `);
    }};

class AutomationTester extends Tester{
    constructor(firstName, lastName, age, salary, bugsFound, automationFramework) {
        super(firstName, lastName, age, salary, bugsFound);
        this.automationFramework = automationFramework;
    }
writeAutomationTester() {
    console.log(`${this.firstName} is writing Automation Tests using the ${this.automationFramework} framework`);
    
}};


const dev = new Developer("Robert", "Sara", 50, 50000, ["C#", "JavaScript"]);
dev.printInfo();
dev.code();
const tester = new Tester("Toska", "Todorka", 34, 3243243, 342);
tester.testSoftware();
const manager = new Manager("Zvonko", "Zvonkovski", 42, 2345, "IT");
manager.organiseMeeting();
const automationTester = new AutomationTester("Zivka", "Lia", 22, 22222, 2, "selenium");
automationTester.writeAutomationTester();



console.log(dev instanceof Developer);
console.log(dev instanceof Employee);

