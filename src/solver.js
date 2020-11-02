/**
 * Sudoku Board solver
 *
 * @author Kevin Cederholm
 * @version 1.0.0
 */

'use strict'

const Algorithm = Object.freeze({
  SIMPLE: Symbol('simple'),
  BACKTRACK: Symbol('backtrack')
})

module.exports.Solver = { Solver, Algorithm }

function Solver (board, algorithm = Algorithm.BACKTRACK) {
  switch (algorithm) {
    case Algorithm.BACKTRACK:
      return new BacktrackSolver(board)

    case Algorithm.SIMPLE:
      return new SimpleSolver(board)

    default:
      console.log('Solving algorithm not found?')
      break
  }
}
