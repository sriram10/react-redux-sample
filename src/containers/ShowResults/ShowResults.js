import React, { Component } from 'react'
import {connect} from 'react-redux'

class ShowResults extends Component {
  render() {
    return (
      <div>
        <h1>Results:</h1>
        <ul>
            {
                this.props.results.map( (el, i) => 
                    <li key={'item-'+i} onClick={ () => this.props.OnDeleteResult(i) }>{el}</li> 
                )
            }
        </ul>
      </div>
    )
  }
}

const mapStoreStateToProps = state => {
  return {
    results: state.results
  }
}


const mapDispatchToProps = dispatchEvent => {
  return {
      OnDeleteResult: (value) => dispatchEvent({type: 'DELETE_RESULT', value})
  }
}

export default connect(mapStoreStateToProps, mapDispatchToProps)(ShowResults)