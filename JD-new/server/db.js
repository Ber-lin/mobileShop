const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost/jdSecondVersion')


module.exports=mongoose //暴露连接好的数据库，始终保持一个数据库连接