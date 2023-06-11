// const { name } = require('ejs');
const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const database = 'vaibhav';
const client = new MongoClient(url);

async function dbConnect() {

    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('data');
    return collection;
    // let response = await collection.find({}).toArray();
    // console.log(response);
}

module.exports = dbConnect;