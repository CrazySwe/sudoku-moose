
/**
 * Sudoku Board
 *
 * @author Kevin Cederholm
 * @version 1.0.0
 */

'use strict'

exports.newBoard = newBoard

/**
 * Creates a new board filled with zeros.
 *
 * @returns {Array} - An Array representing the board.
 */
function newBoard () {
  return Array(81).fill(0)
}
