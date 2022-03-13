// router文件就解决路由的问题，不要再这里使用中间件，去app.js使用
const express=require('express')
const router=express.Router()
const async=require('async')
const userModel=require('../models/user')
router.post('/login',(req,res)=>{
    const {username,password}=req.body
    // console.log(username,password)
    const tasks={
        findUser:function(cb){//直接使用用户名和密码进行查找
            userModel.find({name:username,password:password}).then(res=>{
                cb(null,res)
            }).catch(err=>{
                cb(err)
            })
        }
    }
    async.auto(tasks,function(err,endResult){
        if(err){
            res.send(err).status(500)
        }else{
            res.cookie('name',username,{maxAge:90000})
            console.log(endResult['findUser'])
            res.redirect('/')
        }
    })
})


module.exports=router