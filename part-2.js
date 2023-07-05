
const { bingoCheck, splitIntoColumns } = require('./part-1')


const calledNumbers = [
    7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24,       10, 16, 13, 6, 15, 25, 12, 22, 18, 20, 8, 19, 3, 26, 1
];

const boards = [
    [
        [22, 13, X, X, X],
        [8, X, X, X, X],
        [X, X, X, 16, X],
        [6, 10, 3, 18, X],
        [1, 12, 20, 15, 19]
    ],
    [
        [3, 15, X, X, 22],
        [X, 18, 13, X, X],
        [19, 8, X, 25, X],
        [20, X, 10, X, X],
        [X, X, 16, 12, 6]
    ],
    [
        [X, X, X, X, X],
        [10, 16, 15, X, 19],
        [18, 8, X, 26, 20],
        [22, X, 13, 6, X],
        [X, X, 12, 3, X]
    ]
];


function determineFirstBingo(calledNumbers, boards) {
    //First remove any board that will never win
    const onlyWinners = boards.filter((board) => bingoCheck(calledNumbers, board))
    let minWinningCount = Infinity
    let winingBoard = null
    for (let board of onlyWinners) {
        let winningCount = Infinity;
        for (let row of board) {
            let count = 0;
            if (row.every((number) => calledNumbers.includes(number))) {
                let i = 0
                while (i < 5) {
                    if (row.includes(calledNumbers[count])) {
                        i++
                    }
                    count++
                }
                if (count < winningCount) {
                    winningCount = count
                }
            }
        }

        const boardSplitIntoColumns = splitIntoColumns(board)
        for (let column of boardSplitIntoColumns) {
            let count = 0;
            if (column.every((number) => calledNumbers.includes(number))) {
                let i = 0
                while (i < 5) {
                    if (column.includes(calledNumbers[count])) {
                        i++
                    }
                    count++
                }
                if (count < winningCount) {
                    winningCount = count
                }
            }
        }
        if (winningCount < minWinningCount) {
            winingBoard = board
            minWinningCount = winningCount
        }
        console.log(winningCount)
        //first check rows
    }

    return winingBoard
}


console.log(determineFirstBingo(calledNumbers, boards))




