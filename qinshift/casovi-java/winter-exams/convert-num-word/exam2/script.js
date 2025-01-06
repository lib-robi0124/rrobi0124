
$(document).ready(function() {
    let form = $("#form");
    let numLimit = 10000000000;
    let numText = "";
    let ones = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };
    let tens = {
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eigthteen",
        19: "nineteen",
    };
    let prefixes = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };
    let suffixes = {
        1: "",
        2: "thousand ",
        3: "million ",
        4: "billion ",
    };
    form.submit(function (e) {
        e.preventDefault();

        numText = "";
        let num = parseInt($("#numInput").val());
        if (isNaN(num)) {
            $("#changedNum").html("Please enter a valid number.");
            return;
        }
        let finalNumText = convertNum(num);

        $("#changedNum").html("Converted Number: " + finalNumText);
    });

    function convertNum(num) {
        let absNum = Math.abs(num);

        try {
            if (absNum >= numLimit) {
                throw `Number is too big. It must be below or equal to ${numLimit} (10 billion).`;
            }
        }
        catch(err) {
            alert(err);
            return "ERROR";
        }
      
        if (num < 0) {
            numText += "negative ";
        }

        if (absNum === 0) {
            return "zero";
        }

        if (absNum in ones) {
            numText += ones[absNum];
        } else if (absNum < 100) {
            numText += twoDigitLessConvert(absNum);
        } else {
            let numArray = splitNum(absNum);
            let count = numArray.length;

            for ( let i = 0; i < numArray.length; i++) {
                if (numArray[i][0] !== "000") {
                    if (numArray[i][0].length == 3) {
                        numText =+ threeDigitCinvert(parseInt(numArray[i]));
                        numText += " " + suffixes[count];
                    } else {
                        numText += twoDigitLessConvert(parseInt(numArray[i]));
                        numText += " " + suffixes[count];

                    }
                    count--;
                }
                else {
                    count--;
                }
            }
        }
        return numText;

    };
        function threeDigitCinvert(num) {
            let currentNumText = "";
            if (num == 0) {
                return "";
            }
            if (num < 100) {
                currentNumText += twoDigitLessConvert(num);
                return currentNumText;
            }
            currentNumText += ones[num.toString().charAt(0)];
            currentNumText += " hundred ";

            if (num.toString().substr(1) !== "00"){
                currentNumText += twoDigitLessConvert(parseInt(num.toString().substr(1)));
            }
            return currentNumText;
        }
        function twoDigitLessConvert(num){
            let currentNumText = "";

            if (num < 10) {
                return ones[num];
            }
            if (num in tens) {
                currentNumText += tens[num];
            } else {
                currentNumText += prefixes[num.toString().charAt(0)];

                if (num.toString().charAt(1) !== "0") {
                    currentNumText += "-" + ones[num.toString().charAt(1)];
                }
            }
            return currentNumText;
    }
    function splitNum(num) {
        let numArray = [];
        let numString = num.toString();
        let coiunt = 0;
        let tempArray = [];
        let singleDigit = numString.split("");
        let digits = singleDigits.length;
        for (let i = digits -1; i >= 0; i--) {
            tempArray[0] = singleDigits[i] + tempArray[0];
            count++;
            tempArray[0] = tempArray[0].replace("undefined", "");
            if (count % 3 == 0) {
                numArray.unshift(tempArray);
                tempArray = [];
            }
        }
        if (tempArray.length != 0) {
            numArray.unshift(tempArray);
        }
        return numArray;
    }
});