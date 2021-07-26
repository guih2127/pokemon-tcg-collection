import React, { useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import CardListPage from './CardListPage';
import Header from './Header';
import HomePage from './HomePage';
import Login from './Login';
import useToken from './UseToken';

const App = ({ component }) => {
    const { token, setToken } = useToken();
    const [ redirect, setRedirect ] = useState(false);

    const LoggedInOrLoggedOutSwitch = () => {
        if (localStorage.getItem('token')) {
            return (
                <Route path="/Logout">
                    <LogoutHeader />
                </Route>
            )
        } else {
            return (
                <Route path="/Login">
                    <LoginHeader />
                </Route>
            )
        }
    }

    const redirectToLogin = () => {
        if (!localStorage.getItem('token')) {
            return (
                <Redirect to="/Login" push />
            );
        }
    }

    const conditionalLoginRender = () => {
        if (!localStorage.getItem('token')) {
            return (<div></div>);
        } else {
            return (
                <div>
                    <Header />
                </div>
            );
        }
    };

    return (
        <BrowserRouter>
            {redirectToLogin()}
            {conditionalLoginRender()}
            <Switch>
                <Route path="/Collection">
                    <CollectionHeader />
                </Route>
                <Route path="/CardList">
                    <CardListHeader />
                </Route>
                <Route path="/Home">
                    <HomeHeader />
                </Route>
                {LoggedInOrLoggedOutSwitch()}
            </Switch>
        </BrowserRouter>
    );

    function CollectionHeader() {
        return (
            <CardListPage isCollection={true} />
        );
    }

    function CardListHeader() {
        return (
            <CardListPage isCollection={false} />
        );
    }

    function HomeHeader() {
        return (
            <HomePage></HomePage>
        )
    }

    function LoginHeader() {
        return (
            <Login setToken={setToken}></Login>
        )
    }

    function LogoutHeader() {
        localStorage.removeItem('token');
        setRedirect(true);

        return (
            <Login setToken={setToken} redirect={true}></Login>
        )
    }
};
export default App;