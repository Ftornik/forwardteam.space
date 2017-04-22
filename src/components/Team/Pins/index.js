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

class Pins extends Component {
    /**
     * [CPT]
     * Component prop types
     */
    static propTypes = {
        team: PropTypes.object.isRequired,
        pins: PropTypes.array.isRequired
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
        // const { user, pins } = this.props;

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
export default Pins;
