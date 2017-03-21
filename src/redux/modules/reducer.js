import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { createResponsiveStateReducer } from 'redux-responsive';
import { reducer as reduxAsyncConnect } from 'redux-connect';

/**
 * Component reducers
 */

export default combineReducers({
    routing: routerReducer,
    browser: createResponsiveStateReducer({
        phonePortrait: 414,
        phoneLandscape: 667,
        tabletPortrait: 768,
        tabletLandscape: 1024,
        desktop: 1366,
        desktopWide: 1680,
        desktopHD: 1920,
        desktopMega: 2560
    }),
    reduxAsyncConnect
});
