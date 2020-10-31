
/**
 * Main entry
 * Sudoku Solver
 *
 * @author Kevin Cederholm
 * @version 1.0.0
 */

'use strict'

const SudokuBoard = require('./sudokuboard')

const sudokuBoard = new SudokuBoard()

console.log(sudokuBoard.toString(','))
console.log(sudokuBoard.toString())
console.log(sudokuBoard.render())
