const express = require('express');
const con = require('./mysql1');
const { set } = require('mongoose');
const app = express();

app.get("/", (req, resp) => {

    con.query("select * from users", (err, result) => {
        if (err) {
            resp.send("error")
        }
        else {
            resp.send(result);
        }
    });
    resp.send("working brooo");
});

app.post("/", (req, resp) => {
    const data = { id: 3456, name: "vaibhav", email: "vaibhav@gmail.com", password: "123vai" }
    con.query('INsert INTO users SET ?', data, (error, result, fields) => {
        if (error) error;
        resp.send(result);
    })

})


app.put("/",(req,resp)=>{

    // resp.send("api is working - PUT");
    const data = ["ram@gmail.com , bob34 , 1230"];
    con.query("UPDATE users SET email = ?, password = ? , where id = ? ", data,(error , result , fields)=>{

        if (error) error;
        resp.send(result);
    })
})


app.delete("/:id",(req,resp)=>{

    resp.send("hello its working")
    con.query("DELETE FROM users WHERE id ="+req.params.id,(error, result)=>{

        if(error) throw error;
        resp.send(result);
    })
})



app.listen(5000);