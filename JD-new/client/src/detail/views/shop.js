import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'
import { connect } from 'react-redux'
import Goback from '../../goback/index'
import {axiosData,axiosPost } from '../action'
class Shop extends Component {
    
    
    getInfor(id) {
        var {postDatas}=this.props
        postDatas(id)
    }
    render() {
        // console.log(this.props)
        var goBack = this.props.history.goBack
        var {data}=this.props
        // console.log(data)
        return (
            <div>
                <Goback goback={goBack}></Goback>
                <ul>
                    {   //这是图片集，可升级多张图
                        data.map((item, index) => {
                            return (
                                <li className='show-img' key={item._id}>
                                    <img src={item.ProductImg} alt=''></img>
                                </li>

                            )
                        })
                    }
                </ul>
                {
                    
                    data.map((item, index) => {
                        return (
                            <span className='solo-price' key={item._id}>￥
                                <em>{item.price}</em>
                                <h1 className='solo-name'>{item.name}</h1>
                                
                                <Link className='shop-shoppingcar' to='/shoppingCar'  onClick={() => { this.getInfor(item._id) }}>加入购物车</Link>
                                <Link className='shop-buy'  to='/buy'>立即购买</Link>

                            </span>


                        )
                    })
                }

            </div>
        )
    }
    componentDidMount() {
        var {getDatas}=this.props
        var { id } = this.props.match.params
        // console.log(this.props)
       getDatas(id)
    }
}
const mapStateToProps=function(state,ownProps){
    // console.log(state.shop.data)
    return {
        data:state.shop.data
    }
}
const mapDispatchToProps=function(dispatch,ownProps){
    return {
        getDatas:function(e){   //获取单个商品的信息，用于渲染单个商品页面
            dispatch(axiosData(e))
        },
        postDatas:function(e){  //用来传递id给后端接口
            dispatch(axiosPost(e))
        }
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(Shop)