/**
 * Sudoku Board
 *
 * @author Kevin Cederholm
 * @version 1.0.0
 */

'use strict'

module.exports.Board = Board
module.exports.BoardParser = BoardParser

function Board (board = Array(81).fill(0)) {
  this.board = board

  this.toString = function (separator = '') {
    return this.board.reduce((acc, val, index) => {
      return (index === 0) ? (acc += val) : (acc += separator + val)
    }, '')
  }

  this.render = function () {
    return this.board.reduce((acc, val, index) => {
      return (acc += `[${val}]` + (((index + 1) % 9 === 0) ? '\n' : ''))
    }, '')
  }
}

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
  // return new this.Board(board)
}
