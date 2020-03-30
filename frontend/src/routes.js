import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profiles from './pages/Profiles';
import Incidents from './pages/Incidents';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}/>
                <Route path="/register"component={Register}/>
                <Route path="/profiles" component={Profiles} />
                <Route path="/Incidents" component={Incidents} />
            </Switch>
        </BrowserRouter>
    );
}