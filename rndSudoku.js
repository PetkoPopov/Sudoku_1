/**
 * разбърква numssArr и го добавя към arr
 * ako няма параметри връща разбъркани 
 * числа до 9 
 * @param {*} arr =[]
 * @param {*} numsArr =[] 
 * @returns array
 */
function shufleAdd(arr = [], nums = []) {

    if (arr.length == 0 && nums.length == 0) {
        nums = ["1", '2', '3', '4', '5', '6', '7', '8', '9']
    }
    else if (arr.length !== 0 && nums.length == 0) {
        nums = ["1", '2', '3', '4', '5', '6', '7', '8', '9']
        for (let i = 0; i < arr.length; i++) {
            nums.splice(nums.indexOf(arr[i]), 1)
        }
    }

    for (let i = nums.length; i > 0; i--) {
        let num = Math.floor(Math.random() * i)
        arr.push(nums[num])
        nums.splice(nums.indexOf(nums[num]), 1)
    }

    return arr
}

function fillTable(arrIndex, arr = []) {
    let globalArr = getTotalArr()

    for (let y = 0; y < 9; y++) {
        globalArr[arrIndex][y].textContent = arr[y]
    }
}
function randomSqr(arrLine = []) {
    let arr = arrLine.splice(3, 6)
    return shufleAdd(arrLine)
}
function randomColl(arr) {
    return shufleAdd([arr[0], arr[3], arr[6]])
}
function rndSudoku() {
    clearTable();
    let a = shufleAdd()
    fillTable(0, a)
    let rndSqr = randomSqr(a)
    fillTable(18, rndSqr)
    fillTable(9, randomColl(a))
    let totalArr = getTotalArr()
    let arr_0/**първите 3 от 1 ред */ = [totalArr[0][0].textContent, totalArr[0][1].textContent, totalArr[0][2].textContent]
    let arr_1/**вторите 3 от 1 ред */ = [totalArr[0][3].textContent, totalArr[0][4].textContent, totalArr[0][5].textContent]
    let arr_2/**първите 3 от 2 ред */ = [totalArr[18][3].textContent, totalArr[18][4].textContent, totalArr[18][5].textContent]
    let arr_3/**първите 3 от 3 ред */ = [totalArr[18][6].textContent, totalArr[18][7].textContent, totalArr[18][8].textContent]

    if (compareArr(arr_1, arr_2)/**срв 2ра 3ка 1ви ред с 2ра 3ка 1ва кутия */) {

        let arr = shufle(arr_2)
        totalArr[2][6].textContent = arr[0]
        totalArr[2][7].textContent = arr[1]
        totalArr[2][8].textContent = arr[2]
        arr = shufle(arr_3)
        totalArr[1][3].textContent = arr[0]
        totalArr[1][4].textContent = arr[1]
        totalArr[1][5].textContent = arr[2]
        let arrHlp = [totalArr[0][0].textContent, totalArr[0][1].textContent, totalArr[0][2].textContent]
        arr = shufle(arrHlp)
        totalArr[1][6].textContent = arr[0]
        totalArr[1][7].textContent = arr[1]
        totalArr[1][8].textContent = arr[2]
        arrHlp = [totalArr[0][0].textContent, totalArr[0][1].textContent, totalArr[0][2].textContent]
        arr = shufle(arrHlp)
        // console.log(arrHlp)
        totalArr[2][3].textContent = arr[0]
        totalArr[2][4].textContent = arr[1]
        totalArr[2][5].textContent = arr[2]

    } else if (compareArr(arr_1, arr_3)/** */) {
        let arr = shufle(arr_3)
        totalArr[1][6].textContent = arr[0]
        totalArr[1][7].textContent = arr[1]
        totalArr[1][8].textContent = arr[2]
        arr = shufle(arr_2)
        totalArr[2][3].textContent = arr[0]
        totalArr[2][4].textContent = arr[1]
        totalArr[2][5].textContent = arr[2]
        let arrHlp = [totalArr[0][0].textContent, totalArr[0][1].textContent, totalArr[0][2].textContent]
        arr = shufle(arrHlp)
        totalArr[2][6].textContent = arr[0]
        totalArr[2][7].textContent = arr[1]
        totalArr[2][8].textContent = arr[2]
        arrHlp = [totalArr[0][0].textContent, totalArr[0][1].textContent, totalArr[0][2].textContent]
        arr = shufle(arrHlp)
        // console.log(arr)
        totalArr[1][3].textContent = arr[0]
        totalArr[1][4].textContent = arr[1]
        totalArr[1][5].textContent = arr[2]
    } else {
        //////////////////////////////////////////////////////////////////////
        /**вземаме първо число от втори ред и случайно го слагаме на 3 ред */
        /////////////////////////////////////////////////////////////////////
        let tmp = totalArr[1][0].textContent
        let index = 10
        if (arr_1.includes(tmp)) {
            index = Math.floor(Math.random() * 3) + 6
            totalArr[2][index].textContent = tmp
        } else {
            index = Math.floor(Math.random() * 3) + 3
            totalArr[2][index].textContent = tmp
        }
        ////////////////////////////////////////////////////////////////////////
        /**вземеме 2число от 2 ред */                                ///////////
        ////////////////////////////////////////////////////////////////////////
        tmp = totalArr[1][1].textContent
        ///
        if (arr_1.includes(tmp)) {
            let arrEmptyTd = []
            for (let i = 0; i < 3; i++) {
                if (i + 6 != index) {
                    arrEmptyTd.push(6 + i)/** събираме индексите на свободните td  */
                }
            }
            totalArr[2][arrEmptyTd[Math.floor(Math.random() * arrEmptyTd.length)]].textContent = tmp
        } else {

            let arrEmptyTd = []
            for (let i = 0; i < 3; i++) {
                if (3 + i != index) {
                    arrEmptyTd.push(3 + i)/** събираме индексите на свободните td  */
                }
            }
            totalArr[2][arrEmptyTd[Math.floor(Math.random() * arrEmptyTd.length)]].textContent = tmp
        }
        ///////////////////////////////////////////////////////////////////////////
        ///** вземаме 3то число втори ред */                           ///////////
        /////////////////////////////////////////////////////////////////////////
        tmp = totalArr[1][2].textContent
        if (arr_1.includes(tmp)) {
            let arrEmptyTd = []
            for (let i = 6; i < 9; i++) {
                if (totalArr[2][i].textContent == false) {
                    arrEmptyTd.push(i)
                }
            }
            totalArr[2][arrEmptyTd[Math.floor(Math.random() * arrEmptyTd.length)]].textContent = tmp
        } else {
            let arrEmptyTd = []
            for (let i = 3; i < 6; i++) {
                if (totalArr[2][i].textContent == false) {
                    arrEmptyTd.push(i)
                }
            }
            totalArr[2][arrEmptyTd[Math.floor(Math.random() * arrEmptyTd.length)]].textContent = tmp
        }
        ////////////////////////////////////////////////////////////////////////////
        /// вземаме от 1во число 3 ред                                    //////////
        ////////////////////////////////////////////////////////////////////////////    
        tmp = totalArr[2][0].textContent
        if (arr_1.includes(tmp)) {
            let arrEmptyTd = [6, 7, 8]
            totalArr[1][arrEmptyTd[Math.floor(Math.random() * arrEmptyTd.length)]].textContent = tmp
        } else {
            let arrEmptyTd = [3, 4, 5]
            totalArr[1][arrEmptyTd[Math.floor(Math.random() * arrEmptyTd.length)]].textContent = tmp
        }
        ////////////////////////////////////////////////////////////////////////////
        /// вземаме от 2ро число 3 ред                                    //////////
        ////////////////////////////////////////////////////////////////////////////   
        tmp = totalArr[2][1].textContent
        if (arr_1.includes(tmp)) {
            let arrEmptyTd = []
            for (let i = 6; i < 9; i++) {

                if (totalArr[1][i].textContent == false) {
                    arrEmptyTd.push(i)
                }
            }
            totalArr[1][arrEmptyTd[Math.floor(Math.random() * arrEmptyTd.length)]].textContent = tmp
        } else {
            let arrEmptyTd = []
            for (let i = 3; i < 6; i++) {
                if (totalArr[1][i].textContent == false) {
                    arrEmptyTd.push(i)
                }
            }
            totalArr[1][arrEmptyTd[Math.floor(Math.random() * arrEmptyTd.length)]].textContent = tmp
        }
        ////////////////////////////////////////////////////////////////////////////
        /// вземаме от 3то число 3 ред                                    //////////
        ////////////////////////////////////////////////////////////////////////////  
        tmp = totalArr[2][2].textContent
        if (arr_1.includes(tmp)) {
            let arrEmptyTd = []
            for (let i = 6; i < 9; i++) {
                if (totalArr[1][i].textContent == false) {
                    arrEmptyTd.push(i)
                }
            }
            totalArr[1][arrEmptyTd[Math.floor(Math.random() * arrEmptyTd.length)]].textContent = tmp
        } else {
            let arrEmptyTd = []
            for (let i = 3; i < 6; i++) {
                if (totalArr[1][i].textContent == false) {
                    arrEmptyTd.push(i)
                }
            }
            totalArr[1][arrEmptyTd[Math.floor(Math.random() * arrEmptyTd.length)]].textContent = tmp

        }
        ////////////////////////////////////////////////////////////////////////////
        /// вземаме 1во число от първи ред                               ///////////
        ////////////////////////////////////////////////////////////////////////////
        totalArr = getTotalArr()
        tmp = totalArr[0][0].textContent
        // console.log(totalArr)
        let arrEmptyTd = []
        for (let i = 3; i < 9; i++) {
            if (totalArr[19][i].textContent == false) {
                arrEmptyTd.push(i)
            }
        }
        totalArr[19][arrEmptyTd[Math.floor(Math.random() * arrEmptyTd.length)]].textContent = tmp

        ////////////////////////////////////////////////////////////////////////////
        /// вземаме 2ро число от първи ред                               ///////////
        ////////////////////////////////////////////////////////////////////////////

        totalArr = getTotalArr()
        tmp = totalArr[0][1].textContent
        arrEmptyTd = []
        for (let i = 3; i < 9; i++) {
            if (totalArr[19][i].textContent == false) {
                arrEmptyTd.push(i)
            }
        }
        totalArr[19][arrEmptyTd[Math.floor(Math.random() * arrEmptyTd.length)]].textContent = tmp
        ////////////////////////////////////////////////////////////////////////////
        /// вземаме 3то число от първи ред                               ///////////
        ////////////////////////////////////////////////////////////////////////////

        totalArr = getTotalArr()
        tmp = totalArr[0][2].textContent
        arrEmptyTd = []
        for (let i = 3; i < 9; i++) {
            if (totalArr[19][i].textContent == false) {
                arrEmptyTd.push(i)
            }
        }
        totalArr[19][arrEmptyTd[Math.floor(Math.random() * arrEmptyTd.length)]].textContent = tmp

        findNumsByCount()
        totalArr = getTotalArr()
        let arrDouble = findMissNums(20)
        arrEmptyTd = []
        for (let i = 3; i < 9; i++) {
            if (totalArr[20][i].textContent == false) {
                arrEmptyTd.push(i)
            }
        }
        let a = shufle(arrDouble)
        totalArr[20][arrEmptyTd[0]].textContent = a[0]
        totalArr[20][arrEmptyTd[1]].textContent = a[1]

    }
    /**
     * работим по отвесните 3 колони
     */
    arr_0/**първите 3 числа 1 колона */ = [totalArr[9][0].textContent, totalArr[9][1].textContent, totalArr[9][2].textContent]
    arr_1/**първите 3 числа 2 колона */ = [totalArr[10][1].textContent, totalArr[10][2].textContent, totalArr[10][0].textContent]
    arr_2/**първите 3 числа 3 колона */ = [totalArr[11][1].textContent, totalArr[11][2].textContent, totalArr[11][0].textContent]
    arr_3/**вторите 3 числа 1 колона */ = [totalArr[9][3].textContent, totalArr[9][4].textContent, totalArr[9][5].textContent]

    if (compareArr(arr_1, arr_3)) {

        let arr = shufle(arr_2)
        totalArr[10][3].textContent = arr[0]
        totalArr[10][4].textContent = arr[1]
        totalArr[10][5].textContent = arr[2]
        arr = shufle(arr_1)
        totalArr[11][6].textContent = arr[0]
        totalArr[11][7].textContent = arr[1]
        totalArr[11][8].textContent = arr[2]
        let arrHlp = [totalArr[9][0].textContent, totalArr[9][1].textContent, totalArr[9][2].textContent]
        arr = shufle(arrHlp)
        totalArr[11][3].textContent = arr[0]
        totalArr[11][4].textContent = arr[1]
        totalArr[11][5].textContent = arr[2]
        arrHlp = [totalArr[9][0].textContent, totalArr[9][1].textContent, totalArr[9][2].textContent]
        arr = shufle(arrHlp)
        // console.log(arrHlp)
        totalArr[10][6].textContent = arr[0]
        totalArr[10][7].textContent = arr[1]
        totalArr[10][8].textContent = arr[2]

    } else if (compareArr(arr_2, arr_3)) {
        let arr = shufle(arr_1)
        totalArr[11][3].textContent = arr[0]
        totalArr[11][4].textContent = arr[1]
        totalArr[11][5].textContent = arr[2]
        arr = shufle(arr_2)
        totalArr[10][6].textContent = arr[0]
        totalArr[10][7].textContent = arr[1]
        totalArr[10][8].textContent = arr[2]
        // let arrHlp = [totalArr[9][0].textContent, totalArr[9][1].textContent, totalArr[9][2].textContent]

        arr = shufle(arr_0)
        totalArr[10][3].textContent = arr[0]
        totalArr[10][4].textContent = arr[1]
        totalArr[10][5].textContent = arr[2]
        // arrHlp = [totalArr[9][0].textContent, totalArr[9][1].textContent, totalArr[9][2].textContent]
        arr = shufle(arr_0)
        // console.log(arr)
        totalArr[11][6].textContent = arr[0]
        totalArr[11][7].textContent = arr[1]
        totalArr[11][8].textContent = arr[2]



    } else {
        ////   първо число 2колона  ///////////////////////////////////////////
        totalArr = getTotalArr()
        let tmp = totalArr[10][0].textContent
        if (arr_3.includes(tmp)) {
            totalArr[11][Math.floor(Math.random() * 3) + 6].textContent = tmp
        } else {
            totalArr[11][Math.floor(Math.random() * 3) + 3].textContent = tmp
        }
        /////// второ число 2колона //////////////////////////
        tmp = totalArr[10][1].textContent
        totalArr = getTotalArr()
        if (arr_3.includes(tmp)) {
            let emptyTds = []
            for (let i = 6; i < 9; i++) {
                if (totalArr[11][i].textContent == false) {
                    emptyTds.push(i)
                }
            }
            totalArr[11][emptyTds[Math.floor(Math.random() * emptyTds.length)]].textContent = tmp
        } else {
            let emptyTds = [];
            for (let i = 3; i < 6; i++) {
                if (totalArr[11][i].textContent == false) {
                    emptyTds.push(i)
                }
            }
            totalArr[11][emptyTds[Math.floor(Math.random() * emptyTds.length)]].textContent = tmp
        }
        /////// трето число 2колона /////////////////////////////////////////////////////////////
        tmp = totalArr[10][2].textContent

        if (arr_3.includes(tmp)) {
            let emptyTds = []
            for (let i = 6; i < 9; i++) {
                if (totalArr[11][i].textContent == false) {
                    emptyTds.push(i)
                }
            }
            totalArr[11][emptyTds[Math.floor(Math.random() * emptyTds.length)]].textContent = tmp
        } else {
            let emptyTds = []
            for (let i = 3; i < 6; i++) {
                if (totalArr[11][i].textContent == false) {
                    emptyTds.push(i)
                }
            }
            totalArr[11][emptyTds[Math.floor(Math.random() * emptyTds.length)]].textContent = tmp
        }

        ////// първо число 3колона //////////////////////////////////////////////// 
        tmp = totalArr[11][0].textContent
        if (arr_3.includes(tmp)) {
            totalArr[10][Math.floor(Math.random() * 3) + 6].textContent = tmp
        } else {

            totalArr[10][Math.floor(Math.random() * 3) + 3].textContent = tmp
        }
        ////////// второ число 3колона /////////////////////////////////////////
        tmp = totalArr[11][1].textContent
        totalArr = getTotalArr()
        if (arr_3.includes(tmp)) {
            let emptyTds = []
            for (let i = 6; i < 9; i++) {
                if (totalArr[10][i].textContent == false) {
                    emptyTds.push(i)
                }
            }
            totalArr[10][emptyTds[Math.floor(Math.random() * emptyTds.length)]].textContent = tmp
        } else {

            let emptyTds = []
            for (let i = 3; i < 6; i++) {
                if (totalArr[10][i].textContent == false) {
                    emptyTds.push(i)
                }
            }
            totalArr[10][emptyTds[Math.floor(Math.random() * emptyTds.length)]].textContent = tmp

        }
        //////  трето число 3колона /////////////////////////////////////////////////////////////
        tmp = totalArr[11][2].textContent
        if (arr_3.includes(tmp)) {
            let emptyTds = []
            for (let i = 6; i < 9; i++) {
                if (totalArr[10][i].textContent == false) {
                    emptyTds.push(i)
                }
            }
            totalArr[10][emptyTds[Math.floor(Math.random() * emptyTds.length)]].textContent = tmp
        } else {

            let emptyTds = []
            for (let i = 3; i < 6; i++) {
                if (totalArr[10][i].textContent == false) {
                    emptyTds.push(i)
                }
            }
            totalArr[10][emptyTds[Math.floor(Math.random() * emptyTds.length)]].textContent = tmp

        }
        //////// първо число 1колона ////////////////////////////////////////////////////////////////
        tmp = totalArr[9][0].textContent
        totalArr = getTotalArr()
        let emptyTds = []
        let rndTenOrEleven = Math.floor(Math.random() * 2) + 10
        let i
        let final
        if (rndTenOrEleven == 10) {
            i = 3; final = 6
        } else { i = 6; final = 9 }
        for (i; i < final; i++) {
            if (totalArr[rndTenOrEleven][i].textContent == false) {
                emptyTds.push(i)
            }
        }

        totalArr[rndTenOrEleven][emptyTds[Math.floor(Math.random() * emptyTds.length)]].textContent = tmp

        emptyTds = []
        if (rndTenOrEleven == 10) {
            rndTenOrEleven = 11
        } else {
            rndTenOrEleven = 10
        }
        if (rndTenOrEleven == 10) {
            i = 3; final = 6
        } else {
            i = 6; final = 9
        }
        for (i; i < final; i++) {
            if (totalArr[rndTenOrEleven][i].textContent == false) {
                emptyTds.push(i)
            }
        }
        totalArr[rndTenOrEleven][emptyTds[Math.floor(Math.random() * emptyTds.length)]].textContent = tmp

        ///////////////////////////////////////////////////////////////////////////////////  
        /////////// второ число 1колона ///////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////

        tmp = totalArr[9][1].textContent
        totalArr = getTotalArr()
        emptyTds = []
        for (let i = 0; i < 9; i++) {
            if (totalArr[21][i].textContent == false) {
                emptyTds.push(i)
            }
        }

        totalArr[21][emptyTds[Math.floor(Math.random() * emptyTds.length)]].textContent = tmp

        findNumsByCount()
        // errorsEasy()
    }
    emptyTds = []
    arr = getTotalArr()[24]
    for (let i = 0; i < 9; i++) {
        if (arr[i].textContent == false) {
            emptyTds.push(i)
        }
    }
    console.log(emptyTds, 'empty Tds')
    if (emptyTds.length > 0) {

        let nums = findMissNums(24)

        nums = shufle(nums)
        console.log('nums-->', nums, '<--nums')
        arr[emptyTds[0]].textContent = nums[0]
        arr[emptyTds[1]].textContent = nums[1]
        // calc()
    }
}
/**
 * 
 * @param {*} n 
 */
