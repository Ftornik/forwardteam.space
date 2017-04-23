import React, { Component } from 'react';
import Helmet from 'react-helmet';

import TeamApi from 'api/Teams';
import PinApi from 'api/Pins';
import UserApi from 'api/Users';

import Meta from './Meta';
import * as Shared from 'components/Shared';
import * as Team from 'components/Team';

class TeamPage extends Component {
    render = () => {
        const { params } = this.props;
        const teamId = params.id;

        const team = TeamApi.getById(teamId);
        if (!team) {
            return null;
        }

        const pins = PinApi.getAll({
            type: 'team'
        });
        const members = UserApi.getByTeam(teamId);

        return (
            <div>
                <Helmet { ...Meta() }/>
                <Shared.Header/>
                <Team.Info team={ team }/>
                <Team.Members users={ members }/>
                <Team.Pins pins={ pins } team={ team }/>
            </div>
        );
    }
}

export default TeamPage;
