let firstDiv = document.getElementById("first");
let firstDivChild = firstDiv.firstElementChild;
firstDivChild.innerText = "Best web page!";
console.log(firstDivChild);
let paragraphs = document.getElementsByTagName('p');
paragraphs[0].innerHTML = "This is game, find me now";
paragraphs[1].innerHTML = "Copy paste is not working always";
console.log(paragraphs);
let lastDiv = document.getElementsByTagName('h1');
lastDiv[1].innerHTML = "I found you to be change it";
console.log(lastDiv);



        