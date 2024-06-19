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

 const parent = document.querySelector('.parent');
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

const secondLang = document.querySelector('li:nth-child(2');
// secondLang.textContent = 'Rohit';
secondLang.innerHTML = "Rohit";


