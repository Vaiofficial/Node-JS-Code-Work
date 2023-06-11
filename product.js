const mongooes = require('mongoose')
const productSchema = new mongooes.Schema(

    {
        name:String,
        price:Number,
        rating:Number
    }
);

module.exports = mongooes.model('product' , productSchema , 'product');