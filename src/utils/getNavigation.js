const getNavigation = (isLoggedIn) => {

    const loggedIn = [

        {
            title: 'Profile'
        },

        {
            title: 'Home',

        },

        {
            title: 'Create'
        },
        
        {
            title: 'About',
        },

        {
            title: 'Logout'
        }



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