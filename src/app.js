
/**
 * Main entry
 * Sudoku Solver
 *
 * @author Kevin Cederholm
 * @version 1.0.0
 */

'use strict'

const Board = require('./board')

const sudokuBoard = new Board()

console.log(sudokuBoard.toString(','))
console.log(sudokuBoard.toString())
console.log(sudokuBoard.render())
