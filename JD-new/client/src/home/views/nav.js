import React, { Component } from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [
        {
          name: '首页',
          link: '/',
          icon: 'https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/81741/30/12345/4140/5d9c4b13E726f0a1e/82c582e7c375e4b3.png',
          activeIcon:
            'https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/67550/26/12426/5094/5d9c4b13Eea435a3f/81328b0609c60a3c.png',
        },
        {
          name: '分类',
          link: '/sort',
          icon: 'https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/56507/6/12787/3168/5d9c4b12Ef363dd8d/4af32f42575509d8.png',
          activeIcon:
            'https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/48787/24/12910/3390/5d9c4b12Ee63270e4/4481f5b3dbad979d.png',
        },
        {
          name: '购物车',
          link: '/shoppingCar',
          icon: 'https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/64954/4/12406/3529/5d9c4b12Ee7a82735/f2fe0a88bf344736.png',
          activeIcon:
            'https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/45205/32/12889/3890/5d9c4b12E7bc2c425/dd60fafbde8542ca.png',
        },
        {
          name: '登录',
          link: '/login',
          icon: 'https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/68400/36/12368/3153/5d9c4b13E0e0d80a8/876c40f17d91ce44.png',
          activeIcon:
            'https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/47480/36/12929/3209/5d9c4b13E97caa63a/4dc0ec8a7e47c2b7.png',
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <ul className="nav-list">
          {this.state.arr.map((item, index) => {
            return (
              //exact严格匹配，让每个点击过的link的match消失，使之互斥
              <li key={index}>
                <Route path={item.link} exact children={e => {
                  // 在Route中可以使用component、children、render三种属性来渲染组件，各有各的特点根据需要选择
                  // component：渲染的是固定的组件，属性值是一个组件
                  // children：全部组件都渲染出来，但是只有选中的那个match有值，其他的都是null，属性值是一个函数，借助返回值渲染
                  // render：只渲染选中的组件，其他的不渲染，属性值也是一个函数
                  // console.log(e)
                    //只有匹配到path，才会执行render里的内容 render只显示匹配正确的，children全部显示但是不正确的match全是空

                    return (
                      //返回东西要借用return
                      
                      <Link  style={{ width: '75px', height: '50px' }}  to={item.link}>
                        <div className="nav-icon">
                          <img  src={e.match ? item.activeIcon : item.icon}></img>
                        </div>
                      </Link>
                    );
                  }}
                ></Route>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Nav;
