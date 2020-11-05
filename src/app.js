
/**
 * Main entry
 * Sudoku Moose
 *
 * @author Kevin Cederholm
 * @version 1.0.0
 */

'use strict'

const Board = require('./board')
const Solver = require('./solver')

const unsolved = '530070000600195000098000060800060003400803001700020006060000280000419005000080079'

console.log(unsolved)

const lol = Solver.Solve(Board.BoardParser(unsolved), Solver.Algorithm.BACKTRACK)

console.log(lol.board.render())
console.log('isSolved():' + lol.solveBoard())
console.log(lol.board.render())
