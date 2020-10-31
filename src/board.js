/**
 * Sudoku Board
 *
 * @author Kevin Cederholm
 * @version 1.0.0
 */

'use strict'

module.exports.Board = function Board (board = Array(81).fill(0)) {
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
