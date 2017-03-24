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
                    <span className={ Styles.questionMonth }>Челендж</span>&nbsp;
                    <span className={ Styles.month }>#1</span>
                </div>
                <div className={ Styles.challenges }>
                    <p className={ reqClass }>Прочитать книгу "По соображениям совести"</p>
                    <p className={ reqClass }>Провести социальный проект</p>
                    <p className={ Styles.active }>Спасти котика</p>
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
