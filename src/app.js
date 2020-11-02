
/**
 * Main entry
 * Sudoku Moose
 *
 * @author Kevin Cederholm
 * @version 1.0.0
 */

'use strict'

const { Board, BoardParser } = require('./board')
const { Solver, SolveAlgorithm } = require('./solver')

const unsolved = '530070000600195000098000060800060003400803001700020006060000280000419005000080079'

console.log(unsolved)
