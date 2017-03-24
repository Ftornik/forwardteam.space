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

class Challenge extends Component {
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
export default Challenge;