function advancedCalcByHover(n/** n e число */) {
    let arr = getTotalArr()


    let allIds = []
    let indexArr = []
    for (let i = 0; i < 27; i++) {
        for (let el of arr[i]) {
            if (n == el.textContent) {
                for (let el of arr[i]) {
                    if (!el.textContent && !allIds.includes(el.id)) {
                        allIds.push(el.id)/**   */

                    }
                }
                indexArr.push(i)/** */
                break
            }
        }

    }
    indexArr.reverse()
    indexArr.forEach((e) => {
        arr.splice(e, 1)/** */
    })
    ///////////////////////////////////////////////////////////////////////////////////////    
    ///////  до тук премахване от логиката тези масиви които съдържат числото n 
    //////   за да не циклим постянно
    ///////////////////////////////////////////////////////////////////////////////////////
    for (let i = 0; i < arr.length; i++) {
        for (let td = 0; td < arr[i].length; td++) {
            if (allIds.includes(arr[i][td].id)) {
                arr[i].splice(td, 1)
                i--/** връщаме се да изцклим масива отново */
                break
            }
            if (arr[i][td].textContent) {
                arr[i].splice(td, 1)
                i--
                break
            }

        }

    }

    let result = []
    for (let arrTd of arr) {
        if (arrTd.length == 1) {
            result.push(arrTd[0].id)
            arrTd[0].textContent = n
            console.log('ByHover()->result', result,'id-->' , arrTd[0].id)
        }
    }
    return result
}
/**разбърква подадения масив */
function shufle(arr) {
    let arrRes = []
    for (let i = arr.length; i > 0; i--) {
        let index = Math.floor(Math.random() * i)
        arrRes.push(arr.splice(index, 1)[0])
    }

    return arrRes
}
/**
 * слага числото в таблицата
 * без параметър
 * връща масив с липсващи числа
 *  
 */
