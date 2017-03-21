import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Meta from './Meta';
import * as Shared from 'components/Shared';

class HomePage extends Component {
    render = () => {
        return (
            <div>
                <Helmet { ...Meta() }/>
                <Shared.Header/>
            </div>
        );
    }
}

export default HomePage;
