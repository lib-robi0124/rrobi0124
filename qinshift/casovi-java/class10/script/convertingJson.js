let person = {
    firstName: "Martin",
    lastName: "Panovski",
    age: 31,
    isEmployeed: true,
    proffesion: "Software developer",
    programingLanguages: ['C#', "JS"]
}

// send data to server
// pack data in JSON format
// SEREALIZATION - proces to packing

let JSONContent = JSON.stringify(person);
console.log(JSONContent);


// a respons from the server is in json format
// convert json to object process is
// DESERIALIZATION

let jsObject = JSON.parse(JSONContent);
console.log(jsObject);

document.getElementById('firstName').innerText = jsObject.firstName;