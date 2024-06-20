/*
const fs = require("fs");
console.log("Start")
const data = fs.readFileSync('./Text.txt');

console.log(data);  //<Buffer 41 42 43 44>  THIS IS HEXA FALUE OF ASCII Table VALUE OF CAPITAL A;

const text = data.toString();  //sync -> Blocking operation mostely we avoiding to use
console.log(text);
console.log("MID")
const data2 = fs.readFileSync('./Text.txt', {encoding: "utf8"});
console.log(data2);

console.log("END");

*/

const fs = require("fs");
/*
console.log("Start")
fs.readFile('./Text.txt', {encoding: "utf8"}, (err, data)=>{
    if(err)console.log("Error occures", err);
    else console.log(data);

})

console.log("END");
*/
// console.log("Start");
// const res = fs.writeFileSync('./newFile.txt', "Rohit Kumar", );
// console.log(res);
// console.log("END");

/*
console.log("Start");
fs.writeFile('./newFile.txt', "Rohit Gupta", (err, data)=> {
    console.log(err, data)
} );

console.log("END");

*/
/*
const fsPromises = require("fs/promises");
console.log("Start");
fsPromises.readFile('./Text.txt', {encoding: 'utf8'}).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log("Err", err);
})
console.log("END");
*/
// Race Condition
// WriteFile -> Empty all the contnet then write
// AppendFile -> Write below fater the wrriten file
/*
fsPromises.writeFile("./textfileWrite.txt", "Dummy data1\n").then(()=>{
    console.log("Writing Done");
}).catch((err)=>console.log(err))

fsPromises.appendFile("./textfileAppend.txt", "Dummy data1\n").then(()=>{
    console.log("Append Done");
}).catch((err)=>console.log(err))
*/

const fsPromises = require("fs/promises");

const getObjectById = (id, arr) => {
    // for(let i =0; i< arr.length; i++){
    //     if(arr[i].id === id){
    //         return arr[i];
    //     }
    // }

    // const res = arr.filter((elem)=>{
    //     if(elem.id == id) return true;
    //     else return false;
    // })
    // return res;

    const res = arr.find((elem)=>{
        if(elem.id == id) return true;
        else return false;
    })
    return res;
}

const pr = fsPromises.readFile("./data.json");
pr.then((data) => {
  const text = data.toString();
  const arr = JSON.parse(data);
  console.log(arr);
  // let mt = 0, st = 0;
  // for(let i =0; i<arr.length; i++){
  //     mt+= arr[i].MathScore;
  //     st+= arr[i].ScienceScore;
  // }
  // console.log("Maths score is : ", mt);
  // console.log("Science score is : ", st);
  const obj = getObjectById(23, arr);
  console.log(obj);
}).catch((err) => console.log(err));
