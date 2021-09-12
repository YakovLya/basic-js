import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let ans = {};
  for(let i = 0; i < domains.length; i ++){
    let now = "";
    domains[i] = '.' + domains[i];
    let prev = domains[i].length;
    let pos = domains[i].lastIndexOf('.');
    while (pos != -1){
      now += domains[i].slice(pos, prev);
      prev = pos;
      domains[i] = domains[i].slice(0, pos) + ',' + domains[i].slice(pos + 1);
      pos = domains[i].lastIndexOf('.');
      if (ans[now] === undefined)
        ans[now] = 0;
      ans[now] ++;
    }
  }
  return ans;
}