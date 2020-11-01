
/**
 * Main entry
 * Sudoku Solver
 *
 * @author Kevin Cederholm
 * @version 1.0.0
 */

'use strict'

const { Board, BoardParser } = require('./board')
const { BacktrackSolver } = require('./solver')

// const unsolved = '306508400520000000087000031003010080900863005050090600130000250000000074005206300'
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

const testBoard = BoardParser(multiString)
console.log('Unsolved Board:\n' + testBoard.render())
const solvingBoard = new BacktrackSolver(testBoard.board)

solvingBoard.solveBoard(0, 0)
console.log('Solved Board:\n' + new Board(solvingBoard.board).render())
