///*** desctructuring */

let userObj = {
    "id": 1,
    "firstName": "Emily",
    "lastName": "Johnson",
    "maidenName": "Smith",
    "age": 28,
    "gender": "female",
    "email": "emily.johnson@x.dummyjson.com",
    "phone": "+81 965-431-3024",
    "username": "emilys",
    "password": "emilyspass",
    "birthDate": "1996-5-30",
    "image": "https://dummyjson.com/icon/emilys/128",
    "bloodGroup": "O-",
    "height": 193.24,
    "weight": 63.16,
    "eyeColor": "Green",
    "hair": {
      "color": "Brown",
      "type": "Curly"
    },
    "ip": "42.48.100.32",
    "address": {
      "address": "626 Main Street",
      "city": "Phoenix",
      "state": "Mississippi",
      "stateCode": "MS",
      "postalCode": "29112",
      "coordinates": {
        "lat": -77.16213,
        "lng": -92.084824
      },
      "country": "United States"
    },
  }

  //** take id, firstName lastName */

//   const id = userObj.id;
//   const firstName = userObj.firstName;
//   const lastName = userObj.lastName;
//   console.log(id, firstName, lastName);

const { id, firstName, lastName } = userObj;
  console.log(id, firstName, lastName);

  //** take id, firstName lastName age*/
const { userFirstName, userLastName, age} = userObj
console.log(userFirstName, userLastName, age);

//** address latitude and longtitude */

let latitude = userObj.address.lat;
let longitude = userObj.address.lng;
console.log(latitude, longitude);

//** with destructuring */

// const { lng, lat } = userObj.address.coordinates;
// console.log(lat, lng);

const { city, coordinates: { lat, lng} } = userObj.address;
console.log(city, lat, lng);

function getUserInfo(user) {
    return `${user.firstName} ${user.lastName}`;

}
console.log((getUserInfo(userObj)));

function getUserInfoDest({ firstName, lastName, age}){
    return `${firstName} ${lastName} ${age}`;
}

console.log(getUserInfoDest(userObj));

const testArray = [ 100, 300, 5_000, 400, 10_000];
let firstNumber = testArray[0];
let secoundNumber = testArray[1];
let thirdNumber = testArray[2];
console.log(firstNumber, secoundNumber, thirdNumber);

let [itemOne, itemTwo, itemThree, itemFive] = testArray;
console.log(itemOne, itemTwo, itemThree, itemFive);

let [firstDiv, , thirdDiv] = document.getElementsByClassName("array-demo");
console.log(firstDiv);
console.log(thirdDiv);


const testArrayTwo = ["First string", "Secound dtring"];
let [firstString, secoundString, thirdString = "Third String"] = testArrayTwo
console.log(firstString, secoundString, thirdString);

// let a = 10;
// let b = 20;
let a = 10, b = 20;
// let temp = a;
// a = b;
// b = temp;
// console.log(a, b);

[a, b] = [b, a];
console.log(a, b);

//*** spread operator */

const numbers = [-5, 10, 30, 123, 10_000];
// console.log(Math.max(numbers));
console.log(Math.max(-5, 10, 30, 123, 10_000));
console.log(Math.max(...numbers));

console.log(numbers);
console.log(...numbers);

const dogs = ["bax", "chapo", "sarko"];
const cats = ["zuza", "mici"];

const allPets = [...dogs, ...cats];
console.log(allPets);


const dogsCopy = [...dogs];


let dog = {
    name: "Aks",
    breed: "pug",
}

let description = {
    group: "Toy",
    color: "Appricat Fawn",
    origin: "china",
}
let owner = {
    firstName: "Bob",
}

const allDogsInfo = { ...dog, ...description, ...owner, isHappy: true }
console.log(allDogsInfo);

const word = "hello";
const letters = [...word];
console.log(letters);


const students = ["bob", "jill", "john", "rob", "jo"];

const [ bobName, jillName, ...restStudents ] = students;
console.log(bobName, jillName);
console.log(restStudents);

// function sum(num1, num2, num3) {
//     return num1 + num2 + num3;
// }

// console.log(sum(1, 2, 3, 4));

function sum(...numbers) {
    let result = 0;
    for (const number of numbers){
        result += number;
    }
    return result;
}
console.log(sum(10, 20, 30, 40, 50));


  