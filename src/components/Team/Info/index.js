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
        team: PropTypes.object.isRequired
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
        const { team } = this.props;

        const view = (
            <Mobile team={ team }/>
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
