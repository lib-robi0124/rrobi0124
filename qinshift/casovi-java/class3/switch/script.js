let number = prompt("please enter a number");
let parsedNumber = parseInt(number);

if(!isNaN(parsedNumber))
switch(parsedNumber) {
    case 1:
    alert("Monday")
        break;
    case 2:
   console.log("Tuesday");
    break;
    case 3:
console.log("Wenisday");
    break;
    case 4:
        console.log("Thursday");
         break;
        case 5:
console.log("friday");
        break;
        case 6:
            console.log("saturday");
            break; 
case 7:
    console.log("Sunday");
    break;
    default:
        alert("not such a day");
    
}

switch(parsedNumber) {
    case 1:
    case 2:
        case 3:
            case 4:
    case 5:
        alert("working day");
        break;
        case 6:
            case 7:
                alert("weekend");
                break;
                default:
                    alert("not such a day");
}