import React, { Component } from 'react'
import { connect } from 'react-redux'
class Goback extends Component{
   
    render(){
        var {goback}=this.props
        // console.log(goback)
        return (
            <div className='goback' onClick={()=>{goback()}}>
                {'<'}
            </div>
        )
    }
}

export default connect(null,)(Goback)