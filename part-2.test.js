const { determineFirstBingo } = require('./part-2')

describe('part-2 main tests', () => {
    test('it should return the board with first bingo win ', async () => {
        const mockInput = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25
        ];
        const mockBoards = [
            [[1, 2, 3, 4, 5],
            [6, 7, 8, 9, 10],
            [11, 12, 13, 14, 15],
            [16, 17, 18, 19, 20],
            [21, 22, 23, 24, 25]],

            [[6, 2, 8, 9, 10],
            [1, 7, 3, 4, 5],
            [11, 12, 13, 14, 15],
            [16, 22, 18, 19, 20],
            [21, 17, 23, 24, 25]],

            [[11, 12, 13, 14, 15],
            [6, 7, 8, 9, 10],
            [1, 16, 3, 4, 5],
            [2, 17, 18, 19, 20],
            [21, 22, 23, 24, 25]]
        ];
        result = determineFirstBingo(mockInput, mockBoards)
        console.log(result)
        expect(result).toEqual([mockBoards[0]])

    })
    test('it should return multiple boards if more than one will reach bingo first at the same time ', async () => {
        const mockInput = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25
        ];
        const mockBoards = [
            [[1, 2, 3, 4, 5],
            [6, 7, 8, 9, 10],
            [11, 12, 13, 14, 15],
            [16, 17, 18, 19, 20],
            [21, 22, 23, 24, 25]],

            [[6, 7, 8, 9, 10],
            [1, 2, 3, 4, 5],
            [11, 12, 13, 14, 15],
            [16, 17, 18, 19, 20],
            [21, 22, 23, 24, 25]],

            [[11, 12, 13, 14, 15],
            [6, 7, 8, 9, 10],
            [1, 2, 3, 4, 5],
            [16, 17, 18, 19, 20],
            [21, 22, 23, 24, 25]]
        ];
        result = determineFirstBingo(mockInput, mockBoards)
        expect(result).toEqual(mockBoards)

    })
    test('it should return correct message if no card will reach bingo ', async () => {
        const mockInput = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25
        ];
        const mockBoards = [
            [
                [31, 1, 8, 48, 75],
                [22, 14, 9, 11, 34],
                [5, 17, 24, 37, 54],
                [41, 19, 3, 26, 59],
                [66, 72, 30, 29, 55]
            ],

            [
                [20, 1, 8, 48, 75],
                [22, 14, 9, 11, 34],
                [5, 17, 24, 37, 54],
                [41, 19, 3, 26, 59],
                [66, 72, 30, 29, 55]
            ],

            [
                [10, 1, 8, 48, 75],
                [22, 14, 9, 11, 34],
                [5, 17, 24, 37, 54],
                [41, 19, 3, 26, 59],
                [66, 72, 30, 29, 55]
            ]
        ]

        result = determineFirstBingo(mockInput, mockBoards)
        expect(result).toEqual('No board will get Bingo')

    })

});



describe('part-2 edge cases', () => {
    test('it should return correct message if called numbers input is an empty array ', async () => {
        const mockInput = [];
        const mockBoards = [
            [
                [31, 1, 8, 48, 75],
                [22, 14, 9, 11, 34],
                [5, 17, 24, 37, 54],
                [41, 19, 3, 26, 59],
                [66, 72, 30, 29, 55]
            ],

            [
                [20, 1, 8, 48, 75],
                [22, 14, 9, 11, 34],
                [5, 17, 24, 37, 54],
                [41, 19, 3, 26, 59],
                [66, 72, 30, 29, 55]
            ],

            [
                [10, 1, 8, 48, 75],
                [22, 14, 9, 11, 34],
                [5, 17, 24, 37, 54],
                [41, 19, 3, 26, 59],
                [66, 72, 30, 29, 55]
            ]
        ]

        const result = determineFirstBingo(mockInput, mockBoards)
        expect(result).toEqual('The input for called numbers is empty')
    })
    test('it should return correct message if card input is an empty array ', async () => {
        const mockInput = [
            7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18, 20, 8, 19, 3, 26, 1
        ];
        const mockBoards = [
            
        ];
        const result = determineFirstBingo(mockInput, mockBoards)
        console.log(result)
        expect(result).toEqual('The input for boards is empty')
    })
    test('it should return correct message if there is a non-numeric value in the called numbers input', async () => {
        const mockInput = [
            7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, '10', 16, 13, 6, 15, 25, 12, 22, 18, 20, 8, 19, 3, 26, 1
        ];
        const mockBoards = [
            [
                [31, 1, 8, 48, 75],
                [22, 14, 9, 11, 34],
                [5, 17, 24, 37, 54],
                [41, 19, 3, 26, 59],
                [66, 72, 30, 29, 55]
            ],

            [
                [20, 1, 8, 48, 75],
                [22, 14, 9, 11, 34],
                [5, 17, 24, 37, 54],
                [41, 19, 3, 26, 59],
                [66, 72, 30, 29, 55]
            ],

            [
                [10, 1, 8, 48, 75],
                [22, 14, 9, 11, 34],
                [5, 17, 24, 37, 54],
                [41, 19, 3, 26, 59],
                [66, 72, 30, 29, 55]
            ]
        ]
        const result = determineFirstBingo(mockInput, mockBoards)
        expect(result).toEqual('Invalid input: Non-numeric value found in the called numbers input')
    })
    test('it should return correct message if there is a non-numeric value in the boards input', async () => {
        const mockInput = [
            7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18, 20, 8, 19, 3, 26, 1
        ];
        const mockBoards = [
            [
                [31, 1, 8, 48, 75],
                [22, 14, 9, 11, 34],
                [5, 17, 24, 37, 54],
                [41, 19, '3', 26, 59],
                [66, 72, 30, 29, 55]
            ],

            [
                [20, 1, 8, 48, 75],
                [22, 14, 9, 11, 34],
                [5, 17, 24, 37, 54],
                [41, 19, 3, 26, 59],
                [66, 72, 30, 29, 55]
            ],

            [
                [10, 1, 8, 48, 75],
                [22, 14, 9, 11, 34],
                [5, 17, 24, 37, 54],
                [41, 19, 3, 26, 59],
                [66, 72, 30, 29, 55]
            ]
        ]
        const result = determineFirstBingo(mockInput, mockBoards)
        expect(result).toEqual('Invalid input: Non-numeric value found in the boards input')
    })
})

