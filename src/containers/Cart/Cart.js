import React, { Component } from 'react'
import {connect} from 'react-redux'

class Cart extends Component {
  
  render() {
    return (
      <div>
        <h2>Name: {this.props.name}</h2>
        <h2>Total Items: {this.props.counter}</h2>
      </div>
    )
  }
}

const mapStoreToProps = store => {
  return {
    name: store.name,
    counter: store.counter
  }
}

export default connect(mapStoreToProps)(Cart)
