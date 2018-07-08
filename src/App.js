import React, { Component } from 'react';

import './App.css';
import Counter from './containers/Counter/Counter';
// import Random from './containers/Random/Random';
import ShowResults from './containers/ShowResults/ShowResults';
// import Test from './containers/Test/Test';
import Cart from './containers/Cart/Cart';
import Profile from './containers/Profile/Profile';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Counter />
       <ShowResults/>
       <Profile />
       <Cart />
       {/* <Test r='some props' />
       <Random />
        */}
      </div>
    );
  }
}

export default App;
