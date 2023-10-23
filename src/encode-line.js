const { NotImplementedError } = require("../extensions/index.js");

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
function encodeLine(str) {
  let counter = 0;
  let prevSymbol = "";
  let result = "";
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char !== prevSymbol) {
      if (counter > 1) {
        result = `${result}${counter}`;
      }
      result = `${result}${prevSymbol}`;
      counter = 1;
    } else {
      counter++;
    }
    prevSymbol = char;
  }
  if (counter > 1) {
    result = `${result}${counter}`;
  }
  result = `${result}${prevSymbol}`;

  return result;
}

module.exports = {
  encodeLine,
};
