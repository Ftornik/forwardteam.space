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

import * as PinImages from 'components/Assets/Pins';
import * as Stars from 'components/Assets/Stars';

function Pins(props) {
    const { user, pins } = props;

    const cPins = pins.map((pin) => {
        const Pin = PinImages[pin.id];
        if (!Pin) {
            return null;
        }

        const level = user.progress.pins[pin.id] ? parseInt(user.progress.pins[pin.id].level, 10) : -1;
        const pinClass = cx({
            [Styles.goodStart]: true,
            [Styles.disabled]: level === -1
        });
        const starsClass = cx({
            [Styles.oneStar]: level === 1,
            [Styles.twoStars]: level === 2,
            [Styles.threeStars]: level === 3
        });

        let Star = null;
        if (level > 0) {
            switch (level) {
                case 1: Star = Stars.One; break;
                case 2: Star = Stars.Two; break;
                case 3: Star = Stars.Three; break;
            }
        }

        return (
            <div className={ Styles.pinItem } key={ pin.id }>
                <h3 className={ Styles.pinName }>{ pin.title }</h3>
                <div className={ Styles.icons }>
                    <Pin className={ pinClass }/>
                    { Star ? <Star className={ starsClass }/> : null }
                </div>
            </div>
        );
    });

    return (
        <section className={ Styles.pinsComponent }>
            <h1 className={ Styles.title }>Пины</h1>
            <div className={ Styles.pins }>
                { cPins }
            </div>
        </section>
    );
}

/**
 * [IE]
 * Export
 */
export default Pins;
