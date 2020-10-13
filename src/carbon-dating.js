const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(finalActivity) {
  if (typeof finalActivity !== 'string') {
    return false;
  }
  
  finalActivity = parseFloat(finalActivity);

  if (isNaN(finalActivity) || finalActivity <= 0 || finalActivity >=MODERN_ACTIVITY) {
    return false;
  }
  
  if (typeof finalActivity === 'number') {
    const A_0 = MODERN_ACTIVITY;
    const A = parseFloat(finalActivity);
    const k = (0.693 / HALF_LIFE_PERIOD);

    const t = (Math.log(A_0 / A)) / k;

    return Math.ceil(t);
  }
  return false;
  
};
