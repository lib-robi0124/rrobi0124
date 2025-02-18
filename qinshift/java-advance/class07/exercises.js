fetch("https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/G2/Class07/students.json")
.then(response => response.json())
.then(students => {
    console.log(students);
// {
//     "id": 1,
//     "firstName": "Frasquito",
//     "lastName": "Koop",
//     "email": "fkoop0@ow.ly",
//     "gender": "Male",
//     "city": "Benzilan",
//     "averageGrade": 4,
//     "age": 33
//   },
        // All students with an average grade higher than 3
console.log(studentsWithAvgGrade3More = students.filter(s => s.averageGrade > 3));
        // All female student names with an average grade of 5
console.log(femaleStudentAvgGrade5 = students.filter(s => s.averageGrade === 5 && s.gender === "Female").map(s => `${s.firstName} ${s.lastName}`));
        // All male student full names who live in Skopje and are over 18 years old
console.log(maleStudentSkopje18Over = students.filter(s => s.gender === "Male" && s.age > 18).map(s => `${s.firstName} ${s.lastName}`));
        // The average grades of all female students over the age of 24
console.log(femaleStudentAge24Over = students
    .filter(s => s.gender === "Female" && s.age > 24)
    .map(s => s.averageGrade));
        // All male students with a name starting with B and average grade over 2
console.log(maleStudentsNameWithB = students
    .filter(s => s.gender === "Male" && s.firstName.startsWith("B") && s.averageGrade > 2));
        // Student emails of all female students with age between 20 and 30 years, ordered ascending
console.log(femaleStudentAge20To30 = students
    .filter(s => s.age > 20 && s.age < 30 && s.gender === "Female")
    .map(s => s.email)
    .sort());
        // Students full names of students above 40, ordered descending
console.log(students40OverSortD = students
    .filter(s => s.age > 40)
    .map(s => `${s.firstName} ${s.lastName}`)
    .sort((a, b) => b.localeCompare(a)));
        // Count of students using google mail
console.log(studentsWithGmail = students
    .filter(s => s.email.includes("@gmail") || s.email.includes("@google")).length);


})