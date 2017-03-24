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

class Info extends Component {
    /**
     * [CPT]
     * Component prop types
     */
    static propTypes = {
        user: PropTypes.object.isRequired
    };

    /**
     * [CR]
     * Render function
     */
    render() {
        /**
         * [RPD]
         * Props destructuring
         */
        const { user } = this.props;

        const view = (
            <Mobile user={ user }/>
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
export default Info;
