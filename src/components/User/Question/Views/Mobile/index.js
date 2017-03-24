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
                    <span className={ Styles.month }>(март)</span>
                </div>
                <p className={ Styles.question }>Иисус утверждал (Матф. 15:4) или отменял (Матф. 10:37, Лука 14:26)
                    пятую заповедь?</p>
                <div className={ Styles.answer }>
                    <span className={ Styles.label }>Ответ:</span>
                    <p className={ Styles.text }>
                        Ищите в Библии и <a href="https://goo.gl/forms/yJhzbWSTWPxRYnss2">отправляйте сюда</a>
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
