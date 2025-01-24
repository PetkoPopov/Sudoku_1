
var saveTable = [];
var sudokuArr = [];
for (let y = 0; y < 81; y++) {
    sudokuArr[y] = 'h'
}
/**
 * return boolean
 */
function calc() {
    console.log('calc()')
    /////////////////////////////////////////
    let a = findNumberByCount2();
    // confirm('findNumberByCount2()')
    //
    let b = findNumberByAnalise();
    // confirm('findNumber by anlyse()')
    //
    let c = findNumberAnlaseByColumn();
    // confirm("findNumbeAnaliseByColumn()")
    //
    let d = findNumberBySqrAnalise();
    // confirm("SqrAnalise()")
    for (let i = 0; i < 9; i++) { advancedCalcByHover(i) }
    calcByAll()
    ///////////////////////////////////////////////////
    //if (a || b || c || d) { return true } else { return false; }

}
function calcByAll() {

    let Tds = document.getElementsByTagName('td')
    for (let i = 30; i < 81; i++) {
        let nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
        if (i % 9 == 0) { i += 3 }
        if (Tds[i].textContent != false) { continue }
        let treeArr = findTreeArraysForOneTd(Tds[i])
        treeArr.forEach(arr => {
            arr.forEach(e => {
                if (nums.includes(e.textContent)) {
                    nums.splice(nums.indexOf(e.textContent), 1)
                }
            })
        })
        // Tds[i].style.fontSize='4px'
        if (nums.length == 1) {
            console.log('insisde Tds.length in calc()')
            Tds[i].textContent = nums[0]
        }
    }

console.log('byAll()')
}


/* 
* анлизира хоризонтали 
*/
function findNumberByAnalise(arr) {
    let totalArr = getTotalArr()
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
    console.log('ByAnalyse()')
    return result;
}

/**
 * казва ни дали едно число може да бъде на този вертикал или квадрат
 * @param {arr} arrVertical 
 * @param {arr} arrSqr 
 * @param {number} missingNumber 
 * @returns boolean
 */
