let btn = document.getElementById("save");

function Phonebook(fname, lname, phone) {
    this.name = `${fname} ${lname}`;
    this.phone = phone;
}

let numbers = [];

if (btn) {
    btn.addEventListener("click", function () {
        let firstName = document.getElementById("firstName").value;
        if (!firstName.trim()) {
            return alert("Please enter a valid first name");
        }

        let lastName = document.getElementById("lastName").value;
        if (!lastName.trim()) {
            return alert("Please enter a valid last name");
        }

        let phoneNumber = document.getElementById("phoneNumber").value;
        let phonePattern = /^\d+$/;
        if (!phonePattern.test(phoneNumber)) {
            return alert("Please enter a valid phone number (digits only)");
        }

        let user = new Phonebook(firstName, lastName, phoneNumber);
        numbers.push(user);
        updateTable();
    });
}

function updateTable() {
    let table = document.getElementById("phoneBook");
    table.lastElementChild.innerHTML = ""; // Clear table
    for (let item of numbers) {
        let row = document.createElement("tr");
        let colName = document.createElement("td");
        let colPhone = document.createElement("td");
        colName.innerText = item.name;
        colPhone.innerText = item.phone;
        row.appendChild(colName);
        row.appendChild(colPhone);
        table.lastElementChild.appendChild(row);
    }
}
