// 此函数用于验证参数是否全部传入，没有的会显示
function checkParams(body,checkArr,cb) {
    var flag = true
    var arr=[]
    for (let i = 0; i < checkArr.length; i++) {
        var item = checkArr[i]
        if (body[item]==undefined) {
            arr.push(item)
            flag = false
        }
    }   //for循环遍历完成里面的item永远都是最后一项，缺少的永远是最后一个参数，所以不直接使用item
    if (flag) {
        cb(null)
    } else {
        cb('缺少参数'+arr)
    }
}
module.exports=checkParams