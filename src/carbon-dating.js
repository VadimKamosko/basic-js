const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(num) {
      if(isNaN(num) || typeof num!='string' || num==0) return false;
      let ans =  Math.ceil(((Math.log(15/num))/(0.693/5730)));
    return ans>0?ans:false;
};
