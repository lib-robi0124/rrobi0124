let arrayNumbers = [];
let sumArrayItems = 0;
for(i=0; i<=arrayNumbers.length; i++){
    aNumber = parseInt(prompt("Please enter a nymber in array"));
    if(isNaN(aNumber)){
        alert("Please enter valid number");
    } else {
        
    arrayNumbers.push(aNumber);
    sumArrayItems = arrayNumbers[i] + sumArrayItems
    }
    }
    
        console.log(arrayNumbers);
        console.log(`Sum of items in array is ${sumArrayItems}`);












