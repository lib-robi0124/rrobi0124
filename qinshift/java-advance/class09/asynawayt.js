
function getDataPromise() {
    return new Promise ((resolve, reject) => {
        // throw new Error("some error")
        let response = {
            message: "data fetch successfully",
            statusCode: 200
        }
        if(response.statusCode >= 400) {
            reject("fetchind data failed")
        }
        resolve(response)
    })
}

getDataPromise()
.then(data => console.log("response object:", data))
.catch(error => console.log("error", error))


async function getData() {
         let response = {
            message: "data fetch successfully",
            statusCode: 200
        }
        // setTimeout(() => {
        //     console.log("fetching data..")
            
        // }, 3000)
        return response; 
}

async function processAsyncTask() {
    // debugger;
    console.log("fetching data started");
    
    let data = await getData();
    console.log("fetching data finished");
    
    console.log("here is the data", data);
    
}

processAsyncTask()

let apiUrl = "https://fakestoreapi.com/products/1";

// fetch(apiUrl)
// .then(response => response.json())
// .then(product => console.log(product))
// .catch(error => console.log("error in product", error))
// .finally(() => console.log(`all completed at ${new Date().toLocaleTimeString()}`));

let fetchProduct = async () => {
    try {
        let response = await fetch(apiUrl);
        let product = await response.json();
        // console.log(product);
        return product;
    } catch (error) {
        console.log("error occured", error);
        
    }
    

}

(async () => {
    let product = await fetchProduct()
// console.log(product);

})()

let getJokeAsync = async () => "nesto joke";

document.querySelector("button").addEventListener("click", async() => {
    let product = await fetchProduct()
    console.log(product);
    let joke = await getJokeAsync();
    console.log(joke);
    
})

console.log("==END of script");
