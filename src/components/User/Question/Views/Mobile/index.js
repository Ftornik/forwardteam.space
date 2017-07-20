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

function Question(props) {
    const { question } = props;

    if (!question) {
        return null;
    }

    return (
        <section className={ Styles.questionComponent }>
            <div className={ Styles.info }>
                <div className={ Styles.title }>
                    <span className={ Styles.questionMonth }>Вопрос месяца</span>&nbsp;
                    <span className={ Styles.month }>(июнь)</span>
                </div>
                <p className={ Styles.question } dangerouslySetInnerHTML={{ __html: question.text }}/>
                <div className={ Styles.answer }>
                    <p className={ Styles.text } dangerouslySetInnerHTML={{ __html: question.additional }}/>
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
