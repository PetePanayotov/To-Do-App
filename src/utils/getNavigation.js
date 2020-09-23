const getNavigation = (isLoggedIn) => {

    const loggedIn = [

        {
            title: 'home',
            href: '/'

        },

        {
            title: 'add',
            href: '/add'
        },
        
        {
            title: 'about',
            href: '/about'
        },


    ]

    const notLoggedIn = [

        {
            title: 'home',
            href: '/'

        },

        {
            title: 'about',
            href: '/about'
        },

        {
            title: 'login',
            href: '/login'
        },

        {
            title: 'register',
            href: '/register'
        }
    ];

    if(isLoggedIn) {
        return loggedIn;
    };

    return notLoggedIn;

};

export default getNavigation;