import React , {Component} from 'react';
import UserContext from './Context';

function getCookie(name) {
    let v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
};

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: null,
            user: {},

        }
    };

    login = (user) => {
        
        this.setState({
            isLoggedIn: true,
            user,
 
        });
    };

    logout = () => {
        document.cookie = "oreo= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
        
        this.setState({
            isLoggedIn: false,
            user: {},

        });

    };

    componentDidMount() {

        (async () => {

            const cookieValue = getCookie('oreo');

            if (!cookieValue) {
                return this.logout()
                
            };
            
            const url = 'http://localhost:9999/api/user/verify';
            
            const data = {token: cookieValue};
      
            const headersObj = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            };
    
            const promise = await fetch(url , headersObj);

            if (promise.status === 200) {
                
                const user = await promise.json();
                return this.login(user);
            };

            return this.logout();
    
        })();


    };

    render() {

        const {isLoggedIn , user} = this.state;

        if (isLoggedIn === null) {
            return(<div>Loading...</div>);
        }

        return(
            <UserContext.Provider 
                value = {{
                    isLoggedIn,
                    user,
                    login: this.login,
                    logout: this.logout
    
                }}
            >
                
                {this.props.children}

            </UserContext.Provider>
        
        )
    }

};

export default App;


