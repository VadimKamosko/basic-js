const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(mas) {
    if(!Array.isArray(mas)) return false;
    return mas.map((v,i,a)=>{
        if(typeof v == 'string')
        {
            return v.trim().charAt(0).toUpperCase();
        }
        else return '';
    }).sort().join('') || 'NA'
};
