
function Employee(firstName, lastName, age, salary){
    this.firstName = firstName;
this.lastName = lastName;
this.age = age;
this.salary = salary;
this.printInfo = function () {
    console.log(`emplooer: ${this.firstName} ${this.lastName} ${this.age}. Salary ${this.salary}`);
    
} }




function Developer(firstName, lastName, age, salary, pragrammingLanguages) {
    Object.setPrototypeOf(this, new Employee(firstName, lastName, age, salary));
// this.firstName = firstName;
// this.lastName = lastName;
// this.age = age;
// this.salary = salary;
this.pragrammingLanguages = pragrammingLanguages ?? [];
// this.printInfo = function () {
//     console.log(`emplooer: ${this.firstName} ${this.lastName} ${this.age}. Salary ${this.salary}`);
    
// }
this.code = function () {
    console.log(`${this.firstName} is doing magic :D`);
    
} }


function Manager(firstName, lastName, age, salary, team) {
    Object.setPrototypeOf(this, new Employee(firstName, lastName, age, salary));
    
//     this.firstName = firstName;
// this.lastName = lastName;
// this.age = age;
// this.salary = salary;
this.team = team;
// this.printInfo = function () {
//     console.log(`emplooer: ${this.firstName} ${this.lastName} ${this.age}. Salary ${this.salary}`);
    
// }
this.organiseMeeting = function () {
    console.log(`the manager ${this.firstName} is organising meeting for the ${this.team}`);
    
} }

function Tester(firstName, lastName, age, salary, bugsFound) {
    Object.setPrototypeOf(this, new Employee(firstName, lastName, age, salary));
    this.bugsFound = bugsFound;
    this.testSoftware = function () {
        console.log(`${this.firstName} is testing and found ${this.bugsFound} bugs `);
        
    } }

    const darko = new Developer("darko", "darkovski", 23, 5000, ["JavaScrip", "C#"]);
    darko.printInfo();
    console.log(darko);
    
    const robert = new Manager("Robert", "Robertski", 32, 5500, "G2");
    robert.printInfo();
    robert.organiseMeeting();

    const arian = new Tester("Arian", "Ariansky", 29, 4000, 2);
    arian.printInfo();
    arian.testSoftware();