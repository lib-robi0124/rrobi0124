let emptyArray = []; //empty array
console.log(emptyArray);
console.log(typeof emptyArray);

// declaration array with items
let numberArray = [54, 1, 2, 3];
let stringArray = [ "Robert", "Sara", "Aco"];
let jaggedArray = [12, "Bob", true, 3.3]; // mixed array
let arryOfArrays = [[1, "Bob"], [2, "Martin"]];


let days = ['Mon', 'Tue', 'Wen']; // array of stings
console.log(days);

let mixedArray = ['Martin', 12, true, null , 22]
console.log(mixedArray);
  

let firstElement = mixedArray[0];
console.log(`first Element of mixed array ${firstElement}`);

// getting the amount items
console.log(`${days.length}`);

// getting an item by index

mixedArray[7] = "Angel";
console.log(mixedArray);

console.log(arryOfArrays[0][1]);

mixedArray[mixedArray.length] = "Robert";
console.log(mixedArray);


// insert element in an Array  push() unshift() from left-start
let numbers = [1, 2, 3, 4, 5];
numbers.push(6, 7, 8);
console.log(numbers);

numbers.unshift(-2, -1, 0);
console.log(numbers);

// delete an element from array pop() shift()

numbers.pop(); // no value to pop , delete last
console.log(numbers);
 
numbers.shift(); // delete from start
console.log(numbers);

// find item in array by index
let indexOfTheree = numbers.indexOf(3);
console.log(indexOfTheree);

// will cut items with index 0 & 1
let newSliceArray = numbers.slice(2);
console.log(newSliceArray);
let sliceArray2 = numbers.slice(2, 4);
console.log(sliceArray2);

// concat
let morenumbers = [7, 8, 9, 10];
let combineArray = numbers.concat(morenumbers); // add new array from end on old one..
console.log(combineArray);

// reverse
let reverseArray = numbers.reverse();
console.log(reverseArray);







