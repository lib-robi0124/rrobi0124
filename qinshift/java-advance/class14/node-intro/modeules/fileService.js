
const { log } = require("console");
const fs = require("fs");
const fileName = "test.txt"


module.exports = {
    addText: function(text){
try {
fs.writeFileSync(fileName, text)
console.log("the file add text");

}catch (error) {
console.error("error file", err)
}
    }
    appendText: function (text) {
        try {
            fs.appendFileSync(fileName, text);
            console.log("text appended");
            
        } catch (error) {

        }

        
    }
}


