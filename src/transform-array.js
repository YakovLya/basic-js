import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if ((!(Array.isArray(arr))) || (!(arr instanceof Array)))
    throw new Error("'arr' parameter must be an instance of the Array!");
  let n = arr.length;
  let ans = [];
  let have = arr;
  for(let i = 0; i < n; i ++){
    if (arr[i] == '--discard-next'){
      have[i + 1] = -1;
    } else if (arr[i] == '--discard-prev'){
      if (i > 0 && have[i - 1] != -1)
        ans.pop();
    } else if (arr[i] == '--double-next'){
      if (i < n - 1)
        ans.push(have[i + 1]);
    } else if (arr[i] == '--double-prev'){
      if (i > 0 && have[i - 1] != -1)
        ans.push(have[i - 1]);
    } else if (have[i] != -1)
      ans.push(have[i]);
  }
  return ans;
}