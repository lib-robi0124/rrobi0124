/* let x, a, y, z;
x = 1;
a = "Robert";
y = true;
z = 0 / 0;
console.log(`${typeof(x)}, ${typeof(a)}`);
console.log(z);
console.log(y); */

/*let userNumber = parseInt(prompt("enter a number"));
let userString = prompt("enter your name");
let userLogic = Boolean(prompt("enter a true or false"));
let userNull = prompt(" empty");
let userUndefined ;
console.log(userNumber);
console.log(userString);
console.log(userLogic);
console.log(userNull);
console.log(userUndefined);*/

/*let x = 13;
let userInput = parseInt(prompt("enter a number"));
let difNumber = userInput - x;
let difdouble = 0;
function doubledif (difNumber) {
    if (difNumber > x){
        return difNumber * 2;
    } else {
        return alert("enter bigger number");
    }
    
}
doubledif(difNumber)
alert(difdouble); */

/* function closeto100 (number1, number2){
    let closevalue = 100; 

 mora vaka====   if(number1 < 0 || number2 < 0){
        console.log("please enter positive numbers");
    } else if((number1 && number2) > 0) ova nemora{
        if(number1 > closevalue){
            return difer1 = math.abs(number1 - closevalue);
        }else {
            return difer1 = closevalue - number1;
        }

        difer2 = 100 - number2; 
    }
    return difer1, difer2; 
} */


   /* let salaryAmount = 1000;
    
    function calcutalteExpenses(rentAmount,otherExpenses){
        
        allExpenses = rentAmount + otherExpenses;
        restToMonth = salaryAmount - allExpenses;
       
    }
    calcutalteExpenses(375,250);
    console.log(`Bob has ${restToMonth} euro to spend`);
    console.log(`Total Bob's expenses are ${allExpenses} euro`); */

   
    
   /* function gradeToPass(exam1, exam2, exam3, exam4, exam5){
        if(exam1 !== Number(exam1) || exam2 !== Number(exam2) || exam3 !== Number(exam3) 
            || exam4 !== Number(exam4) || exam5 !== Number(exam5)){
            console.log("please enter a valid number between 6 and 10");            
        } else if(exam1 < 6 || exam2 < 6 || exam3 < 6 || exam4 < 6 || exam5 < 6){
            console.log("Please enter grade number bigger than 5"); 
        } else if(exam1 > 10 || exam2 > 10 || exam3 > 10 || exam4 > 10 || exam5 > 10){
            console.log("Please enter grade number lower than 11"); 
        } else {
            passGrade = (exam1 + exam2 + exam3 + exam4 + exam5) / 5;
            if(passGrade => 8){
                console.log("Student pass");
            } else {
                console.log("Student fail");
            }
        }
        }

gradeToPass(10, 6, 8, 9, 6);
gradeToPass(10, 5, 8, 9, 6);
gradeToPass(10, 11, 8, 9, 6);
gradeToPass(10, tr, 8, 9, 6); */

/*  false: The boolean value false.
    0: The number zero.
    "" or '' or ````: An empty string.
    null: The null keyword, representing the absence of any object value.
    undefined: The undefined keyword, representing an uninitialized value.
    NaN: Stands for "Not a Number"
    console.log(Boolean(false))
    console.log(Boolean(0))
    console.log(Boolean(""))
    console.log(Boolean(null))
    console.log(Boolean(undefined))
    console.log(Boolean(NaN))
    numbers.splice(i,1);

    */

  // Make an array of ten elements.Make sure four of them to be: Null, undefined, NaN, “” ;
 /* let age; 
  let inputNull = prompt("press enter");
  let arrayFalse = [ 1, "Robi", 0 , -3, "", "Ada", age, 10 * "Ten", 9, inputNull ];
  let i = 0;
  while(i < arrayFalse.length){
    cheakItem = arrayFalse[i];
    if(Boolean(cheakItem) === false){
        arrayFalse.splice(i,1);
        i++;
    } else if (isNaN(Boolean(cheakItem))){
        arrayFalse.splice(i,1);
        i++;
    }else {
        i++;
    }
  }
  console.log(arrayFalse); */
  /*let cheakValue = "start";
  let userToDoList = [];
  for(i=0; Boolean(cheakValue === "close") = false; i++){
    let cheakValue = prompt("please enter To/Do task, enter close to finish");
    userToDoList.push(cheakValue);
  
  }
  console.log(userToDoList);*/
  
  // console.log(cheakValue);
  // console.log(Boolean(valueCheak));

  /*
  if(i = 0, "close" !== cheakValue, i++){
    console.log(userToDoList);

    }
  else if ("close" === cheakValue){
    console.log("this is full list");
    console.log(userToDoList);
      }*/
   /* let checkValue = "start";
    let userToDoList = [];
    
    while (checkValue !== "close") {
      checkValue = prompt("Please enter a To-Do task, or type 'close' to finish:");
    
      if (checkValue === null || checkValue.trim() === "") {
        console.log("Please enter a valid task (non-empty).");
      } else if (checkValue !== "close") {
        userToDoList.push(checkValue.trim()); // Trim whitespace before adding
      }
    }
    
    console.log("Your To-Do List:", userToDoList);*/

   
  /*  
    function phoneBook(fName = '', lName = '', phoneNumber = '') {
        this.fName = fName;
        this.lName = lName;
        this.phoneNumber = phoneNumber;
        this.displayPhoneBook = function () {
            console.log(`${this.fName} ${this.lName} ${this.phoneNumber}`);
        };
    }
    
    // Loop to get user input and display phone book entries
    for (let i = 0; i < 3; i++) {
        let fName = prompt('Please enter first name');
        let lName = prompt('Please enter last name');
        let phoneNumber = prompt('Please enter phone number');
        
        let book = new phoneBook(fName, lName, phoneNumber);
        book.displayPhoneBook();
    }
        */
       

    function Academy(academyName = '', numberOfGroups = '', numberOfClassrooms = '') {
        this.academyName = academyName;
        this.numberOfGroups = numberOfGroups;
        this.numberOfClassrooms = numberOfClassrooms;
    }
    function Groups(name = '') {
        this.name = name;
        this.numberOfStudents = 0;
        this.students = [];
       this.addStudent = function (student) {
            this.students.push(student);
            this.numberOfStudents = this.students.length;
    }
}
function Student(fName = '', lName = '', age = '', email = '', academy = '', group = '') {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.email = email;
        this.academy = academy;
        this.group = group;
    }
 
let academySEDC = new Academy("Qinshift", 3, 5);
let g1 = new Groups("G1");
let g2 = new Groups("G2");
let g3 = new Groups("G3");

let student1 = new Student("Robert", "Ristovski", 52, "rrobi01@yahoo.com", academySEDC.academyName, g2.name);
let student2 = new Student("Sara", "Ristovska", 20, "rsara04@gmail.com", academySEDC.academyName, g1.name);
let student3 = new Student("Todorka", "Ristovska", 35, "toska@gmail.com", academySEDC.academyName, g3.name);

// Add students to groups
g2.addStudent(student1);
g1.addStudent(student2);
g3.addStudent(student3);

// Display output
console.log("Academy Name:", academySEDC.academyName);
console.log("Student 1's Academy:", student1.academy);
console.log(student1);
console.log("Number of Students in", g2.name + ":", g2.numberOfStudents);

