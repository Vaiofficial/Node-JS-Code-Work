const express = require('express');

const app = express();

app.get("", (req,res)=>
{
    console.log("name sent to browser" ,req.query.name)
    res.send("hello iam learning express");
});

app.get('/home', (req,res)=>
{
    res.send("hello iam learning backend");
});


app.get('/main', (req,res)=>
{
    console.log("name sent to browser" ,req.query.name)
    res.send("hello iam learning main");
});


app.listen(5000);