
const allTd = document.getElementsByTagName('td');

const totalArr = getToatalArr();

/**
 * 
 */
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
    // for (let td of allTd) {
    //     // console.log(typeof(td.textContent))
    //     if (td.textContent == '') {

    //         var arrTreeForTd = findTreeArraysForOneTd(totalArr, td);
    //         isDone = findNumberByCount(arrTreeForTd, td);

    //         if (isDone) break;
    //     }

    // }
    let a = findNumberByCount2();
    /////////////////////////////////////////
    ///
    ///   при кликане на бутона
    ///
    /////////////////////////////////////////

    /////////////////////////////
    //
    let b = findNumberByAnalise(totalArr);
    //
    //
    let c = findNumberAnlaseByColumn(totalArr);
    //
    ///////////////////////////////////////////////////

    let d = findNumberBySqrAnalise(totalArr);
    if (a || b || c || d) { return true } else { return false; }

}

/**
 * 
 * анлизира хоризонтали 
 */
function findNumberByAnalise(totalArr) {

    //////////////////////////
    //
    // Вземаме масивите един по един и виждаме кои числа им липсват
    // totalArr  е 27 масива всеки с по 9 елемента
    // 
    //////////////////////////
    let countArr = 0;
    let result = false;
    for (let arr of totalArr) {
        // only 9 times 
        countArr++
        if (countArr == 10) break;
        ////////////////
        var hlp = 10;
        var idHelp = 100;
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
                colorisedElement(idHelp, "yellowgreen");
                result = true;
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
                            idHelp = id;
                        } else {
                            hlp = 10;
                            numHlp = 0;
                            idHelp = 100;
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
    return result;
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

/**
 * показва липсващете цифри в един ред , колона, или голяма кутия
 * 
 */
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
    let result = false;
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
                    arr[hlp].style.backgroundColor = "green";
                    result = true;
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
    return result;
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
    let result = false;
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

                    arr[hlp].style.backgroundColor = 'yellow';
                    result = true;
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
    return result;
}

////////////////////////////////
//////////////////////////////
function colorisedElement(id, color) {
    let allTd = document.getElementsByTagName('td');
    allTd[id].style.backgroundColor = color;


}


/////////////////////////////
///////////////////////
function error(id) {
    let threeArr = findTreeArraysForOneTd(totalArr, allTd[id]);
    let val = allTd[id].textContent;

    // console.log(allTd[id]);
    for (let arr of threeArr) {
        for (let array of arr) {
            ///////////////
            //
            //   вземам първия от трите масива
            //
            //////////////////////
            for (let a of array) {


                if (a.textContent == val && a.id !== allTd[id].id) {
                    setTimeout(function () {
                        allTd[id].style.backgroundColor = "rgb(170,24,134)";
                    })

                    setTimeout(function () {
                        allTd[id].style.backgroundColor = "rgb(57, 219, 165)";
                    }, 6000);
                    return true;
                }


            }

        }

    }


}

//////////////////////
//////////////////

function showAllErrors() {
    let result = false;
    for (let tdElement of allTd) {
        if (tdElement.textContent != '') {

            if (error(tdElement.id))
                result = true;

        }
    }
    return result;
}
//////////////////////////
//////////////////
function eraseError() {
    let result = false;
    for (let tdElement of allTd) {
        if (tdElement.textContent != '') {

            if (error(tdElement.id)) {
                tdElement.textContent = '';
                tdElement.style.backgroundColor = 'rgb(57, 219, 165)'
            }
            result = true;

        }
    }
    return result;
}



///////////
//////////
function findNumberByCount2() {
    for (let td of allTd) {
        // console.log(typeof(td.textContent))
        if (td.textContent == '') {

            var arrTreeForTd = findTreeArraysForOneTd(totalArr, td);
            isDone = findNumberByCount(arrTreeForTd, td);

            if (isDone) {
                return true;
                break;
            }
        }

    }
}


///////////////////////
///////////////////

function startCalculation() {
    let res = false;
    let arrRestore = [];
    // let ttArr = getToatalArr();
    for (let arr in totalArr) {
        // console.log(arr);

        if (arr == 18) {
            //    console.log(totalArr[arr])
            //    return 1;
            let missNum = missingNumbers(totalArr[arr]);
            let nums = test2(missNum);
            ////////////////////////
            ///
            /// nums е масив с масиви с всички възможни компбинации
            ///
            /////////////////////////////  

            let arrSave = save();
            for (let num of nums) {
                console.log(num);
                fillArr(arr, num);
                // break;
                let hlp = true;
                while (hlp) {
                    hlp = calc();

                }
                if (!showAllErrors) {

                    break;
                }


            }


        }


        // break;//only first array
    }

}

function continueCalc(index) {
    let ttArr = getToatalArr();
    let arr = ttArr[index];

    let missNum = missingNumbers(arr);
    let nums = test2(missNum);
    ////////////////////////
    ///
    /// nums е масив с масиви с всички възможни компбинации
    ///
    /////////////////////////////  


    for (let num of nums) {

        while (!showAllErrors()) {

            fillArr(arr, num);


            if (calc()) {
                console.log('result');
            }
        }


    }


    //break;// only first array



}

// var save=(()=> {
function save() {

    var saveTable = [];
    for (let td of allTd) {
        if (td.textContent == '') {
            saveTable.unshift(td.id);
        }

    }

    return saveTable;


}
// })()
///////////////
//////////////

/**
 * подаваме  id-та на клетките които искаме да нулираме 
 * @param [] arrRestore 
 */
function restoreByEmptyId(arrRestore = []) {
    // console.log(save);return true;
    for (let td of allTd) {
        if (arrRestore.includes(td.id)) {
            td.textContent = '';
        }
    }


}


///////////////
//////////////////
/**
 * arr масив частично попълнен с (дупки)
 * num масив с числа които че запълнят дупките
 * 
 * @param [] arr 
 * @param [] nums 
 */
function fillArr(arr, nums) {
    for (let num of nums) {

        for (let a of arr) {

            if (a.textContent == '') {

                a.textContent = num;
                break;
            }
        }


    }
    return arr;
}






/////
///////////
function posibleNumbersForField(td) {
    let arrThree = findTreeArraysForOneTd(totalArr, td);
    let arrNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for (let array of arrThree) {
        // console.log(array);

        for (let arr of array) {

            for (let a of arr) {
                if (arrNumbers.includes(a.textContent)) {
                    arrNumbers.splice(arrNumbers.indexOf(a.textContent), 1);
                }
            }

        }
    }
    if (arrNumbers.lenght == 0) {
        return false
    } else {

        return arrNumbers;
    }

}


//////////////
////////////




function test2(arr) {
    let result = [];
    let num = arr.length;
    let numCount = Math.pow(num, num);
    for (let i = 0; i < numCount; i++) {
        res = convert2(num, i)
        let hlpRes = [];
        for (let int of res) {
            hlpRes.push(arr[int])
        }
        if (hlpRes.length == num) {
            result.push(hlpRes)
        }

    }

    return result;

}

///////////////////////////////
///////////////////////////////

function convert2(numCount, i) {
    let hlp;
    let res = [];
    while (i > 0) {
        hlp = i % numCount;
        //    console.log(hlp);
        i = Math.floor(i / numCount);

        if (res.includes(hlp)) return [];

        res.splice(0, 0, hlp);
    }
    if (res.length < numCount) {
        if (res.includes(0)) { } else { res.unshift(0); }

    }
    return res;


}

/////////////////
////////////////////
function add() {

    for (let index in totalArr) {
        let counter = 0;
        if (index < 9) {

            for (let int in totalArr[index]) {

                if (totalArr[index][int].textContent != '') {
                    counter++;
                    if (counter == 3) {

                        let lines = findIndexArr(index);
                        let sqrIndex = findSQR(index, int);
                        let missNumbers = missingNumbers(totalArr[sqrIndex[2]]);
                        for (let i of missNumbers) {
                            //  console.log(totalArr[lines[0]]);return 1;
                            for (let comprend of totalArr[lines[0]]) {
                                //  console.log(comprend.textContent , i);
                                if (comprend.textContent == i) {
                                    //   console.log()

                                    let id = findTdElementByTwoArrays(totalArr[sqrIndex[2]], totalArr[lines[1]]);
                                    let helper1 = allTd[id].textContent;
                                    allTd[id].textContent = i;
                                    findComplexAnalise(totalArr[sqrIndex[0]]);
                                    findComplexAnalise(totalArr[sqrIndex[1]]);

                                    allTd[id].textContent = helper1;
                                }

                            }
                            for (let comprend of totalArr[lines[1]]) {
                                //  console.log(comprend.textContent , i);
                                if (comprend.textContent == i) {
                                    //   console.log()

                                    let id = findTdElementByTwoArrays(totalArr[sqrIndex[2]], totalArr[lines[0]]);
                                    let helper = allTd[id].textContent;
                                    allTd[id].textContent = i;

                                    findComplexAnalise(totalArr[sqrIndex[0]]);
                                    findComplexAnalise(totalArr[sqrIndex[1]]);
                                    allTd[id].textContent = helper;
                                }



                            }

                        }
                    }


                }
                if ((int + 1) % 3 == 0) {
                    counter = 0;
                }

            }


        } else if (index < 18) {

            // console.log('you IN INDEX ' , counter ,index);
            for (let int in totalArr[index]) {

                if (totalArr[index][int].textContent != '') {
                    counter++;
                    if (counter == 3) {
                        let horisontales = findIndexHorisontales(index);

                        let sqrIndex = findSqrHor(index, int);
                        
                        let missNumbers = missingNumbers(totalArr[sqrIndex[2]]);
                        // console.log(index, int ,'----miss num --->',missNumbers, sqrIndex);continue;
                        for (let i of missNumbers) {
                            //  console.log(totalArr[lines[0]]);return 1;
                            for (let comprend of totalArr[horisontales[0]]) {
                                //  console.log(comprend.textContent , i);
                                if (comprend.textContent == i) {
                                    //   console.log()

                                    let id = findTdElementByTwoArrays(totalArr[sqrIndex[2]], totalArr[horisontales[1]]);
                                    let helper1 = allTd[id].textContent;
                                    allTd[id].textContent = i;
                                    findComplexAnalise(totalArr[sqrIndex[0]]);
                                    findComplexAnalise(totalArr[sqrIndex[1]]);

                                    allTd[id].textContent = helper1;
                                }

                            }
                            for (let comprend of totalArr[horisontales[1]]) {
                                //  console.log(comprend.textContent , i);
                                if (comprend.textContent == i) {
                                    //   console.log()

                                    let id = findTdElementByTwoArrays(totalArr[sqrIndex[2]], totalArr[horisontales[0]]);
                                    let helper = allTd[id].textContent;
                                    allTd[id].textContent = i;

                                    findComplexAnalise(totalArr[sqrIndex[0]]);
                                    findComplexAnalise(totalArr[sqrIndex[1]]);
                                    allTd[id].textContent = helper;
                                }



                            }

                        }
                    }


                }
                if ((int + 1) % 3 == 0) {
                    counter = 0;
                }

            }




        }



    }

}
/////////////////////////////////////////////////
////////////////////////////////
function findIndexHorisontales(i) {
    i = Number(i);
    let horisontales = [];
    if (i % 3 == 0) {
        horisontales.push(i + 1);
        horisontales.push(i + 2);

        return horisontales;
    } else if ((i - 1) % 3 == 0) {
        horisontales.push(i - 1);
        horisontales.push(i + 1);
        return horisontales;
    } else if ((i - 2) % 3 == 0) {
        horisontales.push(i - 1);
        horisontales.push(i - 2);
        return horisontales;

    }

}
////////////////////////////////////////////////
/////////////////////////////////////////////////
function findSqrHor(index, int) {
    index = Number(index);
    int = Number(int);
    let sqrIndex = [];
    if (index <= 11) {
        if (int <= 2) {
            sqrIndex.push('21');
            sqrIndex.push('24');
            sqrIndex.push('18');
            return sqrIndex;
        } else if (int <= 5) {

            sqrIndex.push('18');
            sqrIndex.push('24');
            sqrIndex.push('21');
            return sqrIndex;
        } else if (int <= 8) {

            sqrIndex.push('18');
            sqrIndex.push('21');
            sqrIndex.push('24');
            return sqrIndex;
        }

    } else if (index <= 14) {
        if (int <= 2) {
            sqrIndex.push('22');
            sqrIndex.push('25');
            sqrIndex.push('19');
            return sqrIndex;
        } else if (int <= 5) {

            sqrIndex.push('19');
            sqrIndex.push('25');
            sqrIndex.push('22');
            return sqrIndex;
        } else if (int <= 8) {

            sqrIndex.push('19');
            sqrIndex.push('22');
            sqrIndex.push('25');
            return sqrIndex;
        }

    } else if (index <= 17) {

        if (int <= 2) {
            sqrIndex.push('26');
            sqrIndex.push('23');
            sqrIndex.push('20');
            return sqrIndex;
        } else if (int <= 5) {

            sqrIndex.push('26');
            sqrIndex.push('20');
            sqrIndex.push('23');
            return sqrIndex;
        } else if (int <= 8) {

            sqrIndex.push('20');
            sqrIndex.push('23');
            sqrIndex.push('26');
            return sqrIndex;
        }
    }
}
//////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

function findComplexAnalise(arr) {

    let result = false;

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

            arr[hlp].style.backgroundColor = 'red';
            result = true;
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


    return result;
}



///////////////////////////
//////////////////////////
function findTdElementByTwoArrays(sqrArray, lineArray) {

    for (let i of sqrArray) {
        for (let l of lineArray) {
            if (i.id == l.id) {
                return i.id;
            }
        }
    }

}
/////////////////
//////////////
function findSQR(index, int) {
    index = Number(index);
    int = Number(int);
    // console.log(index , int);return true;
    //////////
    // int == 2 , 5 , 8 
    //////////
    let result = [];
    if (index <= 2) {
        if (int == 2) {
            result.push("19");
            result.push('20');
            result.push('18');
            return result;
        } else if ((int == 5)) {
            result.push('18');
            result.push('20');
            result.push('19')
            return result;

        } else if (int == 8) {
            result.push('18');
            result.push('19');
            result.push('20');
            return result;
        }

    }
    else if (index <= 5) {
        if (int == 2) {
            result.push("22");
            result.push('23');
            result.push('21');
            return result;
        } else if ((int == 5)) {
            result.push('21');
            result.push('23');
            result.push('22');
            return result;

        } else if (int == 8) {
            result.push('22');
            result.push('21');
            result.push('23');
            return result;
        }

    } else if (index > 5) {

        if (int == 2) {
            result.push("25");
            result.push('26');
            result.push('24');
            return result;
        } else if (int == 5) {
            result.push('24');
            result.push('26');
            result.push('25');
            return result;

        } else if (int == 8) {
            result.push('24');
            result.push('25');
            result.push('26');
            return result;
        }
    } else {
        return false;
    }


}
//////////////////
////////////////
function findIndexArr(number) {
    /////////// number >= 0 && number <= 8
    let lines = [];
    number = Number(number);
    if ((number + 1) % 3 == 0) {
        lines.unshift(String(number - 1));
        lines.unshift(String(number - 2));
    } else if (number % 3 == 0) {
        lines.unshift(String(number + 1));
        lines.unshift(String(number + 2));
    } else if ((number - 1) % 3 == 0) {
        lines.unshift(String(number - 1));
        lines.unshift(String(number + 1));
    }
    return lines;
}


/////////////////////
///////////////////
function findNummberByLines() {


} 