console.log("=== using JQuery ajax ===");
$(document).ready(function(){
const getJokeBtn = $("#get-joke-btn");
const jokesContainer = $("#jokes-container")

getJokeBtn.click(function (){ 
    $.ajax({
        url: "https://api.chucknorris.io/jokes/random",
        metod: "GET",
        dataType: "json",
        success: function(response) {
            console.log(response);
            jokesContainer.html(`
                <p>${response.value}</p>
                <img scr="${response.icon_url}" style="width: 50px; height: 50px; alt="Chuck Norris Icon">`)

        },
        error: function (error) {
console.log("error msg");

        }
    })
})
})