import React, { Component } from 'react';
import Helmet from 'react-helmet';

import UserApi from 'api/Users';
import PinApi from 'api/Pins';
import SprintApi from 'api/Sprints';

import Meta from './Meta';
import * as Shared from 'components/Shared';
import * as User from 'components/User';

class HomePage extends Component {
    render = () => {
        const { params } = this.props;
        const userId = params.id;

        const user = UserApi.getById(userId);
        const pins = PinApi.getAll();
        const sprint = SprintApi.getById('s1');

        return (
            <div>
                <Helmet { ...Meta() }/>
                <Shared.Header/>
                <User.Info user={ user }/>
                <User.Sprint user={ user } sprint={ sprint }/>
                <User.Question/>
                <User.Challenge/>
                <User.Pins user={ user } pins={ pins }/>
            </div>
        );
    }
}

export default HomePage;
