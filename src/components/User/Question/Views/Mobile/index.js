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
                    <span className={ Styles.month }>(июнь)</span>
                </div>
                <p className={ Styles.question }>
                    Иисус утверждал (Мф.15:4) или отменял (Мф.10:37, Лк.14:26) 5-тую заповедь?
                </p>
                <div className={ Styles.answer }>
                    <p className={ Styles.text }>
                        Дай ответ на основании Библии в <a href="https://docs.google.com/forms/d/e/1FAIpQLScKWEIwreT2VO8xD3zI2IjdagHZwKcIko58GQoYKdkHv0o0MA/viewform">этой форме</a>
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
