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
    let a = shufleAdd()
    fillTable(0, a)
    let rndSqr = randomSqr(a)
    fillTable(18, rndSqr)
    fillTable(9, randomColl(a))
    let totalArr = getTotalArr()
    let arr_0/**първите 3 от 1 ред */ = [totalArr[0][0].textContent, totalArr[0][1].textContent, totalArr[0][2].textContent]
    let arr_1/**втори   3 от 1 ред */ = [totalArr[0][3].textContent, totalArr[0][4].textContent, totalArr[0][5].textContent]
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

                arrEmptyTd.push(3 + i)/** събираме индексите на свободните td  */
                console.log(arrEmptyTd, '<-arrEmptyId')
            }
            totalArr[2][arrEmptyTd[Math.floor(Math.random() * arrEmptyTd.length)]].textContent = tmp
        }

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
        let arrHlp = [totalArr[0][0].textContent, totalArr[0][1].textContent, totalArr[0][2].textContent]
        arr = shufle(arrHlp)
        totalArr[10][3].textContent = arr[0]
        totalArr[10][4].textContent = arr[1]
        totalArr[10][5].textContent = arr[2]
        arrHlp = [totalArr[0][0].textContent, totalArr[0][1].textContent, totalArr[0][2].textContent]
        arr = shufle(arrHlp)
        // console.log(arr)
        totalArr[11][6].textContent = arr[0]
        totalArr[11][7].textContent = arr[1]
        totalArr[11][8].textContent = arr[2]



    }
    totalArr = getTotalArr()


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

    for (let i = 0; i < arr.length; i++) {

        for (let td = 0; td < arr[i].length; td++) {

            if (allIds.includes(arr[i][td].id)) {

                arr[i].splice(td, 1)
                i--/** */

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
    for (let i of arr) {
        if (i.length == 1) {
            result.push(i[0].id)
        }
    }
    let arrRes = getTotalArr()
    arrRes.forEach((el) => {
        el.forEach(e => {
            if (result.includes(e.id)) {
                e.textContent = n
            }
        })
    })

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