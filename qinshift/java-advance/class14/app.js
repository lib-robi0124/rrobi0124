//** == export - import script == */
import { User } from "./models/user.js"
// import { logInfo, logError } from "./services/logger-service.js"
import * as loggerService from "./services/logger-service.js"
import userService from "./services/user-servis.js"

//** create users */

let john = new User("John", "john@mail.com", 39);
let bob = new User("Bob", "bob@mail.com", 23);

// console.log(john);
// console.log(bob);

try {
    loggerService.logInfo("Adding users started..");
    // logInfo("Adding users started..");
    // addUser(john);
    // addUser(bob);
    userService.addUser(john);
    userService.addUser(bob);
    userService.addUser(bob);


} catch (error) {
       loggerService. logError(error);
    // logError(error);
    
} finally {
    loggerService.logInfo("Adding user finished");
}

// const allUsers = getUsers();
const allUsers = userService.getUsers()
console.log("All Users", allUsers);
