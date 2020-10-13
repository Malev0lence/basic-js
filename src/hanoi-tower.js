const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let a = {};
  const turns = (2 ** disksNumber) - 1;
  const seconds = Math.floor(turns / (turnsSpeed / 3600))

  a.turns = turns;
  a.seconds = seconds;
  
  return a;
};
