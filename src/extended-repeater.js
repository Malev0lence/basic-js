const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str += '';
  if ('separator' in options === false) options.separator = '+';
  if ('additionSeparator' in options === false) options.additionSeparator = '';
  if ('addition' in options === false) options.addition = '';
  if ('repeatTimes' in options === false || options.repeatTimes === undefined) options.repeatTimes = 1;
  if ('additionRepeatTimes' in options === false || options.additionRepeatTimes === undefined) options.additionRepeatTimes = 0;

  let subArr = [];
  for (let i = 0; i < options.repeatTimes; i++) {
    subArr.push(str);
  }

  if (options.additionRepeatTimes !== 0) {
    subArr = subArr.map((item) => {
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      item = item + options.addition + options.additionSeparator;
    }
    return (options.additionSeparator.length !== 0) ? item.slice(0, -options.additionSeparator.length) : item;
  })
  } else {
    subArr = subArr.map((item) => {
    return item + options.addition;
  })
  }

  subArr = subArr.join(options.separator);
  return subArr
};
  