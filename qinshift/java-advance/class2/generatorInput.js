let btn = document.getElementById('generateButton');
btn.addEventListener('click', function () {
  const color = document.getElementById('colorInput').value;
  const fontSize = document.getElementById('fontSize').value + 'px';
  const itemsInput = document.getElementById('items').value;

  let ul = document.getElementById('listUl');
    //   ul.innerHTML = ''; // Clear the list before adding new items
      

      const items = itemsInput.split(',');
      for (let i = 0; i < items.length; i++) {
        const li = document.createElement('li');
        li.style.color = color;
        li.style.fontSize = fontSize;
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