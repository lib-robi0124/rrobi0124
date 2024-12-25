$(document).ready(function(){
    let outBtn = $('input[type="button"]');

outBtn.on('click', function(){
    alert('Button was clicked!');
});

function saySomenthing(){
console.log('Aaaaa, you want to click me?11');

}
outBtn.on('mouseover', saySomenthing);

outBtn.click(function(){

    let paragraphs = $('p');
   // paragraphs.toggle(); // hide & show
   paragraphs.css('visibility', 'hidden');
});



})