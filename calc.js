
const allTd=document.getElementsByTagName('td');

const totalArr=getToatalArr();


function calc() {

    // const allTd = document.getElementsByTagName('td');
    var rowArr = [];
    var arrColl1 = [];
    var arrColl2 = [];
    var arrColl3 = [];
    var arrColl4 = [];
    var arrColl5 = [];
    var arrColl6 = [];
    var arrColl7 = [];
    var arrColl8 = [];
    var arrColl9 = [];
    var sqr1 = [];
    var sqr2 = [];
    var sqr3 = [];
    var sqr4 = [];
    var sqr5 = [];
    var sqr6 = [];
    var sqr7 = [];
    var sqr8 = [];
    var sqr9 = [];

    var totalArr = [];
    let counter = 0;


    for (let td of allTd) {



        rowArr.push(td);
        if ((counter + 1) % 9 == 0) {
            totalArr.push(rowArr);
            rowArr = [];
        }

        ///////////////////////////////
        //тука създаваме масиви на колоните 
        ///////////////////////////////
        if (counter % 9 == 0) {
            arrColl1.push(td);
        } else if (counter % 9 == 1) {
            arrColl2.push(td)
        } else if (counter % 9 == 2) {
            arrColl3.push(td);
        } else if (counter % 9 == 3) {
            arrColl4.push(td);
        } else if (counter % 9 == 4) {
            arrColl5.push(td);
        } else if (counter % 9 == 5) {
            arrColl6.push(td);
        } else if (counter % 9 == 6) {
            arrColl7.push(td);
        } else if (counter % 9 == 7) {
            arrColl8.push(td);
        } else if (counter % 9 == 8) {
            arrColl9.push(td);
        }
        //////////////////////////
        //правим масивите по кутии
        ///////////////////////////
        if ((counter % 9 == 0 || counter % 9 == 1 || counter % 9 == 2) && counter <= 20) {
            sqr1.push(td);
        } else if ((counter % 9 == 3 || counter % 9 == 4 || counter % 9 == 5) && counter <= 23) {
            sqr2.push(td);
        } else if ((counter % 9 == 6 || counter % 9 == 7 || counter % 9 == 8) && counter <= 26) {
            sqr3.push(td);
        } else if ((counter % 9 == 0 || counter % 9 == 1 || counter % 9 == 2) && counter <= 47) {
            sqr4.push(td);
        } else if ((counter % 9 == 3 || counter % 9 == 4 || counter % 9 == 5) && counter <= 50) {
            sqr5.push(td);
        } else if ((counter % 9 == 6 || counter % 9 == 7 || counter % 9 == 8) && counter <= 53) {
            sqr6.push(td);
        } else if ((counter % 9 == 0 || counter % 9 == 1 || counter % 9 == 2) && counter <= 74) {
            sqr7.push(td);
        } else if ((counter % 9 == 3 || counter % 9 == 4 || counter % 9 == 5) && counter <= 77) {
            sqr8.push(td)
        } else if ((counter % 9 == 6 || counter % 9 == 7 || counter % 9 == 8)) {
            sqr9.push(td);
        }



        counter++;
    }


    totalArr.push(arrColl1);
    totalArr.push(arrColl2);
    totalArr.push(arrColl3);
    totalArr.push(arrColl4);
    totalArr.push(arrColl5);
    totalArr.push(arrColl6);
    totalArr.push(arrColl7);
    totalArr.push(arrColl8);
    totalArr.push(arrColl9);

    totalArr.push(sqr1);
    totalArr.push(sqr2);
    totalArr.push(sqr3);
    totalArr.push(sqr4);
    totalArr.push(sqr5);
    totalArr.push(sqr6);
    totalArr.push(sqr7);
    totalArr.push(sqr8);
    totalArr.push(sqr9);
    //console.log(totalArr);
    var tenArrHlp = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var isDone = false;
    // var arrTreeForTd = [];
    for (let td of allTd) {
        // console.log(typeof(td.textContent))
        if (td.textContent == '') {

            var arrTreeForTd = findTreeArraysForOneTd(totalArr, td);
            isDone = findNumberByCount(arrTreeForTd, td);

            if (isDone) break;
        }

    }
    /////////////////////////////////////////
    ///
    ///   при кликане на бутона
    ///
    /////////////////////////////////////////

    /////////////////////////////
    //
    findNumberByAnalise(totalArr);
    //
    //
    findNumberAnlaseByColumn(totalArr);
    //
    ///////////////////////////////////////////////////

    findNumberBySqrAnalise(totalArr);
}


