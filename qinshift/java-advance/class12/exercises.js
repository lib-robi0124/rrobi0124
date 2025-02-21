//** class Academy */
class Academy {
    constructor(name, students = [], subjects = [], startDate, endDate) {
        this.name = name;
        this.students = students;
        this.subjects = subjects;
        this.startDate = startDate;
        this.endDate = endDate;
    }
    get numberOfClasses() {
        return this.subjects.length * 10;
    }

    printStudents() {
        console.log("Students in the academy:");
        this.students.forEach(student => {console.log(`${student.firstName} ${student.lastName}`);
        });
    }

    printSubjects() {
         console.log("Subjects in the academy:");
            this.subjects.forEach(subject => {console.log(`${subject.title} (${subject.isElective ? "Elective" : "Mandatory"})`);
            });
        }
    };


//** class Subject */
class Subject {
    constructor(title, isElective, academy) {
        this.title = title;
        this._numberOfClasses = 10; 
        this.isElective = isElective;
        this.academy = academy;
        this.students = [];
        
        if (academy) {
            academy.subjects.push(this);
    }
}
    get numberOfClasses() {
        return this._numberOfClasses;
    }

    overrideClasses(number) {
        if (number >= 3) {
            this._numberOfClasses = number;
        } else {
            console.error("Number of classes cannot be less than 3.");
        }
    }
  }

//** class Student */

class Student {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.completedSubjects = [];
        this.academy = null;
        this.currentSubject = null;
    }

    startAcademy(academy) {
        if (this.academy !== academy) {
            this.academy = academy;
            if (!academy.students.includes(this)) {
                academy.students.push(this);
            }
        }
    }

    startSubject(subject) {
        if (this.academy && this.academy.subjects.includes(subject)) {
            if (this.currentSubject) {
                this.completedSubjects.push(this.currentSubject);
            }
            this.currentSubject = subject;

            if (!subject.students.includes(this)) {
                subject.students.push(this);
            }
        } else {
            console.error("Error: Student must be part of an academy and the subject must exist in that academy.");
        }
    }
}

// Example usage:
const math = new Subject("Mathematics", false, null);
const physics = new Subject("Physics", true, null);

const academy = new Academy("Tech Academy", [], [math, physics], new Date(2023, 9, 1), new Date(2024, 6, 30));

const student1 = new Student("John", "Doe", 20);
const student2 = new Student("Jane", "Smith", 22);

student1.startAcademy(academy);
student1.startSubject(math);

student2.startAcademy(academy);
student2.startSubject(physics);

// Print academy students and subjects
academy.printStudents();
academy.printSubjects();

// Print student details
console.log(student1);
console.log(student2);

// Switch student1's subject
student1.startSubject(physics);
console.log(student1);