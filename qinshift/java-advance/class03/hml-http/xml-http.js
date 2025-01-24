console.log("=== using XMLHTTPrequest");

let xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.chucknorris.io/jokes/random");

xhr.onload = function () {
    console.log(xhr.response);
    if (xhr.status >= 200 && xhr.status < 300) {
        console.log("the request successfull");
        console.log(xhr.response);
        let parsedResponse = JSON.parse(xhr.response);
        console.log(parsedResponse);
        //logic to display data
               
    } else {
        console.log("the response failed");
        console.log(xhr.response);
        console.log(xhr.responseText);
               
    }
}
xhr.send();
