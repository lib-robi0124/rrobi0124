let years = parseInt(prompt("Please enter years, How old is your dog?"));
function dogyears(years){
    result = years * 7;
    return result;
}
alert(`Your dog has ${dogyears(years)} dog years`);