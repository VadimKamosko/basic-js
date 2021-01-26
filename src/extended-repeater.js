const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, { repeatTimes = 1, separator = '+', addition = "", additionRepeatTimes = 1, additionSeparator = "|" }) {
    let rtr = '';
    for (let i = 0; i < repeatTimes; i++) {
        rtr += str;
        for (let j = 0; j < additionRepeatTimes; j++) {
            if (j == additionRepeatTimes-1)
                rtr += addition + separator;
            else rtr += addition + additionSeparator;
        }
    }
    return rtr.slice(0,-separator.length);
};
  