const express = require('express');
const EventEmitter = require('events')

const app  = express();

const event = new EventEmitter();

let count = 0;
event.on("countAPI",()=>{
    count++;
    console.log("event called",count);
})




app.get('/search',(req,resp)=>{

    resp.send("search working");
    event.emit("countAPI");
})


app.get('/event',(req,resp)=>{

    resp.send("working")
    event.emit("countAPI");
})


app.get('/update',(req,resp)=>{

    resp.send("update working")
    event.emit("countAPI");
})

app.listen(3200);