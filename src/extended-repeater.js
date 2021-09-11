import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let ans = "";
  str = String(str);
  let add = options.addition;
  let sep = options.separator;
  let rep = options.repeatTimes;
  let addrep = options.additionRepeatTimes;
  let addsep = options.additionSeparator;
  if (!rep) rep = 1;
  if (!addrep) addrep = 1;
  if (add === undefined)
    add = "";
  if (!sep) sep = '+';
  if (!addsep) addsep = '|';
  for(let i = 0; i < rep; i ++){
    ans += str;
    if (add !== undefined)
      for(let j = 0; j < addrep; j ++){
        ans += add;
        if (j < addrep - 1)
          ans += addsep;
      }
    if (i < rep - 1)
      ans += sep;
  }
  return ans;
}