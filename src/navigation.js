import React , {Component} from 'react';
import { BrowserRouter, Switch , Route } from 'react-router-dom';
import GuestHomePage from './pages/guest-home-page';
import RegisterPage from './pages/register-page';
import LoginPage from './pages/login-page';
import AboutPage from './pages/about-page';
import SevenDayForecastPage from './pages/7-day-forecast';
import SeventyTwoHourForecast from './pages/48-hour-forecast';
import AddPage from './pages/add-page';


class Navigation extends Component {

    render () {
        
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={GuestHomePage}/>
                    <Route path="/register" component={RegisterPage}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/about" component={AboutPage}/>
                    <Route path="/seven-day-forecast" component={SevenDayForecastPage}/>
                    <Route path="/72-hour-forecast" component={SeventyTwoHourForecast}/>
                    <Route path="/add" component={AddPage}/>
                    
                </Switch>
            </BrowserRouter>
        )
    }

};

export default Navigation;