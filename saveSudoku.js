function saveSudoku() {
    let fs = require('fs')
    confirm("confirm you in sudoku save")

    let arr = getTotalArr()
    let totalArrForString = {}
    let count = 0
    for (const element of arr) {
        let prop = String(count)
        Object.defineProperty(totalArrForString, prop, { value: element.textContent })
    }

    let text = JSON.stringify(totalArrForString)

    fs.writeFile('write.txt', text, function (err) {
        if (err) throw err;
        console.log('Saved!');
        // });
        // fs.readFile('write.txt', 'utf8', function (err, data) {
        //     if (err) throw err;
        //     data_ = JSON.parse(data)
        //     console.log(data_, "<----inside fs")
        // });
        // setTimeout(() => {
        //     console.log("ouside data=", data_)
        // }, 120)

    })
}
