
// function Employee(firstName, lastName, age, salary){
//     this.firstName = firstName;
// this.lastName = lastName;
// this.age = age;
// this.salary = salary;
// this.printInfo = function () {
//     console.log(`emplooer: ${this.firstName} ${this.lastName} ${this.age}. Salary ${this.salary}`);
    
// } }


class Developer {
    constructor (firstName, lastName, age, salary, pragrammingLanguages) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.salary = salary;
    this.pragrammingLanguages = pragrammingLanguages ?? [];
   } 
    
    printInfo () {
        console.log(`emplooer: ${this.firstName} ${this.lastName} ${this.age}. Salary ${this.salary}`);
    }
    code () {
        console.log(`${this.firstName} is doing magic :D`);
    }   }


    const ivica = new Developer("Ivica", "Stanoeski", 35, 5200, "C#");
    console.log(ivica);
    
