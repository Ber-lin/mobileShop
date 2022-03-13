import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {axiosData,changeIndex,changeShop} from '../action'
import Goback from '../../goback/index';
class ListBox extends Component {
  constructor(props) {
    super(props);
  }

  onchange(index, name) {
    var {change_index,change_shopName,getDatas}=this.props
    change_index(index)//列表高亮
    change_shopName(name)//修改当前分类
    getDatas(name)//获取当前分类下的全部商品
    
  }
  render() {
    // console.log(this.context)
    // console.log(this.props)
    var goback = this.props.goback;
    // console.log(goback,this.props)
    var {data,listShop,index}=this.props
    // console.log(data,listShop)
    return (
      <div>
        <div className="head">
          <Goback goback={goback}></Goback>
        </div>
        <ul className="listshop-list">
          
          {Array.isArray(data)?(data.map((item, i1) => {
            return (
              <li
                key={item._id}
                className={i1 == index ? 'listshop-active' : ''}
                onClick={() => {
                  this.onchange(i1, item.listName);
                }}
              >
                {item.listName}
              </li>
            );
          })):''}
        </ul>
        <div className="listshop-shop">
          {Array.isArray(listShop)?(listShop.map((item, index) => {
            return (
              <Link key={item._id} to={'/shop/' + item._id}>
                <li className="product-item">
                  <img src={item.ProductImg}></img>
                  <h4>
                    {item.sort} {item.name}
                  </h4>
                  <strong>
                    {' '}
                    <p>￥{item.price}</p>
                  </strong>
                </li>
              </Link>
            );
          })):''}
        </div>
      </div>
    );
  }
  componentDidMount() {
     var {getDatas,shopName}=this.props
     getDatas(shopName) //根据list组件传的值渲染
  }
}

 const mapStateToProps=function(state,ownProps){
  //  console.log(state)
   return {
     data:state.home.data,//Home组件查到的商品分类列表
     listShop:state.list.listShop,//分类对应的商品数组
     index:state.list.index,
     shopName:state.list.shopName //list组件传递到store中的值
   }
 }
 const mapDispatchToProps=function(dispatch,ownProps){
   return {
     getDatas:function(name){
       dispatch(axiosData(name))
     },
     change_index:function(index){
       dispatch(changeIndex(index))
     },
     change_shopName:function(name){
       dispatch(changeShop(name))
     }
   }
 }
export default connect(mapStateToProps,mapDispatchToProps)(ListBox)