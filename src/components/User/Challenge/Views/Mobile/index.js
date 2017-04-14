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
        [Styles.active]: true
    });

    const defaultChallenges$ = [
            <p className={ reqClass }>
                Вести молитвенный дневник в течение 21 дня<br/><br/>
                – Этот челлендж ты можешь выполнять как с помощью тетради, так и с помощью заметок в смартфоне. Но обязательно обдумай этот момент, чтобы все твои записи сохранились.<br/><br/>
                – Каждый день утром или вечером записывай свою молитву, разделяя ее на четыре части: Поклонение (здесь просто пиши о том, каков Бог), Исповедания (хорошая возможность попросить прощения у Него), Благодарность (ну ты понимаешь:), Ходатайство (проси о других людях, их переживаниях и радостях, о наших переживаниях и радостях, о всем). Просто пиши все то, что будет на сердце.<br/><br/>
                Или: раздели на три таких блока: Благодарность, Прошение, Люди, которых я хочу привести к Богу.<br/><br/>
                ВАЖНО: Записи твоего молитвенного дневника никто (кроме тебя и Бога:) читать не будет.
            </p>,
            <p className={ Styles.submit }>TTL – <b>22 апреля</b>. После выполнения челленджа <a href="https://goo.gl/forms/6I4CUQ3HOL47GqRL2">переходи сюда.</a></p>,
            <p className={ reqClass }>
                Запустить молитвенную цепочку на 14 дней<br/><br/>
                Молитвенная цепочка - это минимум два человека, которые созваниваются каждый день для общей молитвы.<br/><br/>
                Все очень просто: пригласи друзей, молись вместе с ними в назначенное время, получай ответы от Бога.
            </p>,
            <p className={ Styles.submit }>TTL – <b>20 апреля</b>. После выполнения челленджа <a href="https://goo.gl/forms/3fqesDg5g7PCxaYM2">переходи сюда</a></p>,
            <p className={ reqClass }>
                Написать по 7 библейских обетований на 5 жизненных ситуаций<br/><br/>
                Жизненные ситуации: Трудности в учебе, прощение друга, поддержка человека, который тяжело болен, уважение к родителям, духовное возрождение.
            </p>,
            <p className={ Styles.submit }>TTL – <b>18 апреля</b>. После выполнения челленджа <a href="https://goo.gl/forms/RrECPttCGYZo7K4V2">переходи сюда</a></p>
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

        return (
            <p className={ reqClass } dangerouslySetInnerHTML={{ __html: ch.text }} key={ ch.id } />
        );
    }) : [];

    return (
        <section className={ Styles.challengeComponent }>
            <div className={ Styles.info }>
                <div className={ Styles.title }>
                    <span className={ Styles.questionMonth }>Челенджи месяца</span>&nbsp;
                    <span className={ Styles.month }>(апрель)</span>
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
