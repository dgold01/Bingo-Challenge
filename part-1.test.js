const { bingoCheck } = require('./part-1')

describe('part-1 main tests', () => {
    test('it should return true if the board will get bingo', async () => {
        const mockInput = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
        const mockBoard = [[1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25]
        ]
        const result = bingoCheck(mockInput, mockBoard)
        expect(result).toEqual(true)
    })
    test('it should return false if the board will never get bingo', async () => {
        const mockInput = [
            7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18, 20, 8, 19, 3, 26, 1
        ];
        const mockBoard = [
            [31, 1, 8, 48, 75],
            [22, 14, 9, 11, 34],
            [5, 17, 24, 37, 54],
            [41, 19, 3, 26, 59],
            [66, 72, 30, 29, 55]
        ];
        const result = bingoCheck(mockInput, mockBoard)
        expect(result).toEqual(false)
    })
    test('it should return true for only one possible horizontal win ', async () => {
        const mockInput = [
            7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18, 20, 8, 19, 3, 26, 1
        ];
        const mockBoard = [
            [7, 4, 9, 5, 11],
            [22, 14, 2, 6, 34],
            [5, 17, 24, 37, 54],
            [41, 19, 3, 26, 59],
            [66, 72, 30, 29, 55]
        ];
        const result = bingoCheck(mockInput, mockBoard)
        expect(result).toEqual(true)
    })
    test('it should return true for only one possible horizontal win ', async () => {
        const mockInput = [
            7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18, 20, 8, 19, 3, 26, 1
        ];
        const mockBoard = [
            [7, 22, 57, 80, 80],
            [4, 14, 2, 6, 34],
            [9, 17, 24, 37, 54],
            [1, 19, 3, 26, 59],
            [11, 72, 30, 29, 55]
        ];
        const result = bingoCheck(mockInput, mockBoard)
        expect(result).toEqual(true)
    })
});


describe('part-1 edge cases', () => {
    test('it should return correct message if called numbers input is an empty array ', async () => {
        const mockInput = [];
        const mockBoard = [
            [7, 22, 57, 80, 80],
            [4, 14, 2, 6, 34],
            [9, 17, 24, 37, 54],
            [1, 19, 3, 26, 59],
            [11, 72, 30, 29, 55]
        ];
        const result = bingoCheck(mockInput, mockBoard)
        console.log(result)
        expect(result).toEqual('The input for called numbers is empty')
    })
    test('it should return correct message if card input is an empty array ', async () => {
        const mockInput = [
            7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18, 20, 8, 19, 3, 26, 1
        ];
        const mockBoard = [
            
        ];
        const result = bingoCheck(mockInput, mockBoard)
        console.log(result)
        expect(result).toEqual('The input for board is empty')
    })
    test('it should return correct message if there is a non-numeric value in the called numbers input', async () => {
        const mockInput = [
            7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, '10', 16, 13, 6, 15, 25, 12, 22, 18, 20, 8, 19, 3, 26, 1
        ];
        const mockBoard = [
            [7, 22, 57, 80, 80],
            [4, 14, 2, 6, 34],
            [9, 17, 24, 37, 54],
            [1, 19, 3, 26, 59],
            [11, 72, 30, 29, 55]
        ];
        const result = bingoCheck(mockInput, mockBoard)
        console.log(result)
        expect(result).toEqual('Invalid input: Non-numeric value found in the called numbers input')
    })
    test('it should return correct message if there is a non-numeric value in the board input', async () => {
        const mockInput = [
            7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18, 20, 8, 19, 3, 26, 1
        ];
        const mockBoard = [
            [7, 22, 57, 80, 80],
            [4, 14, 2, 6, '34'],
            [9, 17, 24, 37, 54],
            [1, 19, 3, 26, 59],
            [11, 72, 30, 29, 55]
        ];
        const result = bingoCheck(mockInput, mockBoard)
        console.log(result)
        expect(result).toEqual('Invalid input: Non-numeric value found in the board input')
    })
})
