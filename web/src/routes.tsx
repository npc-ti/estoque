import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import SideBar from './components/sideBar';
import UnfoundPage from './pages/404Page';
import LoginPage from './pages/auth/login';
import RegisterPage from './pages/auth/register';
import HomePage from './pages/homePage';
import { isAuthenticated } from './services/auth';

const PrivateRoute = ({component: Component, rest}: any) => {
    return <Route
        {...rest}
        render={(props: any) =>
        isAuthenticated()? (
            <Component {...props} />)
        : (
            <Redirect to="/login"/>)
        }
    >
    </Route>
}

const DashRouters: React.FC = () => {
    return (<>
        <SideBar/>
        <Switch>

        <PrivateRoute path="/" exact component={HomePage} />

        </Switch>
    </>
    )
}




const Routes: React.FC = () => {
    return(
        <BrowserRouter>
        <Switch>
        <PrivateRoute path="/" exact component={HomePage} />

        <Route path="/login" exact component={LoginPage} />
        <Route path="/register" exact component={RegisterPage} />
        <Route component={UnfoundPage}/>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes