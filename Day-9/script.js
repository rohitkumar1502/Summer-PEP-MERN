// const student = {
//     userName : "Rohit",
//     rollno : 12,
//     city : 'Muzaffarpur',
//     hobbies: ['Paintain', 'Dancing', 'Drawing']
// }
/*
console.log(student.userName);

const {userName, city} = student;

console.log(userName);

const fruits = ['Banana', 'Apple', 'Orange'];

console.log(fruits[0]);

const [, i2,i3] = fruits;  // if we skipp the first index then we use ","
console.log(i2, i3);

const {hobbies} = student;
hobbies[0] = 'Studing';
console.log(hobbies);
console.log(student);

// rest -> to pack the values 
// spread -> unpack the values

const student2 = student;
student2.userName = 'Akansh';
*/
/*
console.log(student);
// console.log(student2);

const s2 = {...student};

s2.userName = 'Ajay';
s2.hobbies[0] = 'Playing';

console.log(student);
console.log(s2);
*/

/*
const sum = (...arr) => {
    //console.log(arr)
    // console.log(arguments);
    const final = arr.reduce((acc, elem, idx) =>{
       console.log(acc,elem, idx);
    //    return acc + elem
       return acc - elem

    }, -1)
    console.log("➢", final)
}

sum(10,20,30)

*/
/*
console.log("Start");

async function getData(){
    console.log("Inside");
    const res = await fetch('https://dummyjson.com/products');
    console.log("Step 1");
    const data = await res.json();
    console.log(data);
}

getData();
console.log("End")


function consoleLog (){
console.log("Done");
}

const ans = ['1','2', '3', '4'].map(consoleLog);
*/

function calc(s, ...arr){
    let ans;
    if(s=='sum'){
       ans = arr.reduce((acc,elem) => acc+elem)
    }
    else{
        ans = arr.reduce((acc, elem) => acc*elem);
    }
    return ans;
}

const a1 = calc('sum', 10,20,30);
const a2 = calc('mul', 10,20,30);
const a3 = calc('mul', 10,20);
console.log(a1, a2, a3);


