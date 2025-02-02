const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];


const students = [
    { id: 1, firstName: "Bob", lastName: "Bobsky", age: 20, gender: "Male", isActive: true },
    { id: 2, firstName: "John", lastName: "Smith", age: 23, gender: "Male", isActive: false },
    { id: 3, firstName: "Marie", lastName: "Mosky", age: 19, gender: "Female", isActive: true },
    { id: 4, firstName: "Jane", lastName: "Doe", age: 22, gender: "Female", isActive: false },
    { id: 5, firstName: "Ana", lastName: "Taylor", age: 21, gender: "Female", isActive: true },
];

// every

const allPossitive = numbers.every(n => n > 0);
console.log(allPossitive);

// students > 20
const allStudentsOlder = students.every(s => s.age > 20);
console.log(allStudentsOlder);

// some only one to submit in condition - true or false
const evenNumber = numbers.some(n => n % 2 === 0);
console.log(evenNumber);

const someStudentsOlder = students.some(s => s.age < 20);
console.log(someStudentsOlder);

// find - first element to submit condition
const findNumber = numbers.find(n => n % 2 === 0 && n > 20);
console.log(findNumber);

const firstStudentWithJ = students.find(s => s.firstName.startsWith("j"))
console.log(firstStudentWithJ);

// find index
const findIndexNumber = numbers.findIndex(n => n > 40);
console.log(findIndexNumber);

// includes
console.log(numbers.includes(21));
// Marie to students ??
// const hasMarie = students.includes("Marie") - cann not use
const hasMarie = students.some(s => s.firstName === "Marie");
console.log(hasMarie);

// flat
const nestedArray = [1, [2, 3], [4, [5, 6]], 7];
console.log(nestedArray);
const flattendenOneLevel = nestedArray.flat(1);
console.log(flattendenOneLevel);

const fullyFlatted = nestedArray.flat(Infinity);
console.log(fullyFlatted);

// flatmap()

// split ( for strings)
const sentence = "JavaScript is awesome!";
const words = sentence.split(" ");
console.log(words);

// join
const joinedSentence = words.join(" ");
console.log(joinedSentence);

// reverse
const NumbersToReverse = [1, 2, 3, 4, 5, 6];
const reverseNumbers = NumbersToReverse.reverse();
console.log(reverseNumbers);






