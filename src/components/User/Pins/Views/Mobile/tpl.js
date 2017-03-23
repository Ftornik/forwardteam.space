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

import GoodStart from 'components/Assets/Pins/GoodStart';
import Sprint from 'components/Assets/Sprint';
import ThreeStars from 'components/Assets/Stars/Three';
import TwoStars from 'components/Assets/Stars/Two';
import Star from 'components/Assets/Stars/One';

function Pins() {
    return (
        <section className={ Styles.pinsComponent }>
            <h1 className={ Styles.title }>Пины</h1>
            <div className={ Styles.pins }>
                <div className={ Styles.pinItem }>
                    <h3 className={ Styles.pinName }>Good start</h3>
                    <div className={ Styles.icons }>
                        <GoodStart className={ Styles.goodStart }/>
                        <ThreeStars className={ Styles.threeStars }/>
                    </div>
                </div>
                <div className={ Styles.pinItem }>
                    <h3 className={ Styles.pinName }>Good start</h3>
                    <div className={ Styles.icons }>
                        <GoodStart className={ Styles.goodStart }/>
                        <TwoStars className={ Styles.twoStars }/>
                    </div>
                </div>
                <div className={ Styles.pinItem }>
                    <h3 className={ Styles.pinName }>Good start</h3>
                    <div className={ Styles.icons }>
                        <GoodStart className={ Styles.goodStart }/>
                        <Star className={ Styles.Star }/>
                    </div>
                </div>
                <div className={ Styles.pinItem }>
                    <h3 className={ Styles.pinName }>Good start</h3>
                    <div className={ Styles.icons }>
                        <Sprint className={ Styles.sprint }/>
                    </div>
                </div>
                <div className={ Styles.pinItem }>
                    <h3 className={ Styles.pinName }>Good start</h3>
                    <div className={ Styles.icons }>
                        <GoodStart className={ Styles.goodStart }/>
                    </div>
                </div>
                <div className={ Styles.pinItem }>
                    <h3 className={ Styles.pinName }>Good start</h3>
                    <div className={ Styles.icons }>
                        <Sprint className={ Styles.sprint }/>
                    </div>
                </div>
                <div className={ Styles.pinItem }>
                    <h3 className={ Styles.pinName }>Good start</h3>
                    <div className={ Styles.icons }>
                        <Sprint className={ Styles.sprint }/>
                    </div>
                </div>
                <div className={ Styles.pinItem }>
                    <h3 className={ Styles.pinName }>Good start</h3>
                    <div className={ Styles.icons }>
                        <Sprint className={ Styles.sprint }/>
                    </div>
                </div>
            </div>
        </section>
    );
}

/**
 * [IE]
 * Export
 */
export default Pins;
