/**
 * Sudoku Board solver
 *
 * @author Kevin Cederholm
 * @version 1.0.0
 */

'use strict'

const Backtrack = require('./algorithms/backtrack')

const Algorithm = Object.freeze({
  SIMPLE: Symbol('simple'),
  BACKTRACK: Symbol('backtrack')
})

module.exports = { Solve, Algorithm }

/**
 * Solve function for sudoku board.
 *
 * @param {object} board - The board to solve.
 * @param {Algorithm} [algorithm=Algorithm.BACKTRACK] - Which algorithm to use.
 * @returns {object} - The solver object.
 */
function Solve (board, algorithm = Algorithm.BACKTRACK) {
  // this.board = board
  switch (algorithm) {
    case Algorithm.BACKTRACK:
      return new Backtrack(board)

    case Algorithm.SIMPLE:
      console.error('NOT IMPLEMENTED YET!')
      // return new SimpleSolver(board)
      break

    default:
      console.log('Solving algorithm not found?')
      break
  }
}
