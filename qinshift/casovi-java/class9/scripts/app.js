// osnoven znak za JQuery e $()

$(document).ready(function(){

// selectors in JQuery

let allElements = $('*');
let mainTitleHeader = $('#mainTitle'); // select by ID
let innerWrapperElements = $('.innerWrapper'); // select by class

console.log(allElements);
// console.log(mainTitleHeader);
console.log(mainTitleHeader[0].innerText); // go zemame samo text

console.log(innerWrapperElements);

let elementsByMultipleSelectors = $('.innerWrapper, .wrapper, #mainTitle');
console.log(elementsByMultipleSelectors);

let paragraphs = $('p');
console.log(paragraphs);
let firstParagraph = $('p:first');
console.log(firstParagraph);
let lastParagraph = $('p:last');
console.log(lastParagraph);

let firstChildren = $('h3:first-child');
console.log(firstChildren);
let lastChildren = $('p:last-child');
console.log(lastChildren);

let secondChildren = $('p:nth-child(2)')
console.log(secondChildren);

// DOM vs JQuery
console.log('=======DOM vs JQuery========');

let firstParagraphDOM = paragraphs[0];
console.log(firstParagraphDOM);
console.log(firstParagraphDOM.innerText);
console.log(firstParagraphDOM.innerHTML);

let firstParagraphJQuery = paragraphs.first();
console.log(firstParagraphJQuery);
console.log(firstParagraphJQuery.text());
console.log(firstParagraphJQuery.html());

paragraphs.last().text('Hello from Qinshift!!')

let secondParagraph = paragraphs.get(1);
console.log(secondParagraph);

let prevSibling = paragraphs.last().prev().text();
console.log(prevSibling);

let inputs = $("input");
console.log(inputs);

let inputText = $('input[value="Cool"]');
console.log(inputText);
console.log(inputText.val());

inputText.val('This is new Cool val');
inputText.hide();

paragraphs.last().css('background-color', 'red');
paragraphs.last().css('color', 'yellow');

paragraphs.last().after('<h1>Wooow! After</h1>');
paragraphs.last().before('<h2>Wooow! Before</h2>');







});
