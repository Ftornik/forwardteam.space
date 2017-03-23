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
    const { gender } = props;
    const progressStyle = {
        width: '60%'
    };

    const avatar = gender === 'female' ? <Female className={ Styles.female }/> : <Male className={ Styles.male }/>;

    return (
        <section className={ Styles.infoComponent }>
            <div className={ Styles.content }>
                <div className={ Styles.image }>{ avatar }</div>
                <div className={ Styles.information }>
                    <span className={ Styles.name }>Эмма Садовая</span>
                    <div className={ Styles.progressBlock }>
                        <div className={ Styles.statusNames }>
                            <span className={ Styles.name }>Junior</span>
                            <span className={ Styles.name }>Mentor</span>
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
    gender: PropTypes.string.isRequired
};

/**
 * [IE]
 * Export
 */
export default Info;
