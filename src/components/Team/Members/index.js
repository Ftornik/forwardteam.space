/**
 * [IL]
 * Library Import
 */
import React, { PropTypes, Component } from 'react';

/**
 * [IV]
 * View Import
 */
import Mobile from './Views/Mobile';

class Members extends Component {
    /**
     * [CPT]
     * Component prop types
     */
    static propTypes = {
        users: PropTypes.array.isRequired
    };

    /**
     * [CR]
     * Render function
     */
    render() {
        const view = (
            <Mobile { ...this.props }/>
        );

        /**
         * [RR]
         * Return Component
         */
        return view;
    }
}

/**
 * [IE]
 * Export
 */
export default Members;
