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


console.log("");
console.log("========== forEach ==========");
// => Executes a function for each array element
// => Does NOT return a value (works on the original array)
// => Usecase: logging, iterating over arrays, performing actions on DOM elements, updating objects' properties, etc.

// ===> without forEach
// for (const number of numbers) {
//     console.log(number);
// }
numbers.forEach(num => console.log(num)); // go thru array and print each element
students.forEach(student => {
    console.log(`${student.firstName} ${student.lastName}`)
    if (student.age < 21) {
        console.log("the student is underage");
        }
});

console.log("");
console.log("========== filter ==========");
// => Creates a new array with all elements that pass the test
// => Returns the new filtered array
// => Does NOT modify the original array
// => Usecase: filtering data based on conditions, searching in arrays etc.

// Example 1: Even Numbers
// without filter()
const evenNumberResult = [];
for (const number of numbers) {
    if (number % 2 === 0) {
        evenNumberResult.push(number);
    }
}
console.log(evenNumberResult);
// write with array func
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);

// Example 2: Female Students
const femaleStudents = students.filter(student => student.gender === "Female");
console.log(femaleStudents);

const femaleStudents2 = students.filter(function (student) {
    return student.gender === "Female";
})
console.log(femaleStudents2);

console.log("");
console.log("========== map ==========");
// => Creates a new array by applying a function to every element in the array
// => Returns the new transformed array
// => Does NOT modify the original array
// => Usecase: transforming data, creating new properties, mapping to specific objects etc.

// Example 1: Squared Numbers
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);

// Example 2: Get Students full names
const studentFullNames = students.map(s => `${s.firstName} ${s.lastName}`);
console.log(studentFullNames);

// ===> Combining filter() and map()
// EXAMPLE: Get students full names of all the female students
const femaleStudentsFullNames = students.filter(s => s.gender === "Female").map(s => `${s.firstName} ${s.lastName}`);
console.log(femaleStudentsFullNames);

console.log("");
console.log("========== reduce ==========");
// => Reduces an array to a single value by applying a function to each of the elements
// => Returns the accumulated value
// => Does NOT modify the original array
// => Usecase: calculating totals, aggregating data, grouping elements, finding extremes, etc.

// Example 1: Get Sum & Average of numbers


