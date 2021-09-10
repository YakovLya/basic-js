import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  if (str.length < 1)
    return "";
  let ans = "";
  let k = 1;
  let c = str[0];
  for(let i = 1; i < str.length; i ++)
    if (str[i] == c)
      k ++;
    else{
      if (k > 1)
        ans = ans + k.toString() + c;
      else
        ans += c;
      c = str[i];
      k = 1;
    }
  if (k > 1)
    ans = ans + k.toString() + c;
  else
    ans += c;
  return ans;
}
