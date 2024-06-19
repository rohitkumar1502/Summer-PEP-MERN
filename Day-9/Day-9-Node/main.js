// const [summ, mull] = require('./myMath.js');
const {sum, mul, add2} = require('./myMath.js');
const figlet = require("figlet");

// const res = arr[0](9,10);

const res = add2(10);
const res1 = mul(9,10);

console.log(res);
console.log(res1);

figlet("Rohit Kumar", (error, data)=> {
    if(error){
        console.log(error)
    }
    else{
        console.log(data)
    }
});