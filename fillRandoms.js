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
        allTdElements[index].textContent = value;
        }

        if(error(index)){
            allTdElements[index].textContent='';
        }
    }
}

/**
 * попълва първите три реда е три колони с правилни случайни числа
 */
function fill3Raws(){

    var allTdElements = document.getElementsByTagName('td');
    let nums=[1,2,3,4,5,6,7,8,9]
    for(let i=0; i<9; i ++ ){
  
    }
}

function fillCellId() {

    var allTdElements = document.getElementsByTagName('td');
    for (let td of allTdElements) {
        td.textContent = td.id;
    }
}








