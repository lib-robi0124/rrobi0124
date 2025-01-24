document.querySelector("button").addEventListener("click", function() {
    console.log("button is cliked");
    
}
)

// https://jsonplaceholder.typicode.com/posts
const postsUrl = "https://jsonplaceholder.typicode.com/posts";
fetch(postsUrl)
.then(function (response) {
    const parsedData = response.json(); //parsed from json to object
    return parsedData;
})
.then(function (data) {
    // console.table(data);
    
})
.catch(function(error) {
    console.error("ERROR occured", error)
})

let greet = function (name) {
    console.log(`Hello ${name} !`);
    
}
console.log(typeof greet);

