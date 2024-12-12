//let arrayStory = ["Robert", "smile", "football"];

  //  alert(`${arrayStory[0]} is ${arrayStory[1]} and happy on ${arrayStory[2]}`);
  let sumArray = 0;
  let arrayNumbers = []
  for(let i = 0; i < 5; i++){
  let addToArrayNumbers = parseInt(prompt("Enter a number:"));
  arrayNumbers.push(addToArrayNumbers);
  }
for(let i of arrayNumbers){
    let sumArray = sumArray + arrayNumbers(i);
  
}
alert(`sum of your array numbers is ${sumArray}`);