function findNumsByCount() {
    let totalArr = getTotalArr()
    for (let i = 0; i < 27; i++) {
        let emptyTd = []
        nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
        for (let y = 0; y < 9; y++) {
            if (totalArr[i][y].textContent == false) {
                emptyTd.push(y)
            } else {
                nums.splice(nums.indexOf(totalArr[i][y].textContent), 1)
            }
            if (emptyTd.length > 1) { break }
            else if (emptyTd.length == 1 && nums.length == 1) {
                totalArr[i][emptyTd[0]].textContent = nums[0]
            }
        }
    }
    return nums
}
/**
 * връща масив с липсващите числа до 9
 * парам индекс на totalArr
 */
function findMissNums(index) {

    let totalArr = getTotalArr()
    nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    for (let i = 0; i < 9; i++) {
        if (nums.includes(totalArr[index][i].textContent)) {
            nums.splice(nums.indexOf(totalArr[index][i].textContent), 1)
        }
    }
    return nums
}
function errorsEasy() {
    let totalArr = getTotalArr()
    for (let arr of totalArr) {
        /////////////////////////////////
        // 27масива          ////////////
        /////////////////////////////////
        for (let el of arr) {
            counter = 0
            for (let td of arr) {
                if (el.textContent == td.textContent && td.textContent != false) {
                    counter++
                    if (counter > 1) {
                        td.style.backgroundColor = 'red'
                    }
                }

            }

        }

    }

}
function showNumsFTd() {
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
        Tds[i].textContent = nums.join('')
        console.log(Tds.length, "Tds.length")
        if (nums.length == 1) {
            Tds[i].style.backgroundColor = "red"
        } else {
            Tds[i].style.fontSize = '22px'
        }
    }
} 
