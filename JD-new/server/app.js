const express=require('express')
const app=express()

// 处理post请求携带的参数
app.use(express.urlencoded({extended:false}))
app.use(express.json())
// console.log(22222)
app.use('/',require('./routes/index'))
//引入路由文件里如果是空的，会报错
app.use('/admin',require('./routes/admin'))

app.listen(4001)