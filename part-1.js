function bingoCheck(calledNumbers, board) {
    //checks to see if any row has bingo
    for (let row of board) {
        if (row.every((number) => calledNumbers.includes(number))) {
            console.log('We have a winner')
            return true;
        }
    }

    const boardSplitIntoColumns = splitIntoColumns(board)

    //checks to see if ant column has bingo
    for (let column of boardSplitIntoColumns) {
        if (column.every((number) => calledNumbers.includes(number))) {
            console.log('We have a winner')
            return true;
        }
    }
    console.log('No winner')
    return false;
}

function splitIntoColumns(board) {
    const columns = []
    for (let column = 0; column < 5; column++) {
        columnArray = []
        for (let row of board) {
            columnArray.push(row[column])
        }
        columns.push(columnArray)
    }
   
    return columns
}


const calledNumbers = [
    7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18, 20, 8, 19, 3, 26, 1
];

const board = [
    [31, 1, 8, 48, 75],
    [22, 14, 9, 11, 34],
    [5, 17, 24, 37, 54],
    [41, 19, 3, 26, 59],
    [66, 72, 30, 29, 55]
];

module.exports={bingoCheck,splitIntoColumns}