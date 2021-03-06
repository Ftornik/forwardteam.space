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

import SprintImage from 'components/Assets/Pins/Sprint';

function Sprint(props) {
    const { user, sprint } = props;
    const sprintProgress = user.progress.sprints[sprint.id] ? user.progress.sprints[sprint.id] : null;

    const percent = sprintProgress.amount;
    const maxPercent = 94;
    const maxRightOffset = 91;
    const minPercent = 4;

    const progressStyle = {
        width: `${percent}%`
    };

    const percentStyle = {
        left: `${percent}%`,
        transform: percent > minPercent && percent < maxPercent ? 'translateX(-54%)' : null
    };

    if (percent >= maxPercent) {
        percentStyle.left = `${maxRightOffset}%`;
    } else if (percent <= minPercent) {
        percentStyle.left = '0';
    }

    const spintReqs = sprint.requirements.map((req) => {
        let reqDone = false;
        let reqCount = 0;
        if (sprintProgress[req.id]) {
            if (req.count) {
                reqCount = sprintProgress[req.id];
                reqDone = req.count.total === sprintProgress[req.id];
            } else {
                reqDone = true;
            }
        }

        const reqClass = cx({
            [Styles.item]: true,
            [Styles.active]: reqDone
        });

        const progress = req.count ? (
            <span className={ Styles.progress }>{ req.count.title } { reqCount } / { req.count.total }</span>
        ) : null;

        return (
            <div className={ reqClass } key={ req.title }>
                <p className={ Styles.text }>
                    { req.title }
                    { progress }
                </p>
            </div>
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
