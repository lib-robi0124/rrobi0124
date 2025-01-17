const title = document.querySelector("h1");
const fParagraph = document.querySelector("[name = 'Paragraph One']");
const secondParagraph = document.getElementsByTagName("p")[1];
const firstDiv = document.getElementById("first-div");
const secondDiv = document.querySelector(".second-div");
const thirdDiv = secondDiv.nextElementSibling;

console.log(title.innerText);
console.log(title.textContent);

title.firstChild.removeAttribute("hidden");
title.style.color = "darkred";

let h2 = document.createElement("h2");
h2.innerText = "H2 created using JS";
h2.style.color = "magenta";
firstDiv.append(h2);

let Paragraph = document.createElement("p");
Paragraph.innerText = "this is paragraph";
firstDiv.appendChild(Paragraph);

let thirdDivHtml = "";
thirdDivHtml += "<ul>";
for (let i = 0; i < 10; i++) {
    thirdDivHtml += `<li>item ${i + 1}</li>`
}
thirdDivHtml += "</ul>";
thirdDiv.innerHTML = thirdDivHtml;

