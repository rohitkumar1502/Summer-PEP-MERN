function sum(a = 0, b = 0){
    return a + b;
}

function mul(a = 1, b =1){
    return a*b;
}
console.log("Hello")

function add2 (a){
    const res = sum(a,2);
    return res;
}

// module.exports = [sum, mul];
module.exports = {sum, mul, add2};
// module.exports = function (a = 0, b = 0){
//     return a+b;
// }

