/**
 * [IL]
 * Library Import
 */
import React from 'react';
import cx from 'classnames';

/**
 * [IS]
 * Style Import
 */
import Styles from './Styles/main.scss';

import ChallengeImage from 'components/Assets/Pins/Challenger';

function Challenge() {
    const reqClass = cx({
        [Styles.item]: true,
        [Styles.active]: true
    });

    return (
        <section className={ Styles.challengeComponent }>
            <div className={ Styles.info }>
                <div className={ Styles.title }>
                    <span className={ Styles.questionMonth }>Челенджи месяца</span>&nbsp;
                    <span className={ Styles.month }>(март)</span>
                </div>
                <div className={ Styles.challenges }>
                    <p className={ reqClass }>Принять участие в 2 разных видах служения в церкви</p>
                    <p className={ reqClass }>Написать 3 любые личные цели с помощью системы SMART</p>
                </div>
            </div>
            <div className={ Styles.image }>
                <ChallengeImage className={ Styles.icon }/>
            </div>
        </section>
    );
}

/**
 * [IE]
 * Export
 */
export default Challenge;
