function sayHello() {
alert("Hello there!!");

}
function greet(message){
    alert(message);
}
let increaseBtn = document.getElementById('increaseBtn');
let decreaseBtn = document.getElementById('decreaseBtn');
let resetBtn = document.getElementById('resetBtn');
let resultParagraph = document.getElementById('result');

let count = 0;
increaseBtn.onclick = function(){
    count++;
    resultParagraph.innerText = count;
}
function decrease(){
    count--;
    resultParagraph.innerText = count;
}
decreaseBtn.onclick = decrease;

function resetof(){
    count = 0;
    resultParagraph.innerText = 'Reset!';
}
resetBtn.onclick = resetof;

let fNameInput = document.getElementById('fName');
let lNameInput = document.getElementById('lName');
let btnsave = document.getElementById('btnsave');
let saveUserParagraph = document.getElementById('saveresult');

btnsave.addEventListener('click', function(){
    let fNameValue = fNameInput.value;
    let lNameValue = lNameInput.value;

    saveUserParagraph.innerText = `${fNameValue} ${lNameValue} saved to database!`;
    fNameInput.value = '';
    lNameInput.value = '';
})

let btnName = document.getElementById('btnName');
btnName.addEventListener('click', function(){
    alert('Hello Robert');
})


 

