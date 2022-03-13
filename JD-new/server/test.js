const listModel = require('./models/list')
const shopModel = require('./models/shop')
const mongoose = require('mongoose')
const userModel = require('./models/user')
const shoppingcar = require('./models/shoppingCar')
var newList = new listModel({
    listImg: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/202769/23/10149/184914/615ff9d9E9e39427d/44a0dc5c497010ae.jpg!cr_1125x449_0_166!q70.jpg.dpg',
    listName: '拍拍二手',
    listIcon: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/36551/10/16098/5792/60ec1589E755822d7/f958b896e706008a.png!q70.jpg.dpg'
})

var newShop = new shopModel({
    sort: '拍拍二手',
    name: '【资源机准新】Apple MacBook Pro 2019款16寸 苹果笔记本电脑 二手笔记本 9代i7/16/512 VJ2灰色 标配版',
    ProductImg: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/199324/22/2984/107891/6116d44fE2f84cfa4/da679756905ab2d1.jpg!q80.dpg.webp',
    price: '11999'
})
var newUser = new userModel({
    sort: '管理员',    //用户分类，管理员还是普通用户
    name: '张翼',
    password: '123456',
})
var shopCar = new shoppingcar()
// shoppingcar.find().then(res=>console.log(res)).catch(err=>console.log(err))
shoppingcar.deleteOne({ _id: '6169374dbba7052ba4019787' }).then(() => {
    console.log('success')
    mongoose.disconnect()
}).catch(err => console.log(err))
// newUser.save().then((res)=>{
//         console.log(res)
//         mongoose.disconnect()
//     }).catch((err)=>{
//         console.log(err)
//     })
// newShop.save().then((res)=>{
//     console.log(res)
//     mongoose.disconnect()
// }).catch((err)=>{
//     console.log(err)
// })
// newList.save().then((res)=>{
//     console.log(res)
//     mongoose.disconnect()
// }).catch((err)=>{
//     console.log(err)
// })