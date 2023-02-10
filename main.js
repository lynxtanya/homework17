'use strict';

const tableEl = document.createElement('table');
const tBody = document.createElement('tbody');

function generateTable(row, col) {
    for (let i = 0; i <= row -1; i++) {
  
      const rowEl = document.createElement('TR');

      for (let j = 0; j <= col - 1; j++) {
    
        const celllEl = document.createElement('TD');
        const cellText = document.createTextNode((j + 10 * i) + 1);
        celllEl.appendChild(cellText);
        rowEl.appendChild(celllEl);

      }
  
      tBody.appendChild(rowEl);
    }
  
    tableEl.appendChild(tBody);
    document.querySelector('.main').appendChild(tableEl);
    tableEl.setAttribute("border", "1");

  }
  

generateTable(10, 10);


