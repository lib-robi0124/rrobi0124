const generateButton = document.getElementById('generateButton');
const textInput = document.getElementById('textInput');
const colorInput = document.getElementById('colorInput');
const outputContainer = document.getElementById('headerContainer');

generateButton.addEventListener("click", function () {
    let textValue = textInput.value;
    let colorValue = colorInput.value;

    if (textValue.trim() === "") {
      const newHeader3 = document.createElement('h3');
      newHeader3.textContent = "Please enter some text.";
      outputContainer.innerHTML = ''; // Clear previous content if any
      outputContainer.appendChild(newHeader3);
      return;
    }

    const newHeader = document.createElement('h1');
    newHeader.textContent = textValue;
    newHeader.style.color = colorValue;
    outputContainer.innerHTML = ''; // Clear previous header if any
    outputContainer.appendChild(newHeader);
});