
// while loop and how it works

let a = 1;
while (a < 10){
    console.log(a);
    a++; // a = a +1
    }

let fruits = ["apple", "banana", "orange", "grapes"];
let count = 0;
console.log(fruits);

while(count < fruits.length){
    console.log(`${count}` + fruits.length);
    count++;
}

//do /while
while (prompt("press X to continue").toLowerCase() !== "x") {
    alert("nope, this is not an X");
}
alert("great, you found X");


// exam array
let arraysum = 101;
let dubblesum = 0;

while(arraysum < 151){
    dubblesum = dubblesum + Math.pow(arraysum, 2);
    arraysum++;
}
console.log(dubblesum);


// FOR loop
// et names = ["Bob", "Sara", "Greg"];
// for(let i = 0; i < names.length; i++){
 //   console.log(names[i]);
   // }
 
   // for loop from string
   //let name = "Robert Ristovski";
   //for(let i = 0; i < name.length; i++){
     //  console.log(name[i]);
      //}




 // FOR of loop
//let names = ["Bob", "Sara", "Greg"];
//for(let name of names){
  //  console.log(name);
   //}
 

   // for of loop from string
   //let name = "Robert Ristovski";
   //for(let letter of name){
       //console.log(letter);
    //  }

// brake
let namesAllowed = [ "Bob", "Sara", " ", "Greg"];
for(let name of namesAllowed) {
   if(name === " "){
    console.log("Empty names are not allowed Loop stopped!");
    break;
    }
    console.log(name);
  }

  // continue
let namesAllowed2 = [ "Bob", "Sara", " ", "Greg"];
for(let name of namesAllowed2) {
    if(name === " "){
     console.log("Empty names are skipped!");
     continue;
    }
    console.log(name);
}

// using return from a function to stop a loop along with the whole function
let names = ["Bob", "Sara", "Greg"];
function findItemInArray(array, itemToFind) {
    for(let item of array){
        console.log(`checking item: ${item}`);
        if (item === itemToFind) {
            return "item is found";
        }
        
    }
    return "item is not found"
}
console.log(findItemInArray(names, "Sara"));

// loop inside the loop
let arrayOfArrays = [[1, "Bob"], [2, "Sara"], [5, "Robert"]];
for(let i = 0; i < arrayOfArrays.length; i++){
    console.log(`Array no. ${i} is being processed..`);
    array = arrayOfArrays[i];
    for(let j = 0; j < array.length; j++){
        console.log(`Info about person: ${array[j]}`);
        
    }
    
}
let groceries = ["Bread", "Milk", "Butter"];
    function addToGroceriesList(item){
      if(typeof(item) === "string"){ // Checking if item is string
        groceries.push(item);
        console.log(`You have added ${item} to the list!`);
      } else {
        console.log(`The item ${item} was not added to the list. Sorry.`);
      }
    }
    // Calling the adding function
    addToGroceriesList(" ");
    console.log(groceries);

    let groceries = ["Bread", "Milk", "Butter", "Salad", " "];
    function checkForItemInGroceriesList(item){
      for(let listItem of groceries) {
        if(listItem === item){ // Check if the item is the inputted item
          console.log(`The item ${item} was found!`);
          return listItem; // return always goes out of the function
        }
      }
      console.log(`There was no ${item} item in the list!`);
      return null; // Will not execute if the previous return is executed
    }
    // Calling the check item function
    let searchedItem = checkForItemInGroceriesList(" "); // "Butter"
    let searchedItem2 = checkForItemInGroceriesList("Sugar"); // null

