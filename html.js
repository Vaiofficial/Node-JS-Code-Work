const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.join(__dirname, 'public')

// app.use(express.static(publicPath));

app.set('view engine', 'ejs');


app.get("/home", (_, resp) => {
    resp.sendFile(`${publicPath}/home.html`)
})

app.get("/index", (_, resp) => {
    resp.sendFile(`${publicPath}/index.html`)
})


// app.get("*", (_, resp) => {
//     resp.sendFile(`${publicPath}/error.html`)
// })


//EJS LECTURE

app.get("/tuto", (_, resp) => {

    const user ={
        name:"vaibhav",
        age:"20",
        email:"vaibhav@gmail.com"
    }
    resp.render('tuto',{user})
})

app.listen(5000);