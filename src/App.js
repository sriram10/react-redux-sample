import React, { Component } from 'react';

import './App.css';
import Counter from './containers/Counter/Counter';
import Random from './containers/Random/Random';
import ShowResults from './containers/ShowResults/ShowResults';
import Test from './containers/Test/Test';
import Cart from './containers/Cart/Cart';
import Profile from './containers/Profile/Profile';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Cart />
       <Profile />
       {/* <Test r='some props' />
       <Random />
       <Counter />
       <ShowResults/> */}
      </div>
    );
  }
}

export default App;
