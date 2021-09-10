import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let ans;
  let pos = -1;
  let a = n.toString();
  for(let i = 0; i < a.length - 1; i ++)
    if (a.charCodeAt(i) < a.charCodeAt(i + 1) && pos == -1)
      pos = i;
  if (pos == -1)
    a = a.slice(0, a.length - 1);
  else 
    a = a.slice(0, pos) + a.slice(pos + 1, a.length);
  ans = Number(a);
  return ans;
}