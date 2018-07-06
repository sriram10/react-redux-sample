import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import reducer from '../src/store/reducer'
import reducer2 from '../src/store/newRed'

const rootReducer = combineReducers({
  sum: reducer,
  profile: reducer2
})
/*
{
  sum: {
    counter: 100,
    resules: []
  },
  profile: {
    email: ''
  }
}
*/

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
