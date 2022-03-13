import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Nav } from '../../home/index'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { axiosData, deleteShop } from '../action'
import Goback from '../../goback/index'
// import Goback from './goback'
class Shoppingcar extends Component {
    constructor(props) {
        super(props)

    }
    delete(e) {
        const { deleteDatas } = this.props
        e.preventDefault()
        return function (id) {
            console.log(id)
            deleteDatas(id)

            axiosData()


        }
    }
    render() {
        var goback = this.props.history.goBack
        var { data } = this.props
        return (
            <Fragment>
                <div style={{ width: "100vw", height: "50px" }}>
                    <Goback goback={goback}></Goback>
                    <span style={{ position: 'absolute', left: 0, right: 0, textAlign: 'center', lineHeight: '40px' }}>购物车</span>
                </div>
                <ul>
                    {
                        data.map((item, index) => {
                            return (
                                <Fragment key={item._id}>
                                    <Link  to={'/shop/' + item._id}>
                                        <li className='product-item'>
                                            <img src={item.ProductImg}></img>
                                            <h4>{item.sort}  {item.name}</h4>
                                            <strong> <p>￥{item.price}</p></strong>
                                        </li>
                                    </Link>
                                    <button style={{ float: 'right', marginRight: '10px' }} onClick={(e) => { this.delete(e)(item._id) }}>删除</button>
                                </Fragment>


                            )
                        })
                    }
                </ul>
                <Nav></Nav>
            </Fragment>

        )
    }
    componentDidMount() {
        const { getDatas } = this.props
        getDatas()
    }
}
const mapStateToProps = function (state, ownProps) {
    return {
        data: state.car.cars
    }
}
const mapDispatchToProps = function (dispatch, ownProps) {
    return {
        deleteDatas: function (id) {
            console.log(id, '73')
            dispatch(deleteShop(id))
        },
        getDatas: function () {
            dispatch(axiosData())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Shoppingcar)