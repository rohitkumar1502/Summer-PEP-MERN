// promise is object , which represnts eventual complition or failier of an asynchronous operation and it's resulting values

// states of promise:
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.
/*
console.log("Start")
const pr = new Promise((resolve, reject) => {
  const flag = true;
  if (flag === true) {
    setTimeout(()=> resolve(["Mango", "Apple"]), 4000)
    
  } else {
    reject("Not done");
  }
});
console.log("MID")
setTimeout(() => console.log("Done"), 4000);
pr.then((value) => console.log(value)).catch((e) => console.log(e));

console.log("END");

*/
/*
let count = 0;

let id = 0;

const cb = ()=> {
    count++;
    console.log("Done", count);
    if(count==4){
        clearInterval(id);
    }

};
const time = 1000;

id = setInterval(cb, time);

*/

const arr2 = [1,2,3,[4,[5]],6,7];

console.log(arr2.flat(Infinity));

// const arr = ["A", "B", "C", "D", "F"];

// const res1 = arr.forEach((a,b,c) => {
//     //console.log(a,b,c)
//     return "OK";
// })
const arr = ["A", "BB", "C", "ND", "F"];
// const res2 = arr.map((elem, b, c) => {
//     //console.log(elem, b, c);
//     return elem;
// })
const res3 = arr.map((a) => {  // maximum three paramiter we use like (a,b,c)
   if(a.length == 1){
    return true
   }
   else{
    return false
   }
})

console.log(res3)
// console.log(res3)
// if(arr == res2) {
//     console.log("OK")
// }else{
//     console.log("NOT oK")
// }
