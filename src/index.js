import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import someReducer from './store/red';

const ourStore = createStore(someReducer)

ReactDOM.render(<Provider store={ourStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
