
const { bingoCheck, splitIntoColumns } = require('./part-1')


const calledNumbers = [
    7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18, 20, 8, 19, 3, 26, 1
];

const boards = [
    [
        [22, 13, 17, 11, 0],
        [8, 2, 23, 4, 24],
        [21, 9, 14, 16, 7],
        [6, 10, 3, 18, 5],
        [1, 12, 20, 15, 19]
    ],
    [
        [3, 15, 0, 2, 22],
        [9, 18, 13, 17, 5],
        [19, 8, 7, 25, 23],
        [20, 11, 10, 24, 4],
        [14, 21, 16, 12, 6]
    ],
    [
        [14, 21, 17, 24, 4],
        [10, 16, 15, 9, 19],
        [18, 8, 23, 26, 20],
        [22, 11, 13, 6, 5],
        [2, 0, 12, 3, 7]
    ]
];

//This function determines how long it takes for the array to reach bingo based on the order of called numbers 
function calculateWinningCount(calledNumbers, array) {
    let count = 0;
    let winningCount = Infinity;
    for (let number of calledNumbers) {
        if (array.includes(number)) {
            count++;
            //When the count reaches 5, the array has reached bingo
            if (count === 5) {
                //The winning count is equal to the place in the called numbers array at which bingo is achieved.
                winningCount = calledNumbers.indexOf(number) + 1
                //No need to continue looping once bingo is achieved
                break;
            }
        }
    }
    return winningCount
}


function determineFirstBingo(calledNumbers, boards) {

    //Checks for edge cases.
    if (calledNumbers.length === 0) return 'The input for called numbers is empty'
    if (boards.length === 0) return 'The input for boards is empty'
    for (number of calledNumbers) {
        if (typeof number !== 'number') return 'Invalid input: Non-numeric value found in the called numbers input'
    }
    for (let board of boards) {
        for (let row of board) {
            if (row.some((number) => typeof number !== 'number')) {
                return 'Invalid input: Non-numeric value found in the boards input'
            }
        }
    }
    //Removes any board that will never win
    const onlyWinners = boards.filter((board) => bingoCheck(calledNumbers, board))
    if (onlyWinners.length === 0) return 'No board will get Bingo'



    let minWinningCount = Infinity
    let boardResults = []
    let winningBoards = []
    for (let board of onlyWinners) {
        let winningCount = Infinity;
        for (let row of board) {
            //For each row, the winning count for the board is updated by comparing the previuos winning count and new winning count. 
            winningCount = Math.min(winningCount, calculateWinningCount(calledNumbers, row))
        }

        //Splits the board into arrays of columns.
        const boardSplitIntoColumns = splitIntoColumns(board)
        for (let column of boardSplitIntoColumns) {
            //For each column, the winning count for the board is updated by comparing the previuos winning count and new winning count. 
            winningCount = Math.min(winningCount, calculateWinningCount(calledNumbers, column))
        }
        //Each board's winning count is pushed to boardResults array, so that multiple boards can be returned if they share the minimum winning count
        boardResults.push([boards.indexOf(board), winningCount])
        if (winningCount < minWinningCount) {
            minWinningCount = winningCount
        }

    }
    //Determine which boards have the minimum winning count
    for (boardResult of boardResults) {
        if (boardResult[1] === minWinningCount) {
            winningBoards.push(boards[boardResult[0]])
        }
    }
    return winningBoards
}

module.exports = { determineFirstBingo }





