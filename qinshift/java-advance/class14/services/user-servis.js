import { logInfo } from "./logger-service.js"
import { User } from "../models/user.js"

const users = [];

function addUser(user) {
    if(! (user instanceof User)) {
        throw new Error("Invalid input");
    }
    if(users.some(u => u.name === user.name)) {
        throw new Error(`user with name ${user.name} already exist`);
    }
    users.push(user);
    logInfo(`User ${user.name} added.`)
}
function getUsers(){
    return users;
}

export default {
    addUser, 
    getUsers,
    // users array
}