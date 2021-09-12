import { NotImplementedError } from '../extensions/index.js';

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
export default function minesweeper (matrix) {
  let n = matrix.length;
  let m = matrix[0].length;
  let ans = new Array(n);
  for(let i = 0; i < n; i ++){
    ans[i] = new Array(m);
    for(let j = 0; j < m; j ++){
      let sum = 0;
      if (i > 0 && matrix[i - 1][j - 1] === true) sum ++;
      if (i > 0 && matrix[i - 1][j] === true) sum ++;
      if (i > 0 && matrix[i - 1][j + 1] === true) sum ++;
      if (matrix[i][j + 1] === true) sum ++;
      if (i < n - 1 && matrix[i + 1][j + 1] === true) sum ++;
      if (i < n - 1 && matrix[i + 1][j] === true) sum ++;
      if (i < n - 1 && matrix[i + 1][j - 1] === true) sum ++;
      if (matrix[i][j - 1] === true) sum ++;
      ans[i][j] = sum;
    }
  }

  return ans;
}