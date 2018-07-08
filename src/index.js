import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import profileRed from './store/red';
import reducer from '../src/store/reducer'
import reducer2 from '../src/store/newRed'

const rootReducer = combineReducers({
  pro: profileRed,
  sum: reducer,
  profile: reducer2
})

const ourStore = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(<Provider store={ourStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
