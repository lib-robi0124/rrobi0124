        // let suma = 0;
        let count = 0;

        // Function to add expense
        function collect() {
            ++count;
            let description = document.getElementById("description").value;
            let amount = document.getElementById("amount").value;

            let option = document.getElementsByTagName("option");
            let optionValue;
            for (let i = 0; i < option.length; i++) {
                if (option[i].selected) {
                    optionValue = option[i].value;
                }
            }

            if (description != "") {
                let row = document.createElement("tr");
                let t = document.getElementById("addTo");
                t.appendChild(row);

                row.innerHTML = "<td class='opis'>" + description + "</td>" +
                                "<td class='zbir'>" + amount + "</td>" +
                                "<td>" + optionValue + "</td>" +
                                "<td><button onclick='confirm1(this)'>Confirm</button>
                                <button onclick='revert1(this)'>Remove</button></td>";

                update_suma();
            }
        }

        // Function to update total sum
        function update_suma() {
            let kelii_cena = document.getElementsByClassName("zbir");
            let suma = 0;
            for (let i = 0; i < kelii_cena.length; i++) {
                suma += parseInt(kelii_cena[i].innerHTML);
            }
            let pole_suma = document.getElementById("middle");
            pole_suma.innerHTML = suma;
        }

        // Function to confirm an expense (change row color and disable buttons)
        function confirm1(e) {
            e.parentNode.parentNode.style.backgroundColor = "lightgreen";
            e.disabled = true;
            e.nextElementSibling.disabled = true;
        }

        // Function to revert an expense (move to history list and remove from table)
        function revert1(e) {
            let row = e.parentNode.parentNode;
            let napravi = document.createElement("li");
            let listRem1 = document.getElementById("listRem");
            let opisot = row.children[0].textContent;
            napravi.innerHTML = row.children[1].innerHTML + "" + opisot;
            listRem1.appendChild(napravi);
            row.parentNode.removeChild(row);
            update_suma();
        }
