import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import reduxPromise from './middleware/redux_promise';
import App from './components/app';

const store = createStore(rootReducer, {}, applyMiddleware(reduxPromise));

ReactDOM.render(
    <Provider store = {store}>
    	<Router>
    		<App />
    	</Router>
    </Provider>,
    document.getElementById('root')
);
