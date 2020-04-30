import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import myreducer from './store/myreducer';
import {Provider} from 'react-redux';

const store = createStore(myreducer);

ReactDOM.render(<Provider store = {store} ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
