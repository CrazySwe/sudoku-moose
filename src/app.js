
/**
 * Main entry
 * Sudoku Solver
 *
 * @author Kevin Cederholm
 * @version 1.0.0
 */

'use strict'

const board = require('./board.js')

const sudokuBoard = board.newBoard()

console.log(sudokuBoard.toString())
