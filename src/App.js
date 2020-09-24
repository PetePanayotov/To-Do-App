import React , {useState, useEffect , useCallback} from 'react';
import UserContext from './Context';
import verifyUser from './utils/App-handlers';


const App = (props) => {

    const initialState = {
        
        isLoggedIn: null, 
        user: {},
        language: sessionStorage.getItem('language') || 'EN'
        
    };

    const [state , setState] = useState(initialState)

    useCallback(

    )
    const login = (user) => {

        const newState = {isLoggedIn: true, user}
        
        setState({
            ...state,
            ...newState
        });
    };

    const logout = () => {
        
        document.cookie = "oreo= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";

        const newState = {isLoggedIn: false , user: {}}

        setState({
            ...state,
            ...newState
        });

    };

    const changeLang = (val) => {

        sessionStorage.setItem('language' , val);

        const newState = {language: val};

        setState({
            ...state,
            ...newState
        })

    }

    useEffect(() => {

        verifyUser(login , logout);
    } , [])

    
    const {isLoggedIn , user , language} = state;

    if (isLoggedIn === null) {

        return(<div>Loading...</div>);

    };

    return(

        <UserContext.Provider 
            value = {{
                isLoggedIn,
                user,
                language,
                login,
                logout,
                changeLang
            }}
        >
            
            {props.children}

        </UserContext.Provider>
    
    );
    
};

export default App;