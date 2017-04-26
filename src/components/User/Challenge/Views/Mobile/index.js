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

function Challenge(props) {
    const { user, challenges } = props;

    const reqClass = cx({
        [Styles.item]: true,
        [Styles.active]: false
    });

    const defaultChallenges$ = [
            <p className={ reqClass }>
                Начни новый пин
            </p>
    ];

    const challenges$ = user.progress.challenges ? user.progress.challenges.map((challenge) => {
        const ch = challenges.find((el) => {
            return el.id === challenge.id;
        });
        if (!ch) {
            return null;
        }
        if (!challenge.visible) {
            return null;
        }

        const challengeClass = cx({
            [Styles.item]: true,
            [Styles.active]: challenge.done
        });

        return (
            <p className={ challengeClass } dangerouslySetInnerHTML={{ __html: ch.text }} key={ ch.id } />
        );
    }) : [];

    return (
        <section className={ Styles.challengeComponent }>
            <div className={ Styles.info }>
                <div className={ Styles.title }>
                    <span className={ Styles.questionMonth }>Челендж месяца</span>&nbsp;
                    <span className={ Styles.month }>(май)</span>
                </div>
                <div className={ Styles.challenges }>
                    { challenges$.length ? challenges$ : defaultChallenges$ }
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
