const apiUrl = "https://fakestoreapi.in/api/products/";

const elements = {
  productsBtn: document.getElementById("productsBtn"),
  categoryBtn: document.getElementById("category-btn"),
  cartBtn: document.getElementById("cartBtn"), // Fixed typo
  prevBtn: document.getElementById("prevBtn"),
  nextBtn: document.getElementById("nextBtn"),
};

async function fetchProducts(selectedCategory) {
  try {
    const response = await fetch(`${apiUrl}category?type=${selectedCategory}`);
    if (!response.ok) throw new Error("Failed to fetch products");
    const products = await response.json();
    console.log(products); // Display products or render them in the UI
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

// Add event listener to the category button
elements.categoryBtn.addEventListener("click", async () => {
  const selectedCategory = elements.categoryBtn.getAttribute("data-category"); 
  await fetchProducts(selectedCategory);
});
