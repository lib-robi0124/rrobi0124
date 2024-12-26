 /*let table = document.createElement('table');
for (let i = 1; i < 4; i++) {
  let tr = document.createElement('tr');

  let td1 = document.createElement('td');
  let td2 = document.createElement('td');

  let text1 = document.createTextNode('Text1');
  let text2 = document.createTextNode('Text2');

  td1.appendChild(text1);
  td2.appendChild(text2);
  tr.appendChild(td1);
  tr.appendChild(td2);

  table.appendChild(tr);
}
document.body.appendChild(table);*/

/*let tablearea = document.getElementById('tablearea');
    table = document.createElement('table');

for (let i = 1; i < 4; i++) {
    let tr = document.createElement('tr');

    tr.appendChild( document.createElement('td') );
    tr.appendChild( document.createElement('td') );

    tr.cells[0].appendChild( document.createTextNode('Text1') );
    tr.cells[1].appendChild( document.createTextNode('Text2') );

    table.appendChild(tr);
}

tablearea.appendChild(table);*/

/*function populateTable(table, rows, cells, content) {
    if (!table) table = document.createElement('table');
    for (let i = 0; i < rows; ++i) {
        let row = document.createElement('tr');
        for (let j = 0; j < cells; ++j) {
            row.appendChild(document.createElement('td'));
            row.cells[j].appendChild(document.createTextNode(content + (j + 1)));
        }
        table.appendChild(row);
    }
    return table;
}
document.getElementById('tablearea')
        .appendChild( populateTable(null, 3, 2, "Text") );*/
function createTable()
{
rn = prompt("Input number of rows", 1);
cn = prompt("Input number of columns",1);
if(Number(rn) === parseInt(rn)){
    
}
  
 for(let r = 1; r == rn; r++)
  {
   let x=document.getElementById('myTable').insertRow(r);
   for(let c = 0; c == cn; c++)  
    {
     let y=  x.insertCell(c);
     y.innerHTML="Row-"+(r + 1)+" Column-"+(c + 1); 
    }
   }
}