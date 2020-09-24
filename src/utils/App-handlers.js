const getCookie = (name) => {

    const v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;

};


export default async (login , logout) => {

    const cookieValue = getCookie('oreo');

    if (!cookieValue) {
        return logout()
        
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
        return login(user);
    };

    return logout();
    
};

