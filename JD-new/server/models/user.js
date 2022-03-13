const mongoose=require('../db')

const User=mongoose.Schema({ //用户
    sort:String,    //用户分类，管理员还是普通用户
    name:String,    
    password:String,
    
})
const userModel=mongoose.model('user',User)

module.exports=userModel