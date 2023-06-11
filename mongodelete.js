const dbConnect = require('./mongoconnect')

const deleteData = async () => {
    const data = await dbConnect();
    const result = await data.deleteMany
    (
        {name:'chiranjivi babu'}
    )
    console.warn(result);
    
    if(result.acknowledged)
    {
        console.log("data is deleted");
    }
}

deleteData();