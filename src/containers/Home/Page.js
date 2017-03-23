import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Meta from './Meta';
import * as Shared from 'components/Shared';
import * as User from 'components/User';

class HomePage extends Component {
    render = () => {
        return (
            <div>
                <Helmet { ...Meta() }/>
                <Shared.Header/>
                <User.Info/>
                <User.Pins/>
            </div>
        );
    }
}

export default HomePage;
