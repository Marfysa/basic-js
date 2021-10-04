import { NotImplementedError } from '../extensions/index.js';

/** 
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
 
export default function getSumOfDigits(n) {
  let sum = 0;
  console.log(n);
  if (n >= 10) {
      let a = (n % 10);
      let b = Math.floor(n/10);
      sum = a + b;
  }
  if(n >= 100){
      let a = (n % 100);
      let b = Math.floor(n/100);
      let c = Math.floor(Math.floor(n/10)%10);
      sum = a + b + c;
  }
  if (sum >= 10 && sum <= 18) {
    let d = (n % 10);
    let i = Math.floor(n/10);
    let h = d + i;
    return h;
  }
  // remove line with error and write your code here
  return sum;

}
  
