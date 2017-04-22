import React from 'react';
import { IndexRoute, Route } from 'react-router';
import * as Page from 'containers';

const componentRoutes = (
    <Route>
        <IndexRoute component={ Page.Home }/>
        <Route path="id/:id" component={ Page.User }/>
        <Route path="team/:id" component={ Page.Team }/>
        <Route path="*" component={ Page.NotFound } status={ 404 }/>
    </Route>
);

/* eslint-disable react/jsx-no-bind */
export default () => {
    return (
        <Route path="/" component={ Page.App }>
            { componentRoutes }
        </Route>
    );
};
