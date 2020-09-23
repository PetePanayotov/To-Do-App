import React from 'react';

const UserContext = React.createContext({
    isLoggedIn: null,
    user: null,
    language: 'EN',
    login: () => {},
    logout: () => {},
    changeLang: () => {}
});

export default UserContext;