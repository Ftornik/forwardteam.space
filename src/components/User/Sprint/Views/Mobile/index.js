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

import GoodStart from 'components/Assets/Pins/GoodStart';
import ThreeStars from 'components/Assets/ThreeStars';

function Sprint() {
    const percent = 0;
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

    const className = cx({
        [Styles.item]: true,
        [Styles.active]: true
    });

    return (
        <section className={ Styles.sprintComponent }>
            <div className={ Styles.info }>
                <span className={ Styles.sprintNumber }>Спринт #1</span>
                <h1 className={ Styles.title }>Личностный рост</h1>
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
                        <div className={ className }>
                            <p className={ Styles.text }>
                                Прочитать книгу Притчи за месяц
                                <span className={ Styles.progress }>глав 0 / 31</span>
                            </p>
                        </div>
                        <div className={ Styles.item }>
                            <p className={ Styles.text }>
                                Учавствовать в викторине по книги Притчи
                            </p>
                        </div>
                        <div className={ Styles.item }>
                            <p className={ Styles.text }>
                                Получить пин “Bible Digger”
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={ Styles.image }>
                <GoodStart className={ Styles.goodStart }/>
                <ThreeStars className={ Styles.threeStars }/>
            </div>
        </section>
    );
}

/**
 * [IE]
 * Export
 */
export default Sprint;
