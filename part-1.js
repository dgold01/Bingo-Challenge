function bingoCheck(calledNumbers, board) {

    //Checks for edge cases.
    if(calledNumbers.length ===0 ) return 'The input for called numbers is empty'
    if(board.length ===0 ) return 'The input for board is empty'
    for (number of calledNumbers){
        if(typeof number !== 'number') return 'Invalid input: Non-numeric value found in the called numbers input'
    }
    for (let row of board) {
        if (row.some((number) => typeof number !== 'number')) {
            return  'Invalid input: Non-numeric value found in the board input'
        }
    }


    //Checks to see if any row has bingo. Returns true as soon as a winning row is found. 
    for (let row of board) {
        if (row.every((number) => calledNumbers.includes(number))) {
            console.log('We have a winner')
            return true;
        }
    }

    //Splits the board into arrays of columns.
    const boardSplitIntoColumns = splitIntoColumns(board)

    //Checks to see if any column has bingo. Returns true as soon as a winning column is found. 
    for (let column of boardSplitIntoColumns) {
        if (column.every((number) => calledNumbers.includes(number))) {
            console.log('We have a winner')
            return true;
        }
    }
    //returns false if card will never get bingo
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




module.exports={bingoCheck,splitIntoColumns}