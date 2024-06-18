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

const list = document.getElementsByClassName('list');

const myConvetedArray = Array.from(list);

console.log(myConvetedArray);

myConvetedArray.forEach(function(li){
    li.style.color = 'orange';
})