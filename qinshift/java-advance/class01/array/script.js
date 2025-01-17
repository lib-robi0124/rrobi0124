console.log('== Arrays ==');

let mixArr = [true, 234, "string", NaN, undefined, 12, 342_131];
let testArr = [1, 23, 54, 123_456_789, 43, 423, 4343];
console.log(testArr[0]);
// array so [] , take item [i]
console.log(testArr.length);
testArr.push(321);
console.log(testArr);
testArr.push(123,456);
console.log(testArr);
testArr.unshift(11111);
console.log(testArr);
let lastItem = testArr.pop();
console.log(lastItem);
let fItem = testArr.shift();
console.log(fItem);
testArr[4] = 3232; // replace item in arr (or add if last)
console.log(testArr);

// == splice & slice
testArr.splice(2, 3);
console.log(testArr);
testArr.splice(4); // delete from item item with index 4 to the end
console.log(testArr);

// storing objects in array
let objectArray = [
    { id: 1, fName: "Robert", lName: "Ristovski"},
    { id: 2, fName: "Zivkica", lName: "Giceva"}
]
console.table(objectArray); // display data in table

function sum(num1, num2) {
    return num1 + num2;
};
console.log(sum(34, 45));
function subtract(num1, num2) {
    return num1 - num2;
};
let sumArr = [
    sum,
    subtract
];
console.log(sumArr[1](45, 34));
console.log(sumArr[0](45, 34));

let input = " ";
do {

} while (!input); // condition - input === undefined || input === null
console.log(input);

let students = ["Simona", "David", "Sandra", "Angel", "Robert"];
for (i = 0; i < students.length; i++) {
    console.log(`${i + 1}, ${students[i]}`);
};

for (let student of students) {
    if (student.startsWith("A")){
        console.log("The stundets " + student + " starts with letter A");
        continue;
    }
};












