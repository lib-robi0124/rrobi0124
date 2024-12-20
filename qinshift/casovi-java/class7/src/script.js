let firstHeader = document.getElementById("myTitle");
console.log(firstHeader.textContent);
console.log(firstHeader.innerText);

// firstHeader.innerText = "";

let secondDiv = document.querySelector(".myDiv");
secondDiv.innerHTML += `
<ol>
    <li>Intro to web dev</li>
    <li>Basic Web Development</li>
    <li>Basic JS</li>
</ol>
`

let secondHeader = document.getElementById("secondHeader");


setTimeout(function(){
    secondHeader.innerText = "no not a cool page!";
    setTimeout(function(){
        secondHeader.innerText = "I am joking it is cool page!";
    },1000)
},2000);