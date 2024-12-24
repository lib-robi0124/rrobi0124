let fNameInput = document.getElementById('fName');
let lNameInput = document.getElementById('lName');
let ageInput = document.getElementById('age');
let btnsave = document.getElementById('btnsave');
let saveUserParagraph = document.getElementById('saveresult');
let students = [];
function Student(first, last, age){
  this.firstName = first;
  this.lastName = last;
  this.age = age;
}


btnsave.addEventListener('click', function(){
    let fNameValue = fNameInput.value;
    let lNameValue = lNameInput.value;
    let ageInput = ageInput.value;

    saveUserParagraph.innerText = `${fNameValue} ${lNameValue} ${ageInput} saved to database!`;
    fNameInput.value = '';
    lNameInput.value = '';
    ageInput.value = '';
})
/*

let studentForm = document.getElementById("studentForm");
let result = document.getElementById("result1");

studentForm.getElementsByTagName("button")[0].addEventListener("click", function(){
  let first = studentForm.children[0].value;
  let last = studentForm.children[1].value;
  let age = studentForm.children[2].value;
  let newStudent = new Student(first, last, age);
  students.push(newStudent);
  showStudents(students, result.getElementsByTagName("ul")[0]);
  studentForm.children[0].value = "";
  studentForm.children[1].value = "";
  studentForm.children[2].value = "";
});
*/