function findNumberByAnalise(totalArr) {

    //////////////////////////
    //
    // Вземаме масивите един по един и виждаме кои числа им липсват
    // totalArr  е 27 масива всеки с по 9 елемента
    // 
    //////////////////////////
    let countArr = 0;
    for (let arr of totalArr) {
        // only 9 times 
        countArr++
        if (countArr == 10) break;
        ////////////////
        var hlp = 10;
        var idHelp=100;
        var numHlp = 0;
        /// сега arr е само един масив проверяваме кои цифри му липсват
        //////////////////////////////////////////////
        let missNumbers = missingNumbers(arr);  ////
        /////////////////////////////////////////////
        /// за всяко липсващо число проверяваме дали е възможно да е на тази колона 

        for (let missNum of missNumbers) {
            let breakHllp = false;
            if (breakHllp) {
                break;
            }
            if (hlp == 10) { } else {
                /// не забравяй хелпър-а е числото на дупката а не Id на елемента 
                arr[hlp].textContent = numHlp;
                colorisedElement(idHelp,"yellowgreen");
                break;
            }
            //проверява  всички дупки 
            for (let hollow in arr) {

                if (breakHllp) break;

                if (arr[hollow].textContent == '') {

                    let id = Number(arr[hollow].id);


                    let indexVerticalArray = (id % 9) + 9;

                    let indexSqrArray = findIdSquare(id);

                    let pos = false;
                    pos = posible(totalArr[indexVerticalArray], totalArr[indexSqrArray], missNum);

                    if (pos) {
                        if (hlp == 10) {
                            hlp = hollow;
                            numHlp = missNum;
                            idHelp=id;
                        } else {
                            hlp = 10;
                            numHlp = 0;
                            idHelp=100;
                            breakHllp = true;

                            break;
                        }
                        // console.log(missNum + '<--- missNum  <>   is posible ---> ' + pos + '   arr[hollow].id---->' + arr[hollow].id);
                        // console.log('======================================')

                    }

                }
            }
        }

        // break; // този break взема само първия масив


    }
}


function posible(arrVertical, arrSqr, missingNumber) {
    // console.log('inside posible' + typeof (missingNumber))

    for (let tdVertcal of arrVertical) {
        if (missingNumber === tdVertcal.textContent) {

            return false;
        }
    }
    for (let tdSqr of arrSqr) {
        if (missingNumber === tdSqr.textContent) {

            return false;
        }


    }



    return true;



}


function findIdSquare(id) {
    if (id % 9 <= 2) {
        if (id <= 20) {
            return 18;
        } else if (id <= 47) {
            return 21;
        } else if (id <= 74) {
            return 24;
        }
    } else if (id % 9 <= 5) {
        if (id <= 23) {
            return 19;
        } else if (id <= 50) {
            return 22;
        } else if (id <= 77) {
            return 25;
        }

    } else if (id % 9 <= 8) {
        if (id <= 26) {

            return 20;
        } else if (id <= 53) {
            return 23;
        } else if (id <= 80) {
            return 26;
        }
    }
}


function missingNumbers(arr) {
    let arrNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    for (let number of arr) {

        if (number.textContent != '') {

            arrNumbers.splice(arrNumbers.indexOf(number.textContent), 1);
        }
    }
    return arrNumbers;

}


function findNumberByCount(arrTreeForTd, td) {

    let isDone = false;
    for (let arr of arrTreeForTd) {

        ////////////////////////////////
        // вземаме първата тройка
        // циклим три масива
        ///////////////////////////////
        tenArrHlp = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
        for (let singleArr of arr) {

            //////////////// 
            //   singlrArr  е един от трите масива
            //   разбиваме вземаме текст контекста
            //   и сравняваме 
            //   singlrArr е масив с бутони НЕ със стойности
            ///////////////////

            for (let val of singleArr) {
                //   console.log(val.textContent+'/ char is---> '+char);
                if (tenArrHlp.includes(val.textContent)) {

                    tenArrHlp.splice(tenArrHlp.indexOf(val.textContent), 1);
                    //   console.log(tenArrHlp);

                }


                if (tenArrHlp.length == 1) {
                    td.textContent = tenArrHlp[0];
                    td.style.backgroundColor = "rgb(219,176,27)"
                    isDone = true;
                    break;
                }

            }


            if (isDone) break;
        }

    }

    return isDone;
}
////////////////////////////////
////////////////////////////

function findTreeArraysForOneTd(totalArr, td) {
    let arrTreeForTd = [];
    counter = 0;
    let hlpArr = [];
    for (let arr of totalArr) {
        for (let tdFromTotal of arr) {
            if (tdFromTotal.id === td.id) {
                counter++;
                hlpArr.push(arr);
            }
            if (counter == 3) break;
        }
        if (counter == 3) break;
    }
    arrTreeForTd.push(hlpArr);
    return arrTreeForTd;
}
////////////////////////////
////////////////////////

