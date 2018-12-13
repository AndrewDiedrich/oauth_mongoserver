import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import reducers from './reducers';

//combined reducers, state object, middleware
const store = createStore(reducers, {}, applyMiddleware());


ReactDOM.render( //pass state down to app and all children
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root'));

