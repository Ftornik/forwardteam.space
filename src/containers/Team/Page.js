import React, { Component } from 'react';
import Helmet from 'react-helmet';

import TeamApi from 'api/Teams';
import PinApi from 'api/Pins';

import Meta from './Meta';
import * as Shared from 'components/Shared';
import * as Team from 'components/Team';

class TeamPage extends Component {
    render = () => {
        const { params } = this.props;
        const teamId = params.id;

        const team = TeamApi.getById(teamId);
        const pins = PinApi.getAll({
            type: 'team'
        });

        if (!team) {
            return null;
        }

        return (
            <div>
                <Helmet { ...Meta() }/>
                <Shared.Header/>
                <Team.Info team={ team }/>
                <Team.Pins pins={ pins }/>
            </div>
        );
    }
}

export default TeamPage;
