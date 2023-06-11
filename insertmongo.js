const dbConnect = require('./mongoconnect');

const insert = async ()=>
{
    const db = await dbConnect();
    const result = db.insertMany(
        [
            {name:'mahesh babu',course:'acting',Ph_Number:'32612626161',email:"mahesh@gmail.com"},
            {name:'ram babu',course:'acting',Ph_Number:'32612626161',email:"mahesh@gmail.com"},
            {name:'allu babu',course:'acting',Ph_Number:'32612626161',email:"mahesh@gmail.com"}
        ]
        
    );
    if((await result).acknowledged)
    {
        console.log("data is inserted");
    }
}

insert();