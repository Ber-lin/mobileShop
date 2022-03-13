const mongoose=require('../db')

const Product=mongoose.Schema({ //商品
    sort:String,
    name:String,
    ProductImg:String,
    price:Number
})
const product=mongoose.model('product',Product)

module.exports=product