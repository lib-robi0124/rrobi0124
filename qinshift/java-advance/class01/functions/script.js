console.log("== functions ==");
// => reusable piece of code
// benefits
// 1. reusability
// 2. Modularity - brake larger code into smaller managable parts
// 3. readability
// declare function and call for excecute
function greet(fName, lName) {
    console.log(`Hello ${fName} ${lName}`);
};
greet(); - // undefined parametars
greet("Robert", "Ristovski");

function getPI(){
    return Math.PI;
};
getPI();
const pi = getPI();
console.log(pi);

let students = [
    { id: 1, fName: "Robert", lName: "Ristovski"},
    { id: 2, fName: "Zivkica", lName: "Giceva"},
    { id: 3, fName: "Todorka", lName: "Ristovska"}
];
function sum(num1, num2) {
    // check input is number
    if (!Number.isFinite(num1) || !Number.isFinite(num2)) {
        return;
    }
    return num1 + num2;
};
let objectArray = [
    { id: 1, fName: "Robert", lName: "Ristovski"},
    { id: 2, fName: "Zivkica", lName: "Giceva"}
]
function printStudents(studentArr) {
    for (const student of studentArr) {
        console.log(`${student.id} ${student.fName} ${student.lName}`);
        // question: student kade ni e deklariran ??
    }
};
printStudents(students);
printStudents(objectArray);
document.querySelector("#click-me").addEventListener("click", function () {
    console.log(("button clicked"));
});



console.log(sum(33));
console.log(sum(33,35));

