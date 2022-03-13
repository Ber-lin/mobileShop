// router文件就解决路由的问题，不要再这里使用中间件，去app.js使用
const express = require('express');
const router = express.Router();
const listModel = require('../models/list');
const shopModel = require('../models/shop');
const shoppingCarModel = require('../models/shoppingCar');

const async = require('async');
const checkParams = require('../tools/checkParams');
const shoppingcar = require('../models/shoppingCar');
router.get('/list', (req, res) => {
  // console.log(222);
  const tasks = {
    findList: function (cb) {
      listModel.find({}).then(data => {
        cb(null, data);
      })
        .catch(error => {
          cb(error);
        });
    },
  };
  async.auto(tasks, function (err, endResult) {
    if (err) {
      res.send(err).status(500);
    } else {
      // console.log(endResult);
      res.send(endResult['findList']);
    }
  });
});
router.post('/addList', (req, res) => {
  //测试接口，没有实际用途
  //1.检验前端发送的listName  参数验证 合法性 从而判断请求的合法性 失败了直接返回结果
  //2.插入数据库操作  失败了直接返回结果
  //3.返回结果

  const task = {
    // 1.参数从哪来 req.body
    // 2.需要验证哪些参数   后端决定验证哪些参数    listName price
    // 3.验证比对 成功插入数据库 失败auto
    checkParam: function (cb) {
      //callback
      //一旦cb函数第一个"错误"参数不为空，执行完demo1直接进入auto中
      var checkArr = ['listName', 'price'];
      checkParams(req.body, checkArr, cb);
    },
    insertData: [
      'checkParam',
      function (result1, cb) {
        //demo2想接收来自demo1的数据，要写这样，数组第一项表示依赖demo1的执行结果，来自demo1的数据在result参数中
        // console.log(result1);
        // console.log('demo2');
        cb(null);
      },
    ],
  };
  async.auto(task, function (err, endResult) {
    //函数两个参数，第一个是来自前面的错误，第二个是来自前面的数据
    // console.log(endResult,'---result')
    // console.log(err,'---err')
    // console.log('end')
    if (err) {
      res.send(err);
    } else {
      res.send('ok');
    }
  });
  //cb作用：当一个函数运行完毕调用cb，会执行下一个函数
  //cb接收两个参数，第一个是错误，没有就是null，第二个是数据
});

router.post('/shop', (req, res) => {
  const tasks = {
    checkParams: function (cb) {
      var checkArr = ['shopName'];
      checkParams(req.body, checkArr, cb);
    },
    findData: [
      'checkParams',
      function (result1, cb) {
        shopModel
          .find({ sort: req.body.shopName })
          .then(data => {
            cb(null, data);
          })
          .catch(err => {
            cb(err);
          });
      },
    ],
  };
  async.auto(tasks, function (err, endResult) {
    if (err) {
      res.send(err);
    } else {
      res.send(endResult['findData']);
    }
  });
});

router.post('/getShop', (req, res) => {
  const tasks = {
    checkParams: function (cb) {
      var checkArr = ['id'];
      checkParams(req.body, checkArr, cb);
    },
    findData: ['checkParams', function (result1, cb) {
      // console.log(req.body.id)
      shopModel.find({ _id: req.body.id }).then(data => {
        // console.log(data)
        cb(null, data);
      }).catch(err => {
        cb(err);
      });
    },
    ],
  };
  async.auto(tasks, function (err, endResult) {
    if (err) {
      res.send(err);
    } else {
      res.send(endResult['findData']);
    }
  });
});

router.post('/addShoppingCar', (req, res) => {
  const tasks = {
    checkParams: function (cb) {
      var checkArr = ['id'];
      checkParams(req.body, checkArr, cb);
    },
    findData: [
      'checkParams',
      function (result1, cb) {
        shopModel
          .find({ _id: req.body.id })
          .then(data => {
            cb(null, data);
          })
          .catch(err => {
            cb(err);
          });
      },
    ],
    insertData: [
      'findData',
      function (result2, cb) {
        // console.log(result2)    //{findData:[{_id:....}]}
        // var shopCar=new shoppingCarModel(result2['findData'][0])     这个result2['findData'][0]里面并没有_id字段，所以会报错，必须按部就班的写一遍
        var data = result2['findData'][0];
        var shopCar = new shoppingCarModel({
          _id: data._id,
          sort: data.sort,
          name: data.name,
          ProductImg: data.ProductImg,
          price: data.price,
        });
        shopCar
          .save()
          .then(data => {
            // console.log(111);
            cb(null);
          })
          .catch(err => {
            // console.log(222);
            cb(err);
          });
      },
    ],
  };
  async.auto(tasks, function (err, endResult) {
    if (err) {
      res.send(err);
    } else {
      res.send('加入购物车成功');
    }
  });
});
router.post('/deleteShoppingCar',(req,res)=>{
  console.log(req.body.id,'182')
  const tasks={
    checkParams:function(cb){
      var checkArr=['id']
      checkParams(req.body,checkArr,cb)
    },
    deleteData:[
      'checkParams',
      function (result,cb){
        shoppingcar.deleteOne({_id:req.body.id}).then(res=>{
          cb(null,res)
        }).catch(err=>{
          cb(err)
        })
      }
    ]
  }
  async.auto(tasks,function(err,endResult){
    err?res.send(err):res.send('购物车商品删除成功')
  })
})
router.get('/getShoppingCar', (req, res) => {
  const tasks = {
    findCar: function (cb) {
      shoppingCarModel
        .find({})
        .then(data => {
          cb(null, data);
        })
        .catch(error => {
          cb(error);
        });
    },
  };
  async.auto(tasks, function (err, endResult) {
    if (err) {
      res.send(err).status(500);
    } else {
      // console.log(endResult);
      res.send(endResult['findCar']);
    }
  });
});
module.exports = router;
