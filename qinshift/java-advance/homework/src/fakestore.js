const BASE_API_URL = "https://fakestoreapi.com/products";
let currentPage = 1;
const fakestoreCategories = {
    electronics: "electronics",
    jewelery: "jewelery",
    menclothing: "mensclothing",
    womenclothing: "womenclothing",
    currentResource: null
}
const elements = {
    productsBtn: document.getElementById("productsBtn"),
    cartBtn: document.getElementById("cartBtn"),
    prevBtn: document.getElementById("prevBtn"),
    nextBtn: document.getElementById("nextBtn"),
    filterDiv: document.getElementById("filters"),
    categoryHeader: document.getElementById("category-title"),
    productsDiv: document.getElementById("show-products"),
}
async function getDataAsync(resource) {
    try {
        const url = `${BASE_API_URL}${resource}?page=${currentPage}`;
        const response = await fetch(url);
        if (!response.ok)
            throw new Error(`HTTP error! Status ${response.status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data: ", error);
        elements.resultDiv.innerHTML = `<p class="text-danger text-center">An error occurred. Please try again later.</p>`
    } 
}
async function handleDataAsync(resource) {
    const data = await getDataAsync(resource);
    if (resource === fakestoreCategories.electronics) {
        console.log(data);
    } else if (resource === swapiResource.starships) {
        renderShipsTable(data);
    }
    togglePaginationButtons(data.previous, data.next);
}