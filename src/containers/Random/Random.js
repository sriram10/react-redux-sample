import React, { Component } from 'react'
import {connect} from 'react-redux'

class Random extends Component {
  render() {
    return (
      <div>
        <h1>Counter Value: {this.props.ctr} - {this.props.email}</h1>
      </div>
    )
  }
}

const mapStoreStateToProps = storeState => {
  return {
    ctr: storeState.sum.counter,
    email: storeState.profile.email
  }
}

export default connect(mapStoreStateToProps)(Random)