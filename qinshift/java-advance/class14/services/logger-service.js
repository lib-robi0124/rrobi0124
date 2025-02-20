

export function logInfo(message) {
    const dateTime = new Date(); // return exact date now
    console.log(`[INFO] [${dateTime.toLocaleString()}]: ${message}`);
    
}

export function logError(error) {
    const dateTime = new Date(); // return exact date now
    console.log(`[ERROR] [${dateTime.toLocaleString()}]: ${error}`);
}