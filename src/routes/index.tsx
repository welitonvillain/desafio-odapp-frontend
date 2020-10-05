import React from 'react';
import { Switch, Route } from 'react-router-dom';

import List from '../pages/List';
import Register from '../pages/Register';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={List} />
            <Route path="/cadastro" component={Register} />
        </Switch>
    );
};

export default Routes;