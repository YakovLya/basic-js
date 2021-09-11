import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let ans = 0;
  let a = new Array(26);
  let b = new Array(26);
  for(let i = 0; i < 26; i ++)
    a[i] = b[i] = 0;
  for(let i = 0; i < s1.length; i ++)
    a[s1.charCodeAt(i) - 'a'.charCodeAt(0)] ++;
  for(let i = 0; i < s2.length; i ++)
    b[s2.charCodeAt(i) - 'a'.charCodeAt(0)] ++;
  for(let i = 0; i < 26; i ++)
    ans += Math.min(a[i], b[i]);
  return ans;
}
