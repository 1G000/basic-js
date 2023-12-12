const { NotImplementedError } = require("../extensions/index.js");

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let turnsQty = Math.pow(2, disksNumber) - 1;
  let turnSpeed = 3600 / turnsSpeed;
  let timeSpent = Math.trunc(turnSpeed * turnsQty);

  let result = { turns: turnsQty, seconds: timeSpent };
  return result;
}

module.exports = {
  calculateHanoi,
};
