let btn = document.getElementById('generateButton');
let resetBtn = document.getElementById('reset');
btn.addEventListener('click', function () {

const fName = document.getElementById("fName").value;
const lName = document.getElementById("lName").value
const birthYear = parseInt(document.getElementById("birthYear").value);
const academy = document.getElementById("academy").value;
const grades = document.getElementById("grades").value;

function Student(fName, lName, birthYear, academy,grades) {
    this.fName = fName;
    this.lName = lName;
    this.birthYear = birthYear;
    this.academy = academy;
    this.grades = grades.split(',').map(grade => grade.trim()).map(Number);
    this.getAge = function () {
        return new Date().getFullYear() - this.birthYear;
    };
    this.getInfo = function () {
        return `This is student ${this.fName} ${this.lName} from the academy ${this.academy}!`;
    };
    this.getGradesAverage = function() {
        let sumGrades = 0;
        for (let i = 0; i < this.grades.length; i++) {
            sumGrades += this.grades[i];
        }
        return (sumGrades / this.grades.length).toFixed(2);
    }
   }

 let student = new Student(fName, lName, birthYear, academy, grades);

 // Add student to table
 const tableBody = document.querySelector('#students tbody');
 const row = document.createElement('tr');
 row.innerHTML = `
   <td>${student.fName}</td>
   <td>${student.lName}</td>
   <td>${student.getAge()}</td>
   <td>${student.getInfo()}</td>
   <td>${student.getGradesAverage()}</td>
 `;
 tableBody.appendChild(row);
});

// Reset inputs
resetBtn.addEventListener('click', function () {
 document.getElementById("fName").value = '';
 document.getElementById("lName").value = '';
 document.getElementById("birthYear").value = '';
 document.getElementById("academy").value = '';
 document.getElementById("grades").value = '';
});