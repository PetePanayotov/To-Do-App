const getNavigation = (isLoggedIn , username ,userId) => {

    const loggedIn = [

        {
            title: `[${username}]`,
            href: `/profile/${userId}`
        },

        {
            title: 'Home',
            href: '/'

        },

        {
            title: 'Add',
            href: '/add'
        },
        
        {
            title: 'About',
            href: '/about'
        },


    ]

    const notLoggedIn = [

        {
            title: 'Home',
            href: '/'

        },

        {
            title: 'About',
            href: '/about'
        },

        {
            title: 'Login',
            href: '/login'
        },

        {
            title: 'Register',
            href: '/register'
        }
    ];

    if(isLoggedIn) {
        return loggedIn;
    };

    return notLoggedIn;

};

export default getNavigation;