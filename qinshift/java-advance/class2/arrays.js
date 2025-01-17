let arrDivThee = [];
let arrDivFour = [];
let arrEndOne = [];
// LastNumberArray is the las number in N array
function newArrayFrom (LastNumberArray , n) {
for (let i = 1; i < LastNumberArray + 1; i++) {
    if ( n === 3 && (i % n) == 0){
         arrDivThee.push(i);
    };
    if (n === 4 && (i % n) == 0){
        arrDivFour.push(i);
    } ;
    if (n === 10 && (i % n) === 1){
        // numberOne = i; 
        arrEndOne.push(i);
    } 
}};
   
    console.log(`all the numbers that are divisible by 3 from 1 to LastNumberArray(1000) are:
         ${newArrayFrom(1000, 3)} ${arrDivThee}`);
    console.log(`all the numbers that are divisible by 4 from 1 to LastNumberArray(1000) are:
        ${newArrayFrom(1000, 4)} ${arrDivFour}`);
    console.log(`the numbers that end with the digit 1 to LastNumberArray(1000) are:
        ${newArrayFrom(1000, 10)} ${arrEndOne}`);
    
// ===== clean arrays ====
let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, 
    "Greg", undefined, NaN, 1, 22];
 let arrString;
 let arrStrings = [];
 let arrNumbers = [];
 let arrNaN = [];
 for (i = 0; i < test.length; i++) {
    if( typeof test[i] === "string" ) {
        arrString = test[i];
        arrStrings.push(arrString);
    } else if ( typeof test[i] === "number") {
        arrString = test[i];
        arrNumbers.push(arrString);
    } else if (typeof test[i] !== "string" || typeof test[i] === "number"){
        arrString = test[i];
        arrNaN.push(arrString);
    }};   
 console.log(arrStrings);
 console.log(arrNumbers);
 console.log(arrNaN);

 

 




