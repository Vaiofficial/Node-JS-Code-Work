const dbConnect = require('./mongoconnect'); 

// const MongoClient = require('mongodb').MongoClient;


//method 1

// dbConnect().then((resp)=>
// {
//     resp.find({name:'sidhu'}).toArray().then((data)=>
//     {
//         console.warn(data);
//     })
// })


//method 2 modern

const main = async () => {
    let data = await dbConnect();
    data = await data.find({}).toArray();
    console.warn(data)
}

main();
