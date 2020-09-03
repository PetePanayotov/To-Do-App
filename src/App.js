import React , {useState, useEffect} from 'react';
import UserContext from './Context';
import verifyUser from './utils/App-handlers';


const App = (props) => {

    const initialState = {
        
        isLoggedIn: null, 
        user: {}
        
    };

    const [state , setState] = useState(initialState)

    const login = (user) => {
        
        setState({
            isLoggedIn: true,
            user,
 
        });
    };

    const logout = () => {
        
        document.cookie = "oreo= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";

        setState({
            isLoggedIn: false,
            user: {},

        });

    };

    useEffect(() => {

        verifyUser(login , logout);
        console.log('i was rendered')
    } , []);

    
    const {isLoggedIn , user} = state;

    if (isLoggedIn === null) {

        return(<div>Loading...</div>);

    };

    return(

        <UserContext.Provider 
            value = {{
                isLoggedIn,
                user,
                login,
                logout

            }}
        >
            
            {props.children}

        </UserContext.Provider>
    
    );
    
};

export default App;