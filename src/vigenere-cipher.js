import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {

  constructor(...args){
    if(args.length !== 0 && args[0] === false)
      this.isReverse = 1;
    else
      this.isReverse = 0;
  }

  encrypt(str, keyBad) {
    if (!str || !keyBad)
      throw Error('Incorrect arguments!');
    let key = "";
    while(key.length < str.length)
      key += keyBad;
    str = str.toUpperCase();
    key = key.toUpperCase();
    let j = -1;
    for(let i = 0; i < str.length; i ++){
      j ++;
      let sum = str.charCodeAt(i) - 65;
      if (sum < 0 || sum > 25){
        j --;
        continue;
      }
      sum += key.charCodeAt(j) - 65;
      sum = sum % 26;
      str = str.slice(0, i) + String.fromCharCode(sum + 65) + str.slice(i + 1);
    }
    if (this.isReverse){
      let splitStr = str.split("");
      let reverseArr = splitStr.reverse();
      str = reverseArr.join("");
    }
    return str;
  }
  decrypt(str, keyBad) {
    if (!str || !keyBad) 
      throw Error('Incorrect arguments!');
    let str = args[0];
    
    let keyBad = args[1];
    let key = "";
    while(key.length < str.length)
      key += keyBad;
    str = str.toUpperCase();
    key = key.toUpperCase();
    let j = -1;
    for(let i = 0; i < str.length; i ++){
      j ++;
      let sum = str.charCodeAt(i) - 65;
      if (sum < 0 || sum > 25){
        j --;
        continue;
      }
      sum -= key.charCodeAt(j) - 65;
      if (sum < 0)
        sum = sum + 26;
      str = str.slice(0, i) + String.fromCharCode(sum + 65) + str.slice(i + 1);
    }
    if (this.isReverse){
      let splitStr = str.split("");
      let reverseArr = splitStr.reverse();
      str = reverseArr.join("");
    }
    return str;
  }
}

