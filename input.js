const { error } = require('console');
const fs = require('fs');
const path = require('path');

const input = process.argv;

// if (input[2] =='add') {

//     fs.writeFileSync(input[3],input[4]);
// }
// else if(input[2]=='remove')
// {
//     fs.unlinkSync(input[3]);
// }
// else{
//     console.log("Invalid Input");
// }

const dirpath = path.join(__dirname , 'files');

for(let i=0;i<5;i++)
{
    fs.writeFileSync(dirpath+`/hello ${i}.txt`,"I made 5 Files");
}

fs.readdir(dirpath , (err,files)=>{

    files.forEach((item)=>{
        console.log(item)
    })

})