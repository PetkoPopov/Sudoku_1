
function makeTable() {

    var table = document.querySelector('table');
    table.style.border = "1px solid black";
    console.log(table);
    for (let row = 0; row < 9; row++) {

        let tr = document.createElement('tr');
        for (let coll = 0; coll < 9; coll++) {
            let tdElement = document.createElement("td");
            tdElement.style.width = "55px";
            tdElement.style.height = "55px";
            tdElement.style.borderBottom = "5px solid olive ";
            tdElement.style.borderTop = "5px solid olive";
            tdElement.style.borderLeft = "5px solid olive ";
            tdElement.style.borderRight = "5px solid olive ";
           if((row+1)%3 == 0){
            tdElement.style.borderBottom = "5px solid yellow ";
           }
if((coll+1)%3 == 0){
    tdElement.style.borderRight = "5px solid yellow ";
}
if(coll == 0 ){
    tdElement.style.borderLeft = "5px solid yellow ";
}
if( row == 0 ){
    tdElement.style.borderTop = "5px solid yellow ";
}

            tdElement.style.textAlign = "center";
            tdElement.style.fontSize = "34px";
            let count = 0;
            tdElement.addEventListener('click', function () {
                count++;
                if(count == 10 ){count=0
                tdElement.textContent = '';
            }else{
                tdElement.textContent=count;
                // setTimeout(error(tdElement.id),3000);
            }
            
                // tdElement.textContent = row+'/'+coll;
            })
            
            tdElement.id = (row)*9+coll;
            
            tr.appendChild(tdElement);

        }
        table.appendChild(tr);


    }

    // document.body.appendChild()
}
makeTable();