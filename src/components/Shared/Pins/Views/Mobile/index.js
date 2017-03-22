/**
 * [IL]
 * Library Import
 */
import React from 'react';

/**
 * [IS]
 * Style Import
 */
import Styles from './Styles/main.scss';

import GoodStart from 'components/Assets/GoodStart';

function Pins() {
    return (
        <section className={ Styles.headerComponent }>
            PINS
            <GoodStart/>
        </section>
    );
}

/**
 * [IE]
 * Export
 */
export default Pins;
