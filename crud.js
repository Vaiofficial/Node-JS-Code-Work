const { ifError } = require('assert');
const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname, 'crud');
const filepath = `${dirpath}/apple.txt`;

//WRITING FILE

// fs.writeFileSync(filepath , 'hey iam learning crud');


//READING FILE

// fs.readFile(filepath,'utf8',(err, item) => {
//     console.log(item);

// })


//APPEND IN A FILE

// fs.appendFile(filepath,'its my 3rd day of learning nodej',(err)=>
// {
//     if (!err) {
//         console.log("file is updated");
//     }
//     else{
//         console.log("not possible")
//     }
// }
// )

// RENAME FILENAME

// fs.rename(filepath , `${dirpath}/fruit.txt`,(err)=>{

//     if(!err){
//         console.log("rename complete");
//     }
// })

//DELETING A FILE

// fs.unlinkSync(`${dirpath}/fruit.txt`)