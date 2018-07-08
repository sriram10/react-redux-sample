import React, { Component } from 'react'
import { connect } from 'react-redux'
import { UPDATE_NAME, INC_COUNTER } from '../../store/actionTypes/actionTypes';

class Profile extends Component {

  updateCounter = () => {
    this.props.inc()
  }

  render() {
    return (
      <div style={{
        backgroundColor: '#f1f1f1',
        padding: '20px'
      }}>
        <h2>Profile</h2>
        <h3>Name: {this.props.profileName}</h3>
        <h3>Email: {this.props.profileEmail}</h3>
        <input type="text" onChange={(e) => this.props.updateName(e.target.value)} />
        <button type='button' onClick={this.updateCounter}>INC</button>
      </div>
    )
  }
}

const mapStoretoProps = store => {
  return {
    profileName: store.pro.name,
    profileEmail: store.pro.email
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateName: (v) => dispatch({type: UPDATE_NAME, data: v}),
    inc: () => dispatch({type: INC_COUNTER})
  }
}

export default connect(mapStoretoProps, mapDispatchToProps)(Profile)

/*
function connect(mapStoretoProps, mapDispatchToProps) {
  var p1 = mapStoretoProps(store);
  var p2 = mapDispatchToProps(store.dispatch);
  return function(Component) {
    return (
      <Component {...p1} {...p2} />
    )
  }
}

// Currying function
function a(x) {
  return function(y) {
    return function(z) {
      console.log(x+y+z)
    }
  }
}
// a(1)(2)(3) // log > 6

*/