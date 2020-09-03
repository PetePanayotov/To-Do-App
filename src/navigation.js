import React, { useContext } from 'react';
import { BrowserRouter, Switch , Route } from 'react-router-dom';
import UserContext from './Context';
import HomePage from './pages/home-page';
import RegisterPage from './pages/register-page';
import LoginPage from './pages/login-page';
import AboutPage from './pages/about-page';
import SevenDayForecastPage from './pages/7-day-forecast';
import SeventyTwoHourForecast from './pages/48-hour-forecast';
import AddPage from './pages/add-page';
import ActivitiesPage from './pages/activities-page';
import SettingsPage from './pages/settings-page';

const Navigation = () => {

    const context = useContext(UserContext);
    const {isLoggedIn} = context;

    return(

        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/register" component={isLoggedIn ? HomePage : RegisterPage}/>
                <Route path="/login" component={isLoggedIn ? HomePage : LoginPage}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/seven-day-forecast" component={isLoggedIn ? SevenDayForecastPage : HomePage}/>
                <Route path="/72-hour-forecast" component={isLoggedIn ? SeventyTwoHourForecast : HomePage}/>
                <Route path="/add" component={isLoggedIn ? AddPage : HomePage}/>
                <Route path="/activities" component={isLoggedIn ? ActivitiesPage : HomePage}/>
                <Route path="/settings" component={isLoggedIn ? SettingsPage : HomePage}/>
                
            </Switch>
        </BrowserRouter>
    );

};

export default Navigation;