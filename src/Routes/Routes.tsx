import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import InputMember from '../Pages/InputMembers';

export default (props: any) => {
    <Switch>
        <Route exact path='/' render={ (routeComponentProps) => {
            return <Home
                        {...routeComponentProps}
                        members={props.members}
                        groups={props.groups}
                        createGroups={props.createGroups}
                    />
        }   }   />
        <Route path='/input' component={ InputMember } />
    </Switch>
}