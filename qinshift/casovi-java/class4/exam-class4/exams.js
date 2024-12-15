// numberOfItems to array

//let item = parseInt(prompt("Enter a number:"));
let numbers = [1, 2, 3, 4, 1, 3, 5, 4, 2, 1];

function findNumber(item) {
  let numberOfItems = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (item === numbers[i]) {
      numberOfItems++;
    }
  }
  return numberOfItems;
}

let numberOfItems = findNumber(1);
console.log(`1 is ${numberOfItems} times in array`); 
//console.log(`2 is ${findNumber(2)} times in array`); 


/*function findNumber(number, numberArr){
  for(let i = 0; i < numberArr.length; i++){
    if(number === numberArr[I])
         counter++
        }
}
console.log(`there is ${counter} occurance of number ${number}`);

let numberArr = [1, 2, 3, 2, 3, 4, 5, 4, 6, 3];
findNumber(2, number);

//
// odd / even
function findEvenOdd(array, type){
  let resultArray = [];
  if (type --- "even"){
    for(let item of array){
      if(item % 2 ==0){
      resultArray.push(item);
    }
  }
} else if (type ){

}*/
/*let arrayNumbers = [];
for (let i = 0; i < 10; i++) {
  let addToArrayNumbers = parseInt(prompt("Enter a number:"));
  arrayNumbers.push(addToArrayNumbers);
}

let userChoice = prompt("Enter a odd or even");

function filterOddEven(arrayNumbers, userChoice) {
  let countEven = 0;
  if (userChoice === "even") {
    for (let num of arrayNumbers) {
      if (num % 2 === 0) {
        countEven++;
      }
    }
    return countEven;
  } else if (type === "odd") {
    let countOdd = 0;
    for (let num of arrayNumbers) {
      if (num % 2 !== 0) {
        countOdd++;
      }
    }
    return countOdd;
  }
}
if (userChoice === "even") {
  alert(`${userChoice} has ${countEven} items`);
} else if (userChoice === "odd") {
  alert(`${userChoice} has ${countOdd} items`);
} else {
  alert("The type was not correct. Please enter odd or even");
} */
