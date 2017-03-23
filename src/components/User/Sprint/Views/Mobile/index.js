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

import SprintImage from 'components/Assets/Sprint';

function Sprint(props) {
    const { user, sprint } = props;

    const sprintProgress = user.progress.sprints[sprint.id] ? user.progress.sprints[sprint.id] : null;

    const percent = sprintProgress.amount;
    const maxPercent = 91;

    const progressStyle = {
        width: `${percent}%`
    };

    const percentStyle = {
        left: percent > maxPercent ? `${maxPercent}%` : `${percent}%`
    };

    const spintReqs = sprint.requirements.map((req) => {
        const reqDone = sprintProgress[req.id] ? sprintProgress[req.id] : false;

        const reqClass = cx({
            [Styles.item]: true,
            [Styles.active]: reqDone
        });

        return (
            <p className={ reqClass } key={ req.title }>{ req.title }</p>
        );
    });

    return (
        <section className={ Styles.sprintComponent }>
            <div className={ Styles.info }>
                <span className={ Styles.sprintNumber }>{ sprint.subtitle }</span>
                <h1 className={ Styles.title }>{ sprint.title }</h1>
                <div className={ Styles.progressBlock }>
                    <div className={ Styles.progressBar }>
                        <div className={ Styles.progress } style={ progressStyle }>
                            <span className={ Styles.percent } style={ percentStyle }>
                                <label>{ percent }% </label>
                            </span>
                        </div>
                    </div>
                </div>
                <div className={ Styles.quests }>
                    <div className={ Styles.items }>
                        { spintReqs }
                    </div>
                    <span>глав 0 / 31</span>
                </div>
            </div>
            <div className={ Styles.image }>
                <SprintImage className={ Styles.icon }/>
            </div>
        </section>
    );
}

/**
 * [IE]
 * Export
 */
export default Sprint;
