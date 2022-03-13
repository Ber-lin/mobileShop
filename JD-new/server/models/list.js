const mongoose=require('../db')

var List=mongoose.Schema({
    listImg: String,
    listName: String,
    listIcon:String
})
const listModel = mongoose.model('list', List)   //第一个参数是集合的名字（数据库表名）第二个参数是模型名

module.exports=listModel