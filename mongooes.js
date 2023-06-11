const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/vaibhav");

const productSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
});

// const saveinDB = async () => {
//     const productModel = mongoose.model('income', productSchema, 'income');
//     const data = new productModel({
//         name: "vaibhavtalks",
//         age: 45,
//         email: 'vaibhav@gmail.com'
//     });
//     const result = await data.save();
//     console.log(result);
// }

//updating data in mongodb

// const updateinDB = async () => {
//     const product = mongoose.model('income', productSchema, 'income');
//     let updatedata = await product.updateMany(
//             { name: "vaibhavtalks" },
//         {
//             $set: { email: "talks@gmail.com" }
//         }
//     )
// console.log(updatedata);
// }

//deleting data in mongodb

const deleteinDB = async()=>{

    const product = mongoose.model('income',productSchema , 'income')
    let deletedata = await product.deleteOne(
        {name:'vaibhavtalks'}
    )

    console.log(deletedata);
}

// find data in mogodb

// const findinDB = async()=>{

//     const product = mongoose.model('income',productSchema , 'income')
//     let finddata = await product.find(
//         {name:'vaibhavtalks'}
//     )

//     console.log(finddata);
// }




// saveinDB();
// updateinDB();
deleteinDB();
// findinDB();
