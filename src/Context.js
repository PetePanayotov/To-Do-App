import React from 'react';

const UserContext = React.createContext({
    isLoggedIn: null,
    user: null,
    login: () => {},
    logout: () => {}
});

export default UserContext;