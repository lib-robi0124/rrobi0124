
  
/*
 let arrayNumbers = [];
 i = 0;
 while (i < 5) {
     let addToArrayNumbers = parseInt(prompt("Enter a number:"));
   if(!isNaN(addToArrayNumbers)){
    arrayNumbers.push(addToArrayNumbers);
    i++;    
   }
   else{
   alert("This is not a number, please enter a number");
   }
 }
 
let sumArray = 0;
 for (let i = 0; i < arrayNumbers.length; i++) {
   sumArray = sumArray + arrayNumbers[i];
 }
 alert(`Your array for sum is ${arrayNumbers}`);
 
 alert(`The sum of array numbers is ${sumArray}`);*/
        
      
/* alert(`sum of your array numbers is ${sumOfItems()}`); 
 // } 
 /*let a=0;
 for(i = 0; i < 5; i++){
  a = a + i;
 }
 console.log(a);*/

 //Hello there students of SEDC

/* 
let arrayOfStrings = ["Robert", "Hello", "Qinshift", "there", "students", "play", "of", "SEDC"];
let bigString = [];

for (let i = 0; i < arrayOfStrings.length; i++) {
  if (arrayOfStrings[i] === "Hello") {
  bigString.push(arrayOfStrings[i]);
      continue;
  } else  if (arrayOfStrings[i] === "there") {
    bigString.push(arrayOfStrings[i]);
        continue;
  } else  if (arrayOfStrings[i] === "students") {
    bigString.push(arrayOfStrings[i]);
        continue;
  } else  if (arrayOfStrings[i] === "of") {
    bigString.push(arrayOfStrings[i]);
        continue;
  } else  if (arrayOfStrings[i] === "SEDC") {
    bigString.push(arrayOfStrings[i]);
        continue;
  }
} 
console.log(bigString); */





// Even / Odd


 /* for (let i = 1; i < 21; i++){
          if (i % 2 !== 0) {
              console.log(i);            
      } else {
              console.log(i);              
              console.log(" ");
          }
}*/

// Even / Odd

/*let numberArray = [2, 5, 1, 6, 3, 7];
let maxItem = numberArray[0];
let minItem = numberArray[0];
let sumMaxMin = 0;
      for (let i = 1; i < numberArray.length; i++) {
          if (maxItem < numberArray[i]) {
              maxItem = numberArray[i];
          }
        }
        console.log(maxItem);
     
        for (let i = 1; i < numberArray.length; i++) {
        if (minItem > numberArray[i]) {
            minItem = numberArray[i];
         }
       }
        console.log(minItem);
sumMaxMin = maxItem + minItem;
console.log(`Sum of Max i Min is ${sumMaxMin}`);
*/
/*let arrayFirstName = ["Robert", "Sara" , "Toska"];
let arraySecondName = ["Ristovski", "Ada", "Giceva"];
let fisrtSecondName = [];

for ( i=0; i < 3; i++) {
  firstname = arrayFirstName[i];
  fisrtSecondName.push(firstname);
  secondName = arraySecondName[i];
  fisrtSecondName.push(secondName);
 
}
console.log(fisrtSecondName);
let fullInfoNames = [];
let item=0;
for ( i=1; i < fisrtSecondName.length; i++) {
  j=i-1
  if (j % 2 == 0){
  itemFullInfoName = fisrtSecondName[j] + " " + fisrtSecondName[i];
 item++
console.log(`${item}. ${itemFullInfoName}`);
}
}*/
// tell a story
/*let arrayTellStory = ["Robert", "Sara", "Ada","happy", "sad", "angry","running", "playing", "swimming"];

alert(`This is ${arrayTellStory[0]} \. ${arrayTellStory[0]} is a nice person \. 
  Today he is ${arrayTellStory[4]} \. He is ${arrayTellStory[6]}  all day. The end.`);

  alert(`This is ${arrayTellStory[2]} \. ${arrayTellStory[2]} is a nice dog \. 
    Today she is ${arrayTellStory[3]} \. She is ${arrayTellStory[6]}  all day. The end.`);*/
   /*
    let arrayOfStrings = ["Robert", "Hello", "Qinshift", "there", "students", "play", "of", "SEDC"];
alert(`${arrayOfStrings[2]} ${" "} ${arrayOfStrings[3]} ${" "} ${arrayOfStrings[4]} ${" "} ${arrayOfStrings[6]} ${" "} ${arrayOfStrings[7]} !!`);
*/
/*let arrayFirstName = ["Robert", "Sara" , "Toska"];
let arraySecondName = ["Ristovski", "Ada", "Giceva"];
let fisrtSecondName = [];
let firstname,secondName;

for ( i=0; i < arrayFirstName.length; i++) {
  firstname = arrayFirstName[i];
  fisrtSecondName.push(firstname);
  secondName = arraySecondName[i];
  fisrtSecondName.push(secondName);
 }
console.log(fisrtSecondName);
let fullInfoNames = [];
let item=0;
let itemFullInfoName, j;

for ( i=1; i < fisrtSecondName.length; i++) {
  j=i-1
  if (j % 2 == 0){
  itemFullInfoName = fisrtSecondName[j] + " " + fisrtSecondName[i];
 item++;
console.log(`${item}. ${itemFullInfoName}`);
}
}*/
let numberArray = [2, 1, 1, 8, 3, 7];
let maxItem = numberArray[0];
let minItem = numberArray[0];
let sumMaxMin = 0;
      function minMax(){
      for (let i = 1; i < numberArray.length; i++) {
          if (maxItem < numberArray[i]) {
              maxItem = numberArray[i];
          } else if (minItem > numberArray[i]) {
            minItem = numberArray[i];
         }
        
        }
        console.log(`Biggest number in array is ${maxItem}`);
        console.log(`Smallest number in array is ${minItem}`);
        return sumMaxMin = maxItem + minItem;
      }
        
        minMax();
        console.log(`Sum of Max i Min is ${sumMaxMin}`);