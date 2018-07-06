import React, { Component } from 'react';

import Counter from './containers/Counter/Counter';
import './App.css';
import Random from './containers/Random/Random';
import ShowResults from './containers/ShowResults/ShowResults';
import Test from './containers/Test/Test';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Test r='some props' />
       <Random />
       {/* <Counter />
       <ShowResults/> */}
      </div>
    );
  }
}

export default App;
