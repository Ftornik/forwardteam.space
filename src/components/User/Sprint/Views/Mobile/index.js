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

import GoodStart from 'components/Assets/GoodStart';
import ThreeStars from 'components/Assets/ThreeStars';

function Sprint() {
    const percent = 100;
    const maxPercent = 91;

    const progressStyle = {
        width: `${percent}%`
    };

    const percentStyle = {
        left: percent > maxPercent ? `${maxPercent}%` : `${percent}%`
    };

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
                        <p className={ className }>Прочитать  книгу Притчи за месяц</p>
                        <p className={ Styles.item }>Учавствовать в викторине по книги Притчи</p>
                        <p className={ Styles.item }>Получить пин “Bible Digger”</p>
                    </div>
                    <span>глав 0 / 31</span>
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
