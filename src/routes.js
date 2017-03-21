import React from 'react';
import { IndexRoute, Route } from 'react-router';
import {
    App,
    Home,
    NotFound
} from 'containers';

const componentRoutes = (
    <Route>
        <IndexRoute component={ Home }/>
        <Route path="*" component={ NotFound } status={ 404 }/>
    </Route>
);

/* eslint-disable react/jsx-no-bind */
export default () => {
    return (
        <Route path="/" component={ App }>
            { componentRoutes }
        </Route>
    );
};
