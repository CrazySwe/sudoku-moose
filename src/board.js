/**
 * Sudoku Board
 *
 * @author Kevin Cederholm
 * @version 1.0.0
 */

'use strict'

/**
 * Exports.
 */
module.exports.Board = Board
module.exports.BoardParser = BoardParser

/**
 * Creates a Board instance that represents a Sudoku Board.
 *
 * @param {Array} board - Array representing the Sudoku Board
 */
function Board (board = Array(81).fill(0)) {
  /**
   * The Array representing the Board.
   *
   * @type {Array}
   */
  this.board = board

  /**
   * Creates a string representing the board.
   *
   * @param {string} separator - Separator to add between digits of the Board.
   * @returns {string} - String representing the Board.
   */
  this.toString = function (separator = '') {
    return this.board.reduce((acc, val, index) => {
      return (index === 0) ? (acc += val) : (acc += separator + val)
    }, '')
  }

  /**
   * Creates a string formatted to be shown in the terminal.
   *
   * @returns {string} - Returns a nicely formatted string of the Board for the terminal.
   */
  this.render = function () {
    return this.board.reduce((acc, val, index) => {
      return (acc += `[${val}]` + (((index + 1) % 9 === 0) ? '\n' : ''))
    }, '')
  }
}

/**
 * Parses a string to a Board object.
 *
 * @param {string} boardString - The string to parse.
 * @param {string} emptyChar - The character that represents an empty field.
 * @param {string} separator - If the string has custom separator between digits.
 * @returns {Board} - The resulting board object.
 */
function BoardParser (boardString, emptyChar = '0', separator = '') {
  const parsedString = boardString.replace(/(\r\n|\n|\r|,)/gm, '')
  if (parsedString.length < 81) {
    throw new Error('Expected amount of 81 digits.')
  }
  const board = parsedString.split(separator).map(char => {
    if (emptyChar === char) {
      return 0
    }
    return Number.parseInt(char)
  })
  return new Board(board)
}
