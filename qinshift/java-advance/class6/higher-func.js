console.log("================= HIGHER ORDER FUNCTIONS =================");

// ===> TEST DATA
const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

const students = [
    { id: 1, firstName: "Bob", lastName: "Bobsky", age: 20, gender: "Male", isActive: true },
    { id: 2, firstName: "John", lastName: "Smith", age: 23, gender: "Male", isActive: false },
    { id: 3, firstName: "Marie", lastName: "Mosky", age: 19, gender: "Female", isActive: true },
    { id: 4, firstName: "Jane", lastName: "Doe", age: 22, gender: "Female", isActive: false },
    { id: 5, firstName: "Ana", lastName: "Taylor", age: 21, gender: "Female", isActive: true },
];
// forEach

for(const number of numbers){
    console.log(number);}

numbers.forEach(num => console.log(num));

students.forEach(student => {
    console.log(`${student.firstName} ${student.lastName}`);
    if (student.age < 21) {
        console.log("The student is underaged");
    }
});

// filter
const evenNumbersResult = [];
for(const number of numbers){
    if(number % 2 === 0) {
        evenNumbersResult.push(number);
    }
}
console.log(evenNumbersResult);

const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);
// example 2: female students

const femaleStudents = students.filter(student => student.gender === "Female")
console.log(femaleStudents);

// map
// example 1: squered numbers
const squeredNumbers = numbers.map(num => num * num);
console.log(squeredNumbers);

// exa2 : get students with full names of all female students
const studentFullNames = students.map(s => `${s.firstName} ${s.lastName}`);
console.log(studentFullNames);

const femaleStudentFullNames = students.filter(s => s.gender === "Female").map(s => `${s.firstName} ${s.lastName}`);

// reduce

// exam 1 : get sum and average of numbers
const sumOfNumbers = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sumOfNumbers);
console.log(sumOfNumbers / numbers.length);

// exam 2: get average of age of students
const studentsAverageAge = students.reduce((acc, curr) => acc + curr.age, 0);

const studentsAveAge = students.reduce((acc, curr) => {
    // debugger;
    acc += curr.age;
    return acc;
},0) / students.length;
console.log( studentsAveAge);

// sort
// exam 1: sorting numbers

const sortingNumbersArray = [-5, 3, 20, -300, 1000, 55, 33, 100, 0];

// const sortedNumbersAbc = sortingNumbersArray.sort((a, b) => a - b);
// console.log(sortedNumbersAbc);
// console.log(sortingNumbersArray);

// Descending

const sortedNumbersAbc = sortingNumbersArray.sort((a, b) => b - a);
console.log(sortedNumbersAbc);
console.log(sortingNumbersArray);


// sort with strings
students.sort((a, b) => a.firstName.localeCompare(b.firstName));