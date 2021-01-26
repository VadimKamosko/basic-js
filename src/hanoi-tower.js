const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(discks,speedTime) {
    let turns = 2**discks-1;
    let time = Math.floor(3600/speedTime*turns);  
    return {turns:turns,seconds:+time};
};