function posible(arrVertical, arrSqr, missingNumber) {
    // console.log('inside posible' + typeof (missingNumber))

    for (let tdVertcal of arrVertical) {
        if (missingNumber === tdVertcal.textContent) {
            return false
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
////////////////////////////////
////////////////////////////
/**
 * param {td element}
 */
function findTreeArraysForOneTd(td) {
    // console.log(td)
    // return
    let totalArr = getTotalArr()
    let arrTreeForTd = [];
    counter = 0;
    // let hlpArr = [];
    for (let arr of totalArr/** 27arrays */) {

        for (let tdFromTotal of arr) {
            // console.log("in find 3 for td td.id--->",td.id)
            if (tdFromTotal.id === td.id) {
                counter++;
                arrTreeForTd.push(arr);
                break;
            }
            if (counter == 3) break;
        }
        if (counter == 3) break;
    }

    // arrTreeForTd.push(hlpArr);
    // console.log(arrTreeForTd)
    return arrTreeForTd;
}
////////////////////////////
/**
 * когато добавите число и искате да видите кои 
 * редове кутии и вертикали заема кликнете Switch Hover
 */

function swichHover() {


    let hover = document.getElementById('hover');
    console.log(hover.textContent)
    //console.log(hover.textContent);
    let allTd = document.getElementsByTagName('td');

    let totalArr = getTotalArr();
    for (let tdElement of allTd) {

        if (tdElement.textContent == '') continue;


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

///////////////////
//////////////////////
function colorAllArray(arr) {

    for (let td of arr) {

        td.style.backgroundColor = "rgb(143, 219, 57)";
    }
}

////////////////////
/////////////////////////
function getTotalArr() {
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


        ///////////////////////////////////////
        ///   създаваме масивите на редовете
        ///////////////////////////////////////
        rowArr.push(td);
        if ((counter + 1) % 9 == 0) {
            totalArr.push(rowArr);
            rowArr = [];
        }

        ///////////////////////////////////////
        //   тука създаваме масиви на колоните 
        /////////////////////////////////////////
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
        /////////////////////////////////
        //   правим масивите по кутии
        //////////////////////////////////
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
function findNumberAnlaseByColumn() {
    let totalArr = getTotalArr()
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

            // confirm('anlyse by column',countArr)
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
    console.log('ByColumn()')
    return result;
}

////////////////////////
///////////////////////////
function findNumberBySqrAnalise() {
    let totalArr = getTotalArr()
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
    console.log('SQRanalyse()')
    return result;
}

////////////////////////////////
//////////////////////////////
function colorisedElement(id, color) {
    let allTd = document.getElementsByTagName('td');
    allTd[id].style.backgroundColor = color;


}
/**
 * 
 * @param {int} id 
 * chek for errors and return boolean
 * @returns boolean
 */
function error(id) {
    const allTd = document.getElementsByTagName('td');
    totalArr = getTotalArr()
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
            for (let td of array) {
                if (td.textContent == val && td.id !== id) {
                    allTd[id].style.backgroundColor = "rgb(170,24,134)";

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
    let allTd = document.getElementsByTagName('td');
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


/**
 * преброява числата в масива и 
 * ако остава са едно число го слага
 * @returns boolean
 */
function findNumberByCount2() {

    let arr = getTotalArr()
    // console.log('totalArr--->', arr)
    let countArr = 0
    for (let element of arr) {
        countArr++
        // console.log(countArr)
        let counter = 0
        let nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

        for (let e of element) {
            if (nums.includes(e.textContent)) {
                nums.splice(nums.indexOf(e.textContent), 1)

            } else if (!e.textContent) {
                counter++
            }
            if (counter > 1) { break }
        }
        // console.log('counter--->', counter, nums.length)
        if (nums.length == 1) {

            for (const e of element) {
                // console.log('inside if --->', nums)
                if (!e.textContent) {
                    e.textContent = nums[0]
                    e.style.backgroundColor = "rgb(219,176,27)"
                }
            }
        }
    }
console.log('byCount_2()')
}


function save() {
    let allTd = document.getElementsByTagName('td');
    for (let i = 0; i < 81; i++) {
        saveTable[i] = allTd[i].textContent
    }

}

//////////////
function clearTable() {

    var allTdElements = document.getElementsByTagName('td');
    for (let td of allTdElements) {
        td.textContent = " ";
        td.style.backgroundColor = "rgb(57, 219, 165)";
        showIF('Table was cleared')
    }

}
{
   
    /**
     * казва кои са възможните числа за дадено място
     * @param {<td></td>} td 
     * @returns array
     */
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
        let allTd = document.getElementsByTagName('td');
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



    function doSomethingAndRestore(id, number) {
        let allTd = document.getElementsByTagName('td');
        let saveTable = save();

        ////////////////
        // do something without concerns 
        // after wil be restore previos value
        //////////////////////
        // doSomething();  //////избира къде липсват само две цифри и слага едната :)
        //////////////////////
        allTd[id].textContent = number;
        if (calc()) {
            if (showAllErrors()) {

                setTimeout(function () {

                    restoreByEmptyId(saveTable)

                }
                    , 4000);
                return false;
            }

        }


        return true;
    }
    /**
     * do some calcultion 
     * 
     */
    function doSomething() {

        for (let arr of totalArr) {

            let missNum = missingNumbers(arr);
            if (missNum.length == 2) {
                for (let a of arr) {
                    if (a.textContent == "") {
                        // a.textContent = missNum[0];break;
                        if (doSomethingAndRestore(a.id, missNum[0])) { } else {
                            doSomethingAndRestore(a.id, missNum[1]);
                        }
                    }
                }
            } else if (missNum.length == 3) {
                for (let a of arr) {
                    if (a.textContent == "") {
                        // a.textContent = missNum[0];break;
                        if (doSomethingAndRestore(a.id, missNum[0])) { }
                        else if (doSomethingAndRestore(a.id, missNum[1])) {
                        } else {
                            doSomethingAndRestore(a.id, missNum[1]);
                        }
                    }
                }
            }


        }


    }
}
/**
 * възстановява судоку до последния сейф
 */
function restore() {

    let tds = document.querySelectorAll("td")

    for (let y = 0; y < 81; y++) {
        tds[y].textContent = saveTable[y]
    }
}

function showIF(text) {
    let show = document.querySelector(".table")
    var el = document.createElement("div")
    el.style.position = 'fixed'
    el.style.top = "100px"
    el.style.left = "900px"
    el.style.fontSize = "xx-large"
    el.style.border = "4px solid darkolivegreen"

    el.textContent = text
    show.appendChild(el)
    setTimeout(() => {
        show.removeChild(el)
    }, 500)
}

