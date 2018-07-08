import React, { Component } from 'react'
import { connect } from 'react-redux'
import {UPDATE_COUNTER} from '../../store/actionTypes/actionTypes'

class Test extends Component {
  state = {
    title: 'test'
  }

  changeVal = (e) => {
    this.props.changeCounter(e.target.value);
  }

  render() {
    return (
      <div>
      <h2>
        {this.state.title} Data - {this.props.value}
      </h2>
        <input type="text" placeholder='counter' 
          onChange={this.changeVal} />
        <input type="text" placeholder='email' 
          onChange={(e) => this.props.changeEmail(e.target.value)} />
    </div>)
  }
}

const mapStoreToProps = (store) => {
  return {
    value: store.sum.counter
  }
}

const mapDispatchToProps = (dispatchEvent) => {
  return {
    changeCounter: (v) => dispatchEvent({type:UPDATE_COUNTER, data: v }),
    changeEmail: (v) => dispatchEvent({type:"UPDATE", email: v })
  }
}

// mapStoreToProps - map store data to the props of the component
export default connect(mapStoreToProps, mapDispatchToProps)(Test)

//currying funciton
/*
function a(x){
  return function(y) {
    return function(z) {
      console.log(x+y+z)
    }
  }
}
let d = a(1)(2)(3)
*/