function swichHover() {


    let hover = document.getElementById('hover');
    //console.log(hover.textContent);
    var allTd = document.getElementsByTagName('td');

    let totalArr = getToatalArr();
    for (let tdElement of allTd) {

        if (tdElement.textContent == '') continue;

        if (hover.textContent === "Swich Hover") {
            tdElement.addEventListener('mouseover', function () {

                for (let arr of totalArr) {

                    for (let tdFromArr of arr) {

                        if (tdFromArr.textContent == tdElement.textContent) {

                            colorAllArray(arr);
                            break;
                        }

                    }



                    /////////// tdElement.style.backgroundColor = "rgb(143, 219, 57)";
                }

            })

            tdElement.addEventListener('mouseout', function () {

                for (let tdElement of allTd) {
                    tdElement.style.backgroundColor = "rgb(57, 219, 165)"
                }


            })
            // hover.textContent = 'Swich off hover';
            hover.style.backgroundColor = ' rgb(236, 26, 156)'
        }
    }

}

///////////////////
//////////////////////
function colorAllArray(arr) {

    for (let td of arr) {

        td.style.backgroundColor = "rgb(143, 219, 57)";
    }
 }

////////////////////
/////////////////////////
function getToatalArr() {
    const allTd = document.getElementsByTagName('td');
    var rowArr = [];
    var arrColl1 = [];
    var arrColl2 = [];
    var arrColl3 = [];
    var arrColl4 = [];
    var arrColl5 = [];
    var arrColl6 = [];
    var arrColl7 = [];
    var arrColl8 = [];
    var arrColl9 = [];
    var sqr1 = [];
    var sqr2 = [];
    var sqr3 = [];
    var sqr4 = [];
    var sqr5 = [];
    var sqr6 = [];
    var sqr7 = [];
    var sqr8 = [];
    var sqr9 = [];

    var totalArr = [];
    let counter = 0;


    for (let td of allTd) {



        rowArr.push(td);
        if ((counter + 1) % 9 == 0) {
            totalArr.push(rowArr);
            rowArr = [];
        }

        ///////////////////////////////
        //тука създаваме масиви на колоните 
        ///////////////////////////////
        if (counter % 9 == 0) {
            arrColl1.push(td);
        } else if (counter % 9 == 1) {
            arrColl2.push(td)
        } else if (counter % 9 == 2) {
            arrColl3.push(td);
        } else if (counter % 9 == 3) {
            arrColl4.push(td);
        } else if (counter % 9 == 4) {
            arrColl5.push(td);
        } else if (counter % 9 == 5) {
            arrColl6.push(td);
        } else if (counter % 9 == 6) {
            arrColl7.push(td);
        } else if (counter % 9 == 7) {
            arrColl8.push(td);
        } else if (counter % 9 == 8) {
            arrColl9.push(td);
        }
        //////////////////////////
        //правим масивите по кутии
        ///////////////////////////
        if ((counter % 9 == 0 || counter % 9 == 1 || counter % 9 == 2) && counter <= 20) {
            sqr1.push(td);
        } else if ((counter % 9 == 3 || counter % 9 == 4 || counter % 9 == 5) && counter <= 23) {
            sqr2.push(td);
        } else if ((counter % 9 == 6 || counter % 9 == 7 || counter % 9 == 8) && counter <= 26) {
            sqr3.push(td);
        } else if ((counter % 9 == 0 || counter % 9 == 1 || counter % 9 == 2) && counter <= 47) {
            sqr4.push(td);
        } else if ((counter % 9 == 3 || counter % 9 == 4 || counter % 9 == 5) && counter <= 50) {
            sqr5.push(td);
        } else if ((counter % 9 == 6 || counter % 9 == 7 || counter % 9 == 8) && counter <= 53) {
            sqr6.push(td);
        } else if ((counter % 9 == 0 || counter % 9 == 1 || counter % 9 == 2) && counter <= 74) {
            sqr7.push(td);
        } else if ((counter % 9 == 3 || counter % 9 == 4 || counter % 9 == 5) && counter <= 77) {
            sqr8.push(td)
        } else if ((counter % 9 == 6 || counter % 9 == 7 || counter % 9 == 8)) {
            sqr9.push(td);
        }



        counter++;
    }


    totalArr.push(arrColl1);
    totalArr.push(arrColl2);
    totalArr.push(arrColl3);
    totalArr.push(arrColl4);
    totalArr.push(arrColl5);
    totalArr.push(arrColl6);
    totalArr.push(arrColl7);
    totalArr.push(arrColl8);
    totalArr.push(arrColl9);

    totalArr.push(sqr1);
    totalArr.push(sqr2);
    totalArr.push(sqr3);
    totalArr.push(sqr4);
    totalArr.push(sqr5);
    totalArr.push(sqr6);
    totalArr.push(sqr7);
    totalArr.push(sqr8);
    totalArr.push(sqr9);

    return totalArr
}
///////////////////////
////////////////////////
function findNumberAnlaseByColumn(totalArr) {

    //////////////////////////
    //
    // Вземаме масивите един по един и виждаме кои числа им липсват
    // totalArr  е 27 масива всеки с по 9 елемента
    // 
    //////////////////////////
    let countArr = 0;
    for (let arr of totalArr) {
        // only 9 times 
        countArr++
        if (countArr > 9 && countArr <= 18) {

            ////////////////
            var hlp = 10;

            var numHlp = 0;
            /// сега arr е само един масив проверяваме кои цифри му липсват
            //////////////////////////////////////////////
            let missNumbers = missingNumbers(arr);  ////
            /////////////////////////////////////////////
            /// за всяко липсващо число проверяваме дали е възможно да е на тази колона 
            ///////////////////////////////////////

            for (let missNum of missNumbers) {
                let breakHllp = false;
                if (breakHllp) {
                    break;
                }
                if (hlp == 10) { } else {
                    arr[hlp].textContent = numHlp;
                    arr[hlp].style.backgroundColor="green";
                    break;
                }
                //проверява  всички дупки 
                for (let hollow in arr) {

                    if (breakHllp) break;

                    if (arr[hollow].textContent == '') {

                        let id = Number(arr[hollow].id);


                        let indexHorisontalArray = Math.floor(id / 9);
                        // console.log(totalArr[indexHorisontalArray]);
                        let indexSqrArray = findIdSquare(id);

                        let pos = false;
                        pos = posible(totalArr[indexHorisontalArray], totalArr[indexSqrArray], missNum);

                        if (pos) {
                            if (hlp == 10) {
                                hlp = hollow;
                                numHlp = missNum;
                            } else {
                                hlp = 10;
                                numHlp = 0;
                                breakHllp = true;

                                break;
                            }
                            // console.log(missNum + '<--- missNum  <>   is posible ---> ' + pos + '   arr[hollow].id---->' + arr[hollow].id);
                            // console.log('======================================')

                        }

                    }
                }
            }

            // break; // този break взема само първия масив


        }
    }
}

