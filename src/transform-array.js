const CustomError = require("../extensions/custom-error");

let obj =
{
    '--discard-next': function (array, i) {
        if (array[i + 1]!==undefined) array.splice(i, 2, '--Clear');
        else array[i] = '--Clear';
        return array;
    },
    '--discard-prev': function (array, i) {
        if (array[i - 1]!==undefined) array.splice(i - 1, 2, '--Clear');
        else array[i] = '--Clear';
        return array
    },
    '--double-next': function (array, i) {
        if (array[i + 1]!==undefined)
            array[i] = array[i + 1];
        else array[i] = '--Clear';
        return array;
    },
    '--double-prev': function (array, i) {
        if (array[i - 1]!==undefined)
            array[i] = array[i - 1];
        else array[i] = '--Clear';
        return array;
    }
}

module.exports = function transform(mas) {
    let array = [...mas];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] == 'string' && array[i].startsWith('--d')) {
            array = obj[array[i]](array, i);
        }
    }
    return array.filter(v => (v!=='--Clear'));
};
