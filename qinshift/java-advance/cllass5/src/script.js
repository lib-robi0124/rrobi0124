// 1) DECLARE/INITIALIZE GLOBAL VARIABLES AND CONSTANTS
const BASE_API_URL = "https://swapi.dev/api/";

const swapiResource = {
  people: "people",
  starships: "starships",
};

const tableHeaders = {
    people: ["Name", "Height","Mass", "Gender", "Birth Year", "Appearances"],
    starships: ["Name", "Model","Manufacturer", "Cost", "People Capacity", "Class"],
}
// 2) SELECTING ELEMENTS
// const peopleBtn = document.getElementById("peopleBtn");
// const shipsBtn = document.getElementById("shipsBtn");
// const loader = document.getElementById("loader");
// const resultDiv = document.getElementById("result");
// const prevBtn = document.getElementById("prevBtn");
// const nextBtn = document.getElementById("nextBtn");

// create object
const elements = {
  peopleBtn: document.getElementById("peopleBtn"),
  shipsBtn: document.getElementById("shipsBtn"),
  loader: document.getElementById("loader"),
  resultDiv: document.getElementById("result"),
  prevBtn: document.getElementById("prevBtn"),
  nextBtn: document.getElementById("nextBtn"),
};

// 3) FUNCTION DEFINITIONS

// Constructor Functions
function Person(name, height, mass, gender, birthYear, appearances) {
    this.name = name;
    this.height = height;
    this.mass = mass;
    this.gender = gender;
    this.birthYear = birthYear;
    this.appearances = appearances;
}

function Starship(name, model, manufacturer, cost, peopleCapacity, shipClass) {
    this.name = name;
    this.model = model;
    this.manufacturer = manufacturer;
    this.cost = cost;
    this.peopleCapacity = peopleCapacity;
    this.shipClass = shipClass;
}

async function getDataAsync(resource) {
  try {
    const url = `${BASE_API_URL}${resource}?page=1`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! Status ${response.status}`);
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error("error fetching data: ", error);
    elements.resultDiv.innerHTML = `<p class="text-danger text-center">An error occured. Please try again later.</p>`;
  }
}

function getTableHtml(headers, dataRows) {
    return `
        <table class="table table-dark table-striped">
            <thead>
                <tr>
                    ${headers}
                </tr>
            </thead>
            <tbody>
                ${dataRows}
            </tbody>
        </table>
    `;
}

function renderPeopleTable(data) {
    // 1) map to Person objects
    const people = data.results.map(p => new Person(p.name, p.height, p.mass, p.gender, p.birth_year, p.films.length));
    console.log(people);

    // generate headers html
// let headersHTML = "";
// headersHTML += "<th>Name</th>"
// headersHTML += "<th>Heigth</th>"
// headersHTML += "<th>Mass</th>"
// headersHTML += "<th>Gender</th>"
// headersHTML += "<th>Birth Year</th>"
// headersHTML += "<th>Appearances</th>"
  // let headersHtml = "";
    // tableHeaders.people.forEach(header => {
    //     headersHtml += `<th>${header}</th>`
    // })

//     console.log(headersHTML);
//      let headersHTML = tableHeaders.people.map(header => {
//         headersHTML += `<th>${header}</th>`).join("")}
    

   // 2) generate headers html
  
   let headersHtml = tableHeaders.people.map(header => `<th>${header}</th>`).join("");

   // 3) generate data rows
   let rowsDataHtml = people.map(person => `
       <tr>
           <td>${person.name}</td>
           <td>${person.height}</td>
           <td>${person.mass}</td>
           <td>${person.gender}</td>
           <td>${person.birthYear}</td>
           <td>${person.appearances}</td>
       </tr>
   `).join("");

   elements.resultDiv.innerHTML = getTableHtml(headersHtml, rowsDataHtml);
}

function renderStarshipsTable(data){
    const shios = data.results.map(ship => new Starships 

    )
}
 

// 4) HANDLING EVENTS
elements.peopleBtn.addEventListener("click", async () => {
  // const people = getDataAsync("people")
  const people = await getDataAsync(swapiResource.people);
//   console.log(people);
  renderPeopleTable(people);
});

elements.shipsBtn.addEventListener("click", async () => {
  // const ships = getDataAsync("starships")
  const ships = await getDataAsync(swapiResource.starships);
//   console.log(ships);
  
});
