const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(mas) {
	let deep = 1;
        for (let val of mas) {
	    let deepNow=1;
            if (Array.isArray(val)) {
                deepNow+=this.calculateDepth(val);
		deep = Math.max(deepNow,deep);
            }
        }
        return deep;
    }
};