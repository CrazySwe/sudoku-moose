
/**
 * Main entry
 * Sudoku Solver
 *
 * @author Kevin Cederholm
 * @version 1.0.0
 */

'use strict'

const { Board, BoardParser } = require('./board')

const existingBoardString = '000000004000000030000500001000000000000500000000000500000080000090000000000000000'
const multiString = `
5,3,0,0,7,0,0,0,0
6,0,0,1,9,5,0,0,0
0,9,8,0,0,0,0,6,0
8,0,0,0,6,0,0,0,3
4,0,0,8,0,3,0,0,1
7,0,0,0,2,0,0,0,6
0,6,0,0,0,0,2,8,0
0,0,0,4,1,9,0,0,5
0,0,0,0,8,0,0,7,9`

const emptyBoard = new Board()
const determinedBoard = new Board(existingBoardString.split(''))

console.log(BoardParser(existingBoardString).render())
console.log(BoardParser(multiString).render())
console.log(emptyBoard.render())
console.log(determinedBoard.render())
