import { NotImplementedError } from '../extensions/index.js';


export default {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if (value === '')
      this.arr.push("( )~~");
    else
      this.arr.push(`( ${value} )~~`);
    return this;
  },
  removeLink(position) {
    if ((isNaN(position)) || (position <= 0) || (position > this.arr.length)){
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.arr = this.arr.slice(0, position - 1).concat(this.arr.slice(position));
    return this;
  },
  reverseChain() {
    this.arr = this.arr.reverse();
    return this;
  },
  finishChain() {
    let ans = this.arr.join("");
    ans = ans.slice(0, ans.length - 2);
    this.arr = [];
    return ans;
  }
};