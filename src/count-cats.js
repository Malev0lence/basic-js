const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  arr = arr.flat();
  let sum = 0;
  let catEars = '^^';
  let counter = arr.indexOf(catEars);
  
  while (counter !== -1) {
    sum++;
    counter = arr.indexOf(catEars, counter + 1);
  }
  return sum;
};
