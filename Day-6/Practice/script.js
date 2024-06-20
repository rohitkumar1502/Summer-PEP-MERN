// .innerText // hidden part not visible
// .textContent // hidden part visible
// .innerHTML
// let some =document.querySelector('h1');
// let some =document.querySelectorAll('h1');
// let some = document.querySelectorAll('h1')[1];
// let some = document.querySelectorAll('#title');
// let some = document.querySelectorAll('.heading');
// let some = document.querySelectorAll('input[type="password');
// console.log(some);

// const ul = document.querySelector('ul');

// const colorChange = ul.querySelector('li');
// console.log(colorChange)

// colorChange.style.backgroundColor = 'green';

// colorChange.innerText = 'five'

// colorChange.style.color = 'black'

// const tempLilist = document.querySelectorAll('li');

// // tempLilist[1].style.color = 'green'
// tempLilist.forEach((li)=>{
//     li.style.backgroundColor = 'yellow';
//     li.style.color = 'black';
// })

// const list = document.getElementsByClassName('list');

// const myConvetedArray = Array.from(list);

// console.log(myConvetedArray);

// myConvetedArray.forEach(function(li){
//     li.style.color = 'orange';
// })

// const parent = document.querySelector('.parent');
// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[1].innerHTML);

// for(let i = 0; i <parent.children.length; i++){
//     // console.log(parent.children[i].textContent)
//     console.log(parent.children[i].innerHTML)
// }
// parent.children[1].style.color = 'red';

// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);

// const dayOne = document.querySelector(".day");
// console.log(dayOne)
// console.log(dayOne.parentElement);
// console.log(dayOne.nextElementSibling.innerHTML);

//console.log("NODES: ", parent.childNodes);  // nodes like tree like structure they also count the Enter
/*
const div = document.createElement('div');
console.log(div);
div.className = 'main';
// div.id = 'main-page';
div.setAttribute('title', "generated title");

div.setAttribute('class', 'Rohit');
div.style.color = "red";
div.style.backgroundColor = 'orange';
div.style.padding = '12px';

// div.innerText = 'Rohit Kumar';
const addText = document.createTextNode("Rohit Kumar");
div.appendChild(addText);

document.body.appendChild(div);
*/
/*
const addLang = (element)=>{
    const ulClass = document.querySelector('.language')
    const liText = document.createElement('li');
    liText.innerHTML = `${element}`;
    ulClass.appendChild(liText);
}
addLang("Python");

const Optimize = (launname) => {
    const li = document.createElement('li');

    li.appendChild(document.createTextNode(launname));

    document.querySelector('.language').appendChild(li);


}
Optimize("Golang");
//edit
const secondLang = document.querySelector('li:nth-child(2');
// secondLang.textContent = 'Rohit';
// secondLang.innerHTML = "Rohit";
const newLi = document.createElement('li');

newLi.textContent = 'Monu';
secondLang.replaceWith(newLi);

const firstLang = document.querySelector("li:first-child");
firstLang.outerHTML = '<li>Rohit Kumar</li>';

//remove
const lastLang = document.querySelector('li:last-child');
lastLang.remove();


*/

// Filter map and reduce
/*
const coding = ["JS", "C++", "Ruby", "Java", "Python"];

 const values = coding.forEach((item) => {
    console.log(item);
    return item;
})

console.log(values);
*/

// const myNums = [1,2,3,4,5,6,7,8,9,10];
// const newNums = myNum.filter((num) => num > 4);
// const newNums = myNum.filter((num) => {
//    return num > 4
// });
// console.log(newNums);

// const newNums = [];

// myNums.forEach((num)=> {
//     if(num > 4){
//         newNums.push(num);
//     }
// })

// console.log(newNums);
/*

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const historyBook = books.filter((book)=> book.genre === 'History');
const historyBook1 = books.filter((book)=> {
    return book.publish >= 1980 && book.genre ==='Fiction'
});
console.log(historyBook);
console.log(historyBook1);

*/
/*
const myNumber = [1,2,3,4,5,6,7,8,9,10];

const newNumber = myNumber
.map((element) => element * 10)
.map((element) => element +1)
.filter((element)=> element >= 40)
console.log(newNumber);


//const myNumber1 = myNumber.reduce((acc, cure) => acc + cure, 0);  //by default start with 1 index value if we not pass the intial value
const myNumber1 = myNumber.reduce((acc, cur) => {
    console.log(`acc: ${acc}, cur: ${cur}`)
    return acc + cur;
}, 3)  // if we start with add 0 number we intailize the value with 0
console.log(myNumber1);
*/
/*
const shopingCard = [
    {
        itemName: 'JS Courese',
        price: 999
    },
    {
        itemName: 'C++ Course',
        price: 2999 
    },
    {
        itemName: 'Django Course',
        price: 4099 
    },
    {
        itemName: 'JAVA Course',
        price: 799 
    },
]

const productPrice = shopingCard.reduce((acc, item)=> acc + item.price, 0);
console.log(productPrice);
*/

//Event

//document.getElementById("owl").onclick = () => alert("OWL Image Cliked");
document.getElementById('owl').addEventListener('dblclick' ,() => alert("Clicked"), false)  // default false hota hai

// type, timestamp, defaultPrevented, target, toElement, currentTarget, clientX, cclientY, screenX, screenY, altkey, ctrlkey, shiftkey,keyCode  

//event propogation
