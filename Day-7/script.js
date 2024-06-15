// console.log("Start");

// function abc(x){
//     console.log(x*2);
//     temp(x/2);
// }

// abc(8);

// console.log("MID");

// function temp(x){
//     console.log(x/2);
// }
// console.log("END");

// CallBack and Promise

// function xyz(){
//     console.log("Inside XYZ");
//     function temp2(x){
//         console.log(x*x);
//     }
//     console.log("END");
//     temp2(12);
// }
// console.log("Start");
// xyz();

// const button = document.getElementsByTagName('button')[0];
// // button.addEventListener('click', cb);

// // function cb(){
// //     console.log("Button clicked");
// // }

// button.addEventListener('click', ()=> console.log("button clked"));
// document.getElementsByTagName('button')[0].addEventListener('click', ()=> console.log("button clked"));
// console.log("Start")
// const input = document.getElementsByTagName('input')[0];

// const cbd = function dbd(ev){
//     console.log("Input is", ev.target.value);
// }

// input.addEventListener('keyup', cbd);

// console.log("END")
// console.log("Start")
// const delay = 1000;

// const cb = ()=> {
//     console.log("CB is called");
// }

// setTimeout(cb, delay);
// console.log("END")

// console.log("Start");

// setTimeout(()=>{
//     console.log("CB Called")
//     setTimeout(() => {
//         console.log("Internal CB called")
//     }, 10000);
// },10000)

// console.log("END");

// async called in last

// console.log("Start");

// setTimeout(()=>{
//     console.log("A");
// },0);

// console.log("MID");

// function abc(){
//     console.log("B");
// }

// function efg(){
//     console.log("C");
//     setTimeout(()=>{
//         console.log("D");
//     },0);
// }

// setTimeout(abc,0);
// efg();
// console.log("END");

const pr = fetch("https://fakestoreapi.com/products/categories");
// console.log(pr);

// const cb= (e)=>{
//  console.log("Fech +", e)
//  e.json();
// }
// const cb1= (e)=>{
//  console.log("Fech -", e)
//  e.json();
// }

// pr.then(cb).catch(cb1);

// pr.then((res)=>{
//     const pr2 = res.json();
//     pr2.then((data)=>{
//         console.log(data);
//     })
// }).catch((e)=>{
//     console.log("fech --", e)
// })
const root = document.getElementById("root");

const API_Req = fetch("https://dummyjson.com/products");
API_Req.then((result) => {
  const convertData = result.json();
  convertData.then(rederUi);
}).catch((error) => {
  alert(error);
});

const rederUi = (data) => {
  const products = data.products;
  for (let i = 0; i < products.length; i++) {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
    <h3>${products[i].title}</h3>
    <p>${products[i].price}</p>
    <image src="${products[i].images}" height="200px" width ="200px">`
    ;
    root.appendChild(card);
  }
};
