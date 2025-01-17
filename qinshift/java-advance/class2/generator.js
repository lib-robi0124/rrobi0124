document.getElementById('generateButton').addEventListener('click', function() {
    // Get input values
    const color = document.getElementById('colorInput').value;
    const fontSize = document.getElementById('fontSize').value;
    const text = document.getElementById('text').value;

    // Create new h1 element
    const h1 = document.createElement('h1');
    h1.textContent = text;
    h1.style.color = color;
    h1.style.fontSize = fontSize;

    // Append to output div
    const output = document.getElementById('output');
    output.innerHTML = ''; // Clear previous output
    output.appendChild(h1);
});