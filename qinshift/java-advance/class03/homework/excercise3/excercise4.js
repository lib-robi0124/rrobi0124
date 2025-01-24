const cardsUrl = "https://dummyjson.com/products/?limit=10";
const getCardsBtn = document.getElementById("get-cards-btn");
const cardsContainer = document.getElementById("cars-container")

function Cards (title, image, descript){
    this.title = title;
    this.image = image;
    this.decsript = descript
}

getCardsBtn.addEventListener("click" , function () {
    fetch(cardsUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (cardsData) {
        console.log(cardsData);
        for (let i = 0; i < cardsData.products.length; i++) {
            const title = cardsData.products[i].title;
            const description = cardsData.products[i].description; // Corrected spelling
            const image = cardsData.products[i].thumbnail; // Changed to a single thumbnail for simplicity
            const productCard = new Cards(title, image, description);
            sendToPage(productCard);
        }
       
    })
    .catch(function (error) {
        console.log("ERROR: ", error);
    })
})

function sendToPage(productCard) {
    const tableBody = document.querySelector('#cards tbody');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${productCard.title}</td>
        <td>${productCard.description}</td>
        <td><img src="${productCard.image}" alt="${productCard.title}" style="width: 100px;"></td>
    `;
    tableBody.appendChild(row);
}
    
   

