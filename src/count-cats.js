const CustomError = require("../extensions/custom-error");

module.exports = function countCats(mas) {
  //let masCats=mas.join().match(/\^\^/gi);
  //return masCats?masCats.length : 0;
  let count = 0;
  for(row of mas)
	for(val of row)
		if(val==='^^')
			count++;
  return count;
};
