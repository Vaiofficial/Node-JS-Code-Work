const reqFilter = require('./middleware_main')
const express = require('express')
const app = express();
const route = express.Router();

// const reqFilter = require('./middleware_main');


route.use(reqFilter);
app.get("/",(req,resp)=>
{
    resp.send("welcome to home page");
});

route.get("/contact",(req,resp)=>
{
    resp.send("welcome to contact page") ;
});

route.get("/donation",(req,resp)=>
{
    resp.send("welcome to donation page");
});


app.use('/',route);
app.listen(2000);