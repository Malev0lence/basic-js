const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!arr || !Array.isArray(arr)) throw new Error;

  let arrClone = [];
  arr.forEach(element => {
    arrClone.push(element);
  });

  let subArr = [];

  arrClone.forEach((item, index) => {
    if (item === '--double-next') {
      if (arrClone[index + 1] === undefined) return;
      subArr.push(arrClone[index + 1]);
    } else if (item === '--double-prev') {
        if (arrClone[index - 1] === undefined) return;
        subArr.push(arrClone[index - 1]);
    } else if (item === '--discard-prev') {
        if (arrClone[index - 1] === undefined) return;
        subArr.pop(arrClone[index - 1]);
    } else if (item === '--discard-next') {
        if (arrClone[index + 1] === undefined) return;
        delete arrClone[index + 1];
    } else {
      subArr.push(arrClone[index])
    }
  });
  return subArr;
}