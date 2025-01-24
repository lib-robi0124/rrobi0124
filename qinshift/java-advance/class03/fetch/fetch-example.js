console.log(" === fetch ===");


// == single joke example ==
//joke api: https://v2.jokeapi.dev/joke/Programming?type=single

const jokeApiUrl = "https://v2.jokeapi.dev/joke/Programming?type=single";
const getJokeBtn = document.querySelector("#get-joke-btn");
const jokeParagraph = document.querySelector("#joke-paragraph");

getJokeBtn.addEventListener("click", function () {
    fetch(jokeApiUrl)
    .then(function (response) {
        console.log(response);
        const parsedResponse = response.json();
        return parsedResponse;
    })
    .then(function(jokeData){
        console.log(jokeData);
        jokeParagraph.textContent = jokeData.joke;

    })
    .catch(function (error) {
        console.log("ERROR: ", error);
        
    })
})

// === multiple jokes ==
const getJokesBtn = document.getElementById("get-jokes-btn");
const jokesAmountInput = document.getElementById("jokes-amount");
const jokesContainer = document.getElementById("jokes-container");

function generateJokesList(jokesArray) {
    jokesContainer.innerHTML = "";
    const ol = document.createElement("ol");
    for (const item of jokesArray) {
        const li = document.createElement("li");
        li.textContent = item.joke;
        ol.appendChild(li);
    }
    jokesContainer.appendChild(ol);
}

function getJokes(url) {
    fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (jokesData) {
        console.log(jokesData);
        generateJokesList(jokesData.jokes);
       
    })
    .catch(function (error) {
        console.log("ERROR: ", error);
    })
}

getJokesBtn.addEventListener("click" , function () {
    const amount = +jokesAmountInput.value;
    const url = `${jokeApiUrl}&amount=${amount}`
    getJokes(url);
    
})