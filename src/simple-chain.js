const CustomError = require("../extensions/custom-error");

let chainMaker={
    mas: [],
    getLength : function()
    {
        return this.mas.length;
    },
    addLink : function(value)
    {
        this.mas.push(value+"");
        return this;
    },
    removeLink : function(pos)
    {
        if(pos>0 && pos<this.mas.length)
        {
            this.mas.splice(pos-1,1);
            return this;
        }
	this.mas=[];
        throw new Error("Nope");
    },
    reverseChain : function()
    {
        this.mas = this.mas.reverse();
        return this;
    },
    finishChain : function()
    {
        let temp=this.mas;
        this.mas=[];
        return temp.map((val,i)=>{
            return `( ${val} )~~`;
        }).join('').slice(0,-2);
    }
};

module.exports = chainMaker;
