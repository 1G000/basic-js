const { NotImplementedError } = require("../extensions/index.js");

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
function deleteDigit(n) {
  n = n.toString();
  let firstHalf = "";
  let secondHalf = "";
  let result = [];
  let resultStr = "";
  for (let i = 0; i < n.length; i++) {
    if (i === 0) {
      resultStr = n.substring(1, n.length);
      result.push(+resultStr);
    } else {
      firstHalf = n.substring(0, i);
      secondHalf = n.substring(i + 1, n.length);
      resultStr = firstHalf + secondHalf;
      result.push(+resultStr);
    }
  }
  result = result.sort((a, b) => b - a);
  return result[0];
}

module.exports = {
  deleteDigit,
};
