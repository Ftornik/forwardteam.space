import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Meta from './Meta';

class HomePage extends Component {
    render = () => {
        return (
            <div>
                <Helmet { ...Meta() }/>
            </div>
        );
    }
}

export default HomePage;
