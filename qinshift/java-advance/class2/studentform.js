
let form = document.getElementById('addstudentform');
let content = document.getElementById('content');
let saveBtn = document.getElementById('saveStudent');

// construction function Student
function Student(firstName, lastName, age, email) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.email = email;
}

let database = [];
// this function only handles logging of students
// function logStudents() {
// 	for (let i = 0; i < database.length; i++) {
// 		console.log(`${i + 1}) ${database[i].firstName}`)
// 	}
// }

let action = { 
    complete: 'complete',
}
function createStudent(fname.value, lname.value, age.value, email.value) {
    const student = new Student(fname.value, lname.value, age.value, email.value)
    database.push(student);
    return student;
}

// this function only cares about resetting the form
function resetForm() {
	fname.value = '';
	lname.value = '';
	age.value = '';
	email.value = '';
}
// // Functions

saveButton.addEventListener('click', function () {
	// this function only handles the button click and object creation
	// we should not have log or reset functionality here to keep our code clean

	const student = new Student(fname.value, lname.value, age.value, email.value)

	database.push(student);

	logStudents();
	resetForm();
})
// function showTodos(element) {
//     let html = '<ol>';
//     for (let todo of todoInMemory.todos) {
//         let completeBtn = '';
//         if (!todo.isComplete) {
//             completeBtn = `<button type="button" name="${actions.complete}" value="${todo.id}">Complete</button>`;
//         }

//         let li = `
//             <li ${todo.isComplete ? 'style="background-color: yellow;"' : ''}>
//                 <span>${todo.title}</span>
//                 <span>${todo.description}</span>
//                 ${completeBtn}
//                 <button type="button" name="${actions.edit}" value="${todo.id}">Edit</button>
//                 <button type="button" name="${actions.remove}" value="${todo.id}">Remove</button>
//             </li>
//             `;
//         html += li;
//     }
//     html += '</ol>';
//     element.innerHTML = html;
// }