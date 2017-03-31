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

import QuestionImage from 'components/Assets/Pins/Question';

function Question() {
    return (
        <section className={ Styles.questionComponent }>
            <div className={ Styles.info }>
                <div className={ Styles.title }>
                    <span className={ Styles.questionMonth }>Вопрос месяца</span>&nbsp;
                    <span className={ Styles.month }>(апрель)</span>
                </div>
                <p className={ Styles.question }>
                    Кто является причиной природных катаклизмов: Бог, дьявол, человек?
                </p>
                <div className={ Styles.answer }>
                    <p className={ Styles.text }>
                        Дай ответ на основании Библии и Духа пророчества
                    </p>
                </div>
            </div>
            <div className={ Styles.image }>
                <QuestionImage className={ Styles.icon }/>
            </div>
        </section>
    );
}

/**
 * [IE]
 * Export
 */
export default Question;
