let age = 18;
let usename1 = "Rohit";
let username2 = "Akansh";
let n = usename1 + " " + username2;
console.log(n);
let a = 10 + " " + usename1;
let b = username2 + 20;
let c = usename1 - 10;
console.log(a);
console.log(b);
console.log(c);
console.log(typeof age);
console.log(typeof c);
console.log(typeof b);

let v1 = "10";
let v2 = 10;

// let v1 = "Hello";  // double equal to check for the eqality of the values
// let v2 = "Hello";
// It can do type coercion
if (v1 == v2) {
  console.log("YES");
} else {
  console.log("NO");
}
// double equal to check for the eqality of the values and datatype

if (v1 === v2) {
  console.log("YES");
} else {
  console.log("NO");
}

let r1 = "Ajay";
let r2 = "Ankit";

let ans = `${r1} ${r2}`;
console.log(ans);

// Function

function nameofthefunction(x) {
  // function definition with function keyword
  console.log("We are function", x);
}
nameofthefunction("Rohit"); // function invocation

// Rohit is argument and x is parameter

//named Function assignment
const Abs = function nameofthe(x) {
  // function definition with function keyword
  console.log("We are assignment functionb", x);
};
Abs("Akansh");

// anonymous function assignment mean no name of the function
const Abs1 = function (x) {
  // function definition with function keyword
  console.log("no name of the function", x);
};
Abs1("Rohit");
// Arrow function assignment mean no name of the function
const Abs2 = (x) => {
  // function definition with function keyword
  console.log("Arrow", x);
};
Abs2("Rohit");

const Abs3 = (x) => console.log("rohit", x);

Abs3("Abhishek");

// sum(10, 20);
// mul(10, 20); // we cant initilize before the const function

function sum(a, b) {
  const asn = a + b;
  console.log(asn);
}
const mul = (a, b) => {
  const asn = a * b;
  console.log(asn);
};
sum(10, 20);
mul(10, 20);

if (10 == 10) {
  console.log("YES");
} else {
  console.log("NO");
}

const sumOfNumber = (a, b) => {
  if (a == undefined) {
    console.log(0);
  } else if (b == undefined) {
    console.log(a);
  } else {
    console.log(a + b);
  }
};
sumOfNumber();
sumOfNumber(10);
sumOfNumber(10, 20);

function sumNum(a = 0, b = 0) {
  console.log(a + b);
}

sumNum();

// Objects

// collection of properties

const obj1 = new Object();
const obj2 = {};
obj1.name = "Rohit";
obj1.City = "Muz";

obj2.name = "Ankit";
obj2.City = "Noida";

console.log(obj1);
console.log(obj2);

const Obj = {
  name: "Rohit",
  age: 13,
  city: "Muzaffarpur", // mostely use in JSON  "city":"Muzaffarpur"
  10: 10,
  20: 200,
};
const vr = "city";

console.log(Obj);
console.log(Obj.name);
console.log(Obj[20]);

//const input = prompt(); // Broser  alert inputbox
//The prompt() method displays a dialog box that prompts the user for input.

//The prompt() method returns the input value if the user clicks "OK", otherwise it returns null.

//console.log(Obj[input]);
console.log(Obj[vr]);

const arr = new Array();
const arr1 = ["rohit", 12, "100"];
console.log(arr1);
console.log(arr1[0]);
console.log(arr1[2]);

const o1 = {
  name: "Rohit",
};

const o2 = {
  name: "Kumar",
};

if (o1 == o2) {
  console.log("YES");
} else {
  console.log("NO");
}

// const o3 = {
//     name: "Aman"
// }
// o3.name = "Raj"

// o3 = {
//     name : "Rohit",
// }

// console.log(o3);

// Shallocopy

// const abc1 = {
//     name: "rohit",
//     age : 14,
// }

// const abc2 = abc1;
// abc2.name = "Akansh";
// console.log(abc1);
// console.log(abc2);

// let abc3 = {
//     name: "abhishek",
//     age: 24,
// }

// let abc4= abc3;

// abc4.name = "Ankit";
// console.log(abc3);
// console.log(abc4);

// const arr3 = [
//     'rohit',
//     'akansh',
//     'abhishek',
//     'tarun'
// ];
const arr3 = {
  0: "rohit",
  1: "Akansh",
};

for (i = 0; i < 4; i++) {
  console.log(arr3[i]);
}

for(let i in arr3){
    console.log(arr3[i]);
}

// for(let i of arr3){
//     console.log(i)   // not run on object
// }

console.log(arr3[1])

//////////////////////////DOM manipulation///////////////

console.log(window);
console.log(document);
console.dir(document);

// const body = document.getElementsByTagName('body');
// console.log(body);
// const Div = document.getElementsByTagName('div');
// console.dir(Div[0]);
// Div[0].innerText = 'hsidoso';

const d1 = document.getElementsByClassName('container');
console.dir(d1);
// d1[0].style = "color: red";
// d1[0].style.color = 'red';
// d1[0].style.backgroundColor = 'red';

const d3 = document.getElementById('id1');
d3.style.color = 'red';

const d5 = document.querySelectorAll('div'); // apply only first tag or class
d5[0].style.color = 'orange'

