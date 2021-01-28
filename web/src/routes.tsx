import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SideBar from './components/sideBar';
import HomePage from './pages/homePage';

const ApplicationRoutes: React.FC = () => {
    return(
        <BrowserRouter>
        <SideBar/>
        <Switch>
        <Route path="/" exact component={HomePage} />
        </Switch>
        </BrowserRouter>
    )
}

export default ApplicationRoutes