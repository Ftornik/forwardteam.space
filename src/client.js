/**
 * THIS IS THE ENTRY POINT FOR THE CLIENT, JUST LIKE server.js IS THE ENTRY POINT FOR THE SERVER.
 */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './redux/create';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { CALCULATE_RESPONSIVE_STATE } from 'redux-responsive';
import { ReduxAsyncConnect } from 'redux-connect';
// import useScroll from 'helpers/scroll';

import getRoutes from './routes';

// const _browserHistory = useScroll(() => browserHistory)();
const dest = document.getElementById('content');
const store = createStore(browserHistory, window.__data);
const history = syncHistoryWithStore(browserHistory, store);

/* eslint-disable react/jsx-no-bind, arrow-parens */
const component = (
    <Router
        render={ (props) => <ReduxAsyncConnect { ...props }/> }
        history={ history }
    >
        { getRoutes(store) }
    </Router>
);
/* eslint-enable react/jsx-no-bind, arrow-parens */

ReactDOM.render(
    <Provider store={ store } key="provider">
        { component }
    </Provider>,
    dest
);

store.dispatch({
    type: CALCULATE_RESPONSIVE_STATE,
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
    matchMedia: window.matchMedia
});

if (process.env.NODE_ENV !== 'production') {
    window.React = React; // enable debugger

    if (!dest || !dest.firstChild || !dest.firstChild.attributes
        || !dest.firstChild.attributes['data-react-checksum']) {
        console.error('Server-side React render was discarded. '
            + 'Make sure that your initial render does not contain any client-side code.');
    }
}
