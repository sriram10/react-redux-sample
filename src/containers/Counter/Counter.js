import React, { Component } from 'react';
import { connect } from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import Axios from 'axios';

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
                <h2>{this.props.e}</h2>
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
        counter: storeState.counter,
        results: storeState.results
    }
}

const mapDispatchToProps = dispatchEvent => {
    return {
        OnIncrementCounter: () => dispatchEvent({type:'INCREMENT'}),
        OnDecrementCounter: () => dispatchEvent({type:'DECREMENT'}),
        OnAddCounter: (v) => dispatchEvent({type:'ADD', value: v}),
        OnSubtractCounter: () => dispatchEvent({type:'SUBTRACT', value: 5}),
        OnStoreResult: () => dispatchEvent({type: 'STORE_RESULT'}),
        OnDeleteResult: (value) => dispatchEvent({type: 'DELETE_RESULT', value})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
