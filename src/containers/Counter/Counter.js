import React, { Component } from 'react';
import { connect } from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import Axios from 'axios';
import { INCREMENT, DECREMENT, ADD_COUNTER, SUB_COUNTER, STORE_RESULTS, DELETE_RESULTS } from '../../store/actionTypes/actionTypes';

class Counter extends Component {
    state = {
        counter: 50,
        results: []
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( prevState => { 
                    return { counter: prevState.counter + 1 } 
                })
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
            default:
                break;
        }
    }

    getData = () => {
        Axios.get('https://api.github.com/users')
            .then(res => {
                console.log(res);
                let totalUsers = res.data.length;
                this.props.OnAddCounter(totalUsers);
            })
    }
    
    render () {
        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl label="Increment" clicked={this.props.OnIncrementCounter}  />
                <CounterControl label="Decrement" clicked={this.props.OnDecrementCounter}  />
                <CounterControl label="Add 5" clicked={e => this.props.OnAddCounter(5)}  />
                <CounterControl label="Subtract 5" clicked={this.props.OnSubtractCounter}  />
                
                <CounterControl label="GET DATA" clicked={this.getData}  />
                <hr/>
                <button type="button" onClick={this.props.OnStoreResult} >Store Result</button>
            </div>
        );
    }
}

const mapStateToProps = storeState => {
    return {
        counter: storeState.sum.counter,
        results: storeState.sum.results
    }
}

const mapDispatchToProps = dispatchEvent => {
    return {
        OnIncrementCounter: () => dispatchEvent({type:INCREMENT}),
        OnDecrementCounter: () => dispatchEvent({type:DECREMENT}),
        OnAddCounter: (v) => dispatchEvent({type:ADD_COUNTER, value: v}),
        OnSubtractCounter: () => dispatchEvent({type:SUB_COUNTER, value: 5}),
        OnStoreResult: () => dispatchEvent({type: STORE_RESULTS}),
        OnDeleteResult: (value) => dispatchEvent({type: DELETE_RESULTS, value})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
