// variabli
const saveBtn = document.getElementById("addStudent");
const resetBt = document.getElementById("resetData");
const showBtn = document.getElementById("showData");

const fName = document.getElementById("fName").value;
const lName = document.getElementById("lName").value;
const age = parseInt(document.getElementById("age").value);
const eMail = document.getElementById("eMail").value;

const database = [];

function Student(fName, lName, age, email) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.eMail = eMail;
}

saveBtn.addEventListener("click", function () {
    const student = new Student(fName, lName, age, eMail);
    database.push(student);
    }
)