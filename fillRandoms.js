function fillRandoms() {
    var allTdElements = document.getElementsByTagName('td');
    for (let td of allTdElements) {
        td.textContent = Math.round(Math.random() * 9);
        if (td.textContent == 0) {
            td.textContent = '';
        }
    }

}


function fillHalfTable() {
    var allTdElements = document.getElementsByTagName('td');
    
    for (let int = 0; int < 25; int++) {
        
        var index = Math.round(Math.random() * 81);
        let value = Math.round(Math.random() * 9);
        if (value == 0) {
            value = '';
        }
        allTdElements[index].textContent = value;
        if(error(index)){
            allTdElements[index].textContent='';
        }
    }
}




function fillCellId() {

    var allTdElements = document.getElementsByTagName('td');
    for (let td of allTdElements) {
        td.textContent = td.id;
    }
}



function clearTable() {

    var allTdElements = document.getElementsByTagName('td');
    for (let td of allTdElements) {
        td.textContent = "";
        td.style.backgroundColor="rgb(57, 219, 165)";

    }
}




