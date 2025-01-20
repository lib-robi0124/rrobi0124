let btn = document.getElementById('generateButton');
btn.addEventListener('click', function () {
  const color = document.getElementById('colorInput').value;
  const fontSize = document.getElementById('fontSize').value + 'px';
  const itemsInput = document.getElementById('items').value;

  let ul = document.getElementById('listUl');
      ul.innerHTML = ''; // Clear the list before adding new items
      ul.style.color = color;
      ul.style.fontSize = fontSize;

      const items = itemsInput.split(',');
      for (let i = 0; i < items.length; i++) {
        const li = document.createElement('li');
        li.textContent = items[i].trim(); // Remove extra spaces
        ul.appendChild(li);
      }

    let reset = document.getElementById("reset");
    reset.addEventListener("click", function () {
      document.getElementById("colorInput").value = "#0000000";
      document.getElementById("fontSize").value = "";
      document.getElementById("items").value = "";
    });

    });

    let ul = document.getElementById('generatedList');
    if (!ul) {
        ul = document.createElement('ul');
        ul.id = 'generatedList';
        for (let i = 0; i < items.length; i++){
            const li = document.createElement('li');
            ul.style.color = color;
            ul.style.fontSize = fontSize;
             li.textContent = items[i];
             ul.appendChild(li);
        // Add the list to the container if it's new
        const listContainer = document.getElementById('listContainer');
        listContainer.appendChild(ul);
    } else {
   
    // Add new items to the beginning of the list
    for (let i = 0; i < items.length; i++){
        const li = document.createElement('li');
        ul.style.color = color;
        ul.style.fontSize = fontSize;
         li.textContent = items[i];
         ul.firstChild(li);
             };
      
     } }
});