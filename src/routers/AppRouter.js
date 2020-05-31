// importing modules
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// importing components
import HomePage from '../Pages/HomePage';

const appRouter = () => (
    <BrowserRouter>
        <div>
        <Switch>
            <Route path="/" component={HomePage} exact />
        </Switch>
        </div>
    </BrowserRouter>
);

export default appRouter;
