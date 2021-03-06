/**
 * Sudoku Board solver
 *
 * @author Kevin Cederholm
 * @version 1.0.0
 */

'use strict'

module.exports = Backtrack

/**
 * Backtrack algorithm implementation.
 *
 * @param {object} board - The board to solve.
 * @returns {object} - The backtrack solver object.
 */
function Backtrack (board) {
  /**
   * @type {object} - A Board object.
   */
  this.board = board

  this.solveBoard = function (row = 0, col = 0) {
    // Check out of bounds after last square.
    if (row >= 8 && col >= 9) {
      return true
    }

    // Move to next row when reached row end.
    if (col === 9) {
      row++
      col = 0
    }

    // Box needs to be "empty" else move to the next square
    if (this.board.board[((row * 9) + col)] > 0) {
      return this.solveBoard(row, col + 1)
    }
    // Try all digits between 1..9.
    for (let digit = 1; digit <= 9; digit++) {
      if (this.isSafe(row, col, digit)) {
        this.board.board[((row * 9) + col)] = digit
        // try solve rest of board with that digit.
        if (this.solveBoard(row, col + 1)) {
          return true
        }
      }
      // Reset if that digit did not work.
      this.board.board[((row * 9) + col)] = 0
    }
    return false
  }

  this.isSafe = function (row, col, digit) {
    // Check same row.
    for (let x = 0; x <= 8; x++) {
      if (this.board.board[((row * 9) + x)] === digit) { return false }
    }

    // Check same column.
    for (let y = 0; y <= 8; y++) {
      if (this.board.board[((y * 9) + col)] === digit) { return false }
    }

    // Check same 3x3 reqion.
    // Get top corner of region first.
    const topRow = row - (row % 3)
    const topCol = col - (col % 3)
    for (let y = 0; y < 3; y++) {
      for (let x = 0; x < 3; x++) {
        if (this.board.board[((x + topRow) * 9) + (y + topCol)] === digit) {
          return false
        }
      }
    }
    return true
  }

  return false
}
