const http = require('http');

// http.createServer((req, resp) => {

//     resp.write("<h1><b>hello iam learning backend</b></h1>");
//     resp.end();
// }).listen(4500);

// SAME AS ABOVE BUT USING A FUNCTION

function datacontrol (req, resp){

    resp.write("<h1><b>hello, iam learning backend</b></h1>");
    resp.end();
}

http.createServer(datacontrol).listen(4500);