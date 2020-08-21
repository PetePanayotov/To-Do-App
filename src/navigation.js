import React , {Component} from 'react';
import { BrowserRouter, Switch , Route } from 'react-router-dom';
import GuestHomePage from './pages/guest-home-page';



class Navigation extends Component {

    render () {
        
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={GuestHomePage}/>
                </Switch>
            </BrowserRouter>
        )
    }

};

export default Navigation;