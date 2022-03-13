import React, { Component } from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import  {changeShop,changeIndex}  from '../../listShop/index';

class List extends Component {
  constructor(props) {
    super(props);
  }
  change_shop(name,index){
      const {change_i,change_index}=this.props
      // console.log(e)
      change_i(name)
      change_index(index)

  }
  render() {
    // console.log(this.context)
    var { data } = this.props;

    return (
      <div>
        <ul className="center-list">
          {data.map((item, i1) => {
            // console.log(item.listImg)

            return (
              //key加到最外层
              <Link to={'/sort/'} key={item._id} onClick={()=>{this.change_shop(item.listName,i1)}}>
                <li>
                  <img src={item.listIcon}></img>
                  <span>{item.listName}</span>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
  componentDidMount() {
    axios
      .get('/list')
      .then(result => {
        var { data } = result;
        this.setState({ data: data });
        // console.log(result)
      })
      .catch(err => {
        console.log(err);
      });
  }
}

const mapStateToProps = function (state, ownProps) {
  return {
    data: state.home.data,
  };
};
const mapDispatchToProps=function(dispatch,ownProps){
  return {
    change_i:function(e){
      dispatch(changeShop(e))
    },
    change_index:function(e){
      dispatch(changeIndex(e))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(List);
