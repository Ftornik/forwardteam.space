/**
 * [IL]
 * Library Import
 */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

/**
 * [IS]
 * Style Import
 */
import Styles from './Styles/main.scss';

import Male from 'components/Assets/Male';
import Female from 'components/Assets/Female';

function Info(props) {
    const { user, team } = props;
    const progressStyle = {
        width: `${user.progress.amount}%`
    };

    const avatar = user.gender === 'female' ? <Female className={ Styles.female }/> : <Male className={ Styles.male }/>;
    const levels = [user.level];
    switch (user.level) {
        case 'junior':
            levels.push('senior');
            break;
        case 'senior':
            levels.push('staff');
            break;
    }

    return (
        <section className={ Styles.infoComponent }>
            <div className={ Styles.content }>
                <div className={ Styles.image }>{ avatar }</div>
                <div className={ Styles.information }>
                    <span className={ Styles.name }>{ `${user.firstName} ${user.lastName}` }</span>
                    <span className={ Styles.team }><Link to={ `/team/${user.team}` }>{ team.name }</Link></span>
                    <div className={ Styles.progressBlock }>
                        <div className={ Styles.statusNames }>
                            <span className={ Styles.name }>{ levels[0] }</span>
                            <span className={ Styles.name }>{ levels[1] }</span>
                        </div>
                        <div className={ Styles.progressBar }>
                            <div className={ Styles.progress } style={ progressStyle }/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

Info.propTypes = {
    user: PropTypes.object.isRequired
};

/**
 * [IE]
 * Export
 */
export default Info;
