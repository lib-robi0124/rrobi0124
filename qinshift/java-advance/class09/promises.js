let apiUrl = "https://fakestoreapi.com/products/1";

// fetch(apiUrl)
// .then(response => response.json())
// .then(product => console.log(product))
// .catch(error => console.log("error in product", error))
// .finally(() => console.log(`all completed at ${new Date().toLocaleTimeString()}`));


function simplePromise() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 2000)
    })
    return promise;
}
simplePromise()
.then(() => console.log("the promise is fulfilled!"))
.catch(() => console.log("the promise is rejected"))
.finally(() => console.log("this is exec anyway"));

function simulateAyncTask(success) {
    return new Promise((resolve, reject) => {
        console.log("operation started")
        setTimeout(() => {
            if(success) {
                // resolve();
                resolve("task completed OK");

            } else {
                reject("task failed");
            }
        }, 4000);
    })
}
// simulateAyncTask(true)
// .then(message => console.log(message))
// .catch(error => console.log(error));

// chain promises

function step1() {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log("step 1 completed");
            resolve();
                }, 3000 );
    })
   
}

function step2() {
    return new Promise((resolve, reject) => {
    setTimeout(() =>{
console.log("step 2 completed");
resolve();
    }, 2000 );
})
}

function step3() {
    return new Promise((resolve, reject) => {
    setTimeout(() =>{
console.log("step 3 completed");
resolve();
    }, 1000 );
})}

function step4() {
    return new Promise((resolve, reject) => {
 resolve("final step completed");
    });
}


step1()
.then(() => step2())
.then(() => step3())
.then(() => step4())
.then(message => console.log(message))
.catch((error) => console.log(error))
.finally(() => console.log(`all completed at ${new Date().toLocaleTimeString()}`));


// promise all

function taskA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("task A completed")
        }, 5555)
    })
}

function taskB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("task B completed")
        }, 3333)
    })
}

function taskC() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("task C completed")
        }, 2222)
    })
}
let taskPromise = taskC();
console.log(taskPromise);



Promise.all([taskA(), taskPromise, taskB()])
.then(resultArray => {
console.log("all tasks completed")
console.log(resultArray)
})
.catch(error => console.log("error", error))

