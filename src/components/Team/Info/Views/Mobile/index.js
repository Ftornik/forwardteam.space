/**
 * [IL]
 * Library Import
 */
import React, { PropTypes } from 'react';

/**
 * [IS]
 * Style Import
 */
import Styles from './Styles/main.scss';

import Male from 'components/Assets/Male';
import Female from 'components/Assets/Female';

function Info(props) {
    const { team } = props;
    const progressStyle = {
        // width: `${user.progress.amount}%`
    };

    // const avatar = user.gender === 'female' ? <Female className={ Styles.female }/> : <Male className={ Styles.male }/>;
    const avatar = null;

    return (
        <section className={ Styles.infoComponent }>
            <div className={ Styles.content }>
                <div className={ Styles.image }>{ avatar }</div>
                <div className={ Styles.information }>
                    <span className={ Styles.name }>Команда: { team.name }</span>
                </div>
            </div>
        </section>
    );
}

Info.propTypes = {
    team: PropTypes.object.isRequired
};

/**
 * [IE]
 * Export
 */
export default Info;
