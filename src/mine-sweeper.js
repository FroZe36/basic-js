const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const columns = matrix[0].length;
  const result = [];


  for(let row = 0; row < rows; row++) {
    result.push([])
    for(let column = 0; column < columns; column++) {
      let count = 0;

      for(let i = -1; i <= 1; i++) {
        for(let j = -1; j <= 1; j++) {
          const newRow = row + i;
          const newColumn = column + j;

          if(newRow >= 0 && newRow < rows && newColumn >= 0 && newColumn < columns) {
            if(matrix[newRow][newColumn]) {
              count++
            }
          }
        }
      }

      if(matrix[row][column]) {
        count--
      }
      result[row].push(count)
    }
  }
  return result
}

module.exports = {
  minesweeper
};
