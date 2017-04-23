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

import Male from 'components/Assets/Male';
import Female from 'components/Assets/Female';

function Mobile(props) {
    const { users } = props;

    const cUsers = users.map((user) => {
        const Photo = user.gender === 'male' ? Male : Female;

        return (
            <div className={ Styles.pinItem } key={ user.id }>
                <h3 className={ Styles.pinName }>{ `${user.firstName} ${user.lastName}` }</h3>
                <div className={ Styles.icons }>
                    <Photo className={ Styles.goodStart }/>
                </div>
            </div>
        );
    });

    return (
        <section className={ Styles.membersComponent }>
            <h1 className={ Styles.title }>Состав команды</h1>
            <div className={ Styles.pins }>
                { cUsers }
            </div>
        </section>
    );
}

/**
 * [IE]
 * Export
 */
export default Mobile;
