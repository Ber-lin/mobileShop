const mongoose=require('../db')

const Shoppingcar=mongoose.Schema({ //商品
    sort:String,
    name:String,
    ProductImg:String,
    price:Number
})
const shoppingcar=mongoose.model('shoppingcar',Shoppingcar)

module.exports=shoppingcar