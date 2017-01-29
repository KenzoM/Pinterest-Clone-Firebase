import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ReduxPromise from 'redux-promise';

import reducers from './reducers';
// import routes from './routes';

import App from './components/app';
import About from './components/About';
import Login from './components/user/login';
// import Signup from './components/auth/signup';
import Home from './containers/home';

import {TAB_INDEX} from './actions/types'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(ReduxPromise)))

//This is for material-ui
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// for bundling your styles
// import './bundle.scss';

// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} onEnter={() => store.dispatch( {type: TAB_INDEX, payload: 0} )} />
        <Route path="about" component={About} onEnter={() => store.dispatch( {type: TAB_INDEX, payload: 1} )} />
        <Route path="login" component={Login} onEnter={() => store.dispatch( {type: TAB_INDEX, payload: 2} )} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.react-root'));
