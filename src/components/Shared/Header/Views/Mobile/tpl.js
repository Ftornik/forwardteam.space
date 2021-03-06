/**
 * [IL]
 * Library Import
 */
import React, { PropTypes } from 'react';

/**
 * [IS]
 * Style Import
 */
import Styles from './Styles/main.scss';

function Header() {
    return (
        <section className={ Styles.headerComponent }>
            <div className={ Styles.logo }>ForwardTeam</div>
        </section>
    );
}

/**
 * [IE]
 * Export
 */
export default Header;
