const CustomError = require("../extensions/custom-error");

let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let table = [];
function createTable() {
    for (let i = 0; i < arr_EN.length; i++) {
        let row = [];
        for (let j = i; j < arr_EN.length; j++) {
            row.push(arr_EN[j]);
        }
        p = 0;
        while (row.length != 26) {
            row.push(arr_EN[p]);
            p++;
        }
        table.push(row);
    }
}
createTable();

class VigenereCipheringMachine {
    constructor(direct = true) {
        this.direct = direct;
    }
    encrypt(str, key) {
	if(!str || !key) throw new Error('Na');
        let short = str.replace(/ /gi, '');
        let keyss = key.repeat(Math.ceil(short.length / key.length));
	if(keyss.length>str.length) keyss = keyss.slice(0, short.length - keyss.length);
        let answer = '';
        for (let i = 0,j=0; i < keyss.length,j<str.length; i++,j++) {
            let index = arr_EN.indexOf(keyss.charAt(i).toUpperCase());
            let jindex = arr_EN.indexOf(str.charAt(j).toUpperCase());
            if (table[index] && table[index][jindex])
                answer += table[index][jindex];
            else {
                answer += str.charAt(j);
		if(str.charAt(j)==" ")i--;
            }
        }
        if(!this.direct)
            return answer.split('').reverse().join('');
        return answer;
    }
    decrypt(str,key) {
	if(!str || !key) throw new Error('Na');
        let short = str.replace(/ /gi, '');
        let keyss = key.repeat(Math.ceil(short.length / key.length));
        if(keyss.length>str.length) keyss = keyss.slice(0, short.length - keyss.length);
        let answer = '';
        for (let i = 0,j=0; i < keyss.length,j<str.length; i++,j++) {
            let index = arr_EN.indexOf(keyss.charAt(i).toUpperCase());
            if (table[index] && arr_EN[table[index].indexOf(str.charAt(j))])
                answer += arr_EN[table[index].indexOf(str.charAt(j))];
            else {
                answer += str.charAt(j);
		if(str.charAt(j)==" ")i--;
            }
        }
        if(!this.direct)
            return answer.split('').reverse().join('');
        return answer;
    }
}

module.exports = VigenereCipheringMachine;
