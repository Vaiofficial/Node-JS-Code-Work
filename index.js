const app = require('./app')
const color = require('colors');
console.log(app.y)

arr = [1,2,3,4,5,6,7,71];
console.log(arr);

let data = arr.filter((item)=>{
    return item>=5;
   
})
console.log(data)

// const fs = require('fs');
// fs.writeFileSync("read a book ");

console.log(__dirname)
console.log(__filename)

//USING COLORS PACKAGE 

console.log("hello vaibhav".green);


// WORKING WITH NODEMON

console.log("nodemon tutorial")
console.log("Vaibhav Talks - Coding")