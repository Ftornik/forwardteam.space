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
                <p className={ Styles.question }>Какой тип темперамента был у Иисуса?</p>
                <div className={ Styles.answer }>
                    <span className={ Styles.label }>Ответ:</span>
                    <p className={ Styles.text }>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco.
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
