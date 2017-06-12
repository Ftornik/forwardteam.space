import React, { Component } from 'react';
import Helmet from 'react-helmet';

import UserApi from 'api/Users';
import PinApi from 'api/Pins';
import SprintApi from 'api/Sprints';
import ChallengeApi from 'api/Challenges';
import TeamApi from 'api/Teams';

import Meta from './Meta';
import * as Shared from 'components/Shared';
import * as User from 'components/User';

class UserPage extends Component {
    render = () => {
        const { params } = this.props;
        const userId = params.id;

        const user = UserApi.getById(userId);
        const team = TeamApi.getById(user.team);
        const pins = PinApi.getAll({ type: 'personal' });
        const sprint = SprintApi.getById('s1');
        const challenges = user.progress.challenges ? user.progress.challenges.map((challenge) => {
            return ChallengeApi.getById(challenge.id);
        }) : [];

        if (!user) {
            return null;
        }

        return (
            <div>
                <Helmet { ...Meta() }/>
                <Shared.Header/>
                <User.Info user={ user } team={ team } />
                <User.Sprint user={ user } sprint={ sprint }/>
                { user.team === 'chernigov' ? <User.Question/> : null }
                <User.Challenge user={ user } challenges={ challenges } />
                <User.Pins user={ user } pins={ pins }/>
            </div>
        );
    }
}

export default UserPage;