////////////////////////
///////////////////////////
function findNumberBySqrAnalise(totalArr) {

    //////////////////////////
    //
    // Вземаме масивите един по един и виждаме кои числа им липсват
    // totalArr  е 27 масива всеки с по 9 елемента
    // 
    //////////////////////////
    let countArr = 0;
    for (let arr of totalArr) {
        // only 9 times 
        countArr++
        if (countArr > 18) {

            ////////////////
            var hlp = 10;

            var numHlp = 0;
            /// сега arr е само един масив проверяваме кои цифри му липсват
            //////////////////////////////////////////////
            let missNumbers = missingNumbers(arr);  ////
            /////////////////////////////////////////////
            /// за всяко липсващо число проверяваме дали е възможно да е на тази колона 
            ///////////////////////////////////////

            for (let missNum of missNumbers) {
                let breakHllp = false;
                if (breakHllp) {
                    break;
                }
                if (hlp == 10) { } else {
                    arr[hlp].textContent = numHlp;
                    
                    arr[hlp].style.backgroundColor='yellow';

                    break;
                }
                //проверява  всички дупки 
                for (let hollow in arr) {

                    if (breakHllp) break;

                    if (arr[hollow].textContent == '') {

                        let id = Number(arr[hollow].id);


                        let indexHorisontalArray = Math.floor(id / 9);

                        let indexSqrArray = findIdSquare(id);
                        let indexVerticalArray = (id % 9) + 9;
                        let pos = false;
                        pos = posible(totalArr[indexHorisontalArray], totalArr[indexVerticalArray], missNum);

                        if (pos) {
                            if (hlp == 10) {
                                hlp = hollow;
                                numHlp = missNum;
                            } else {
                                hlp = 10;
                                numHlp = 0;
                                breakHllp = true;

                                break;
                            }
                            // console.log(missNum + '<--- missNum  <>   is posible ---> ' + pos + '   arr[hollow].id---->' + arr[hollow].id);
                            // console.log('======================================')

                        }

                    }
                }
            }

            // break; // този break взема само първия масив


        }
    }

}

////////////////////////////////
//////////////////////////////
function colorisedElement(id,color){
    let allTd=document.getElementsByTagName('td');
allTd[id].style.backgroundColor=color;


}


/////////////////////////////
///////////////////////
function error(id){ 
          let threeArr =  findTreeArraysForOneTd(totalArr , allTd[id]);
        let val = allTd[id].textContent;

       // console.log(allTd[id]);
 for(let arr of threeArr){
       for(let array of arr){
             ///////////////
             //
             //   вземам първия от трите масива
             //
             //////////////////////
             for(let a of array){
                
                
                if(a.textContent == val && a.id !== allTd[id].id  ){
                    allTd[id].style.backgroundColor="rgb(170,24,134)";
                    return true ;
                }

                
             }

       }

 }
          

}