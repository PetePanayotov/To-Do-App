const handleError = (target , errorText , state , setState , firstProp , secondProp) => {

    const newState = {
        [firstProp]: '',
        [secondProp]: false
    }

    target.style.backgroundColor = '#FF4040'
    target.placeholder = errorText;
    
    return setState({...state , ...newState});
};

const handleSuccess = (target , state , setState , firstProp , value , secondProp) => {

    target.style.backgroundColor = '#A2FFA2';
    target.placeholder = '';
        
    const newState = {
        [firstProp]: value,
        [secondProp]: true
    };
        
    return setState({...state , ...newState});

};

export default {

    handleChange : (event , state , setState ,type) => {

        const value = event.target.value;

        const newState = {};

        newState[type] = value;

        setState({...state , ...newState})
    },

    register : async (event, context , history , state) => {

        event.preventDefault();

        const {usernameIsCorrect , passwordIsCorrect , rePasswordIsCorrect} = state;

        if (usernameIsCorrect && passwordIsCorrect && rePasswordIsCorrect) {
          
            const data = {};
            Object.assign(data , state);
            
            const headerObj = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            };
    
            const url = 'http://localhost:9999/api/user/register';
    
            try {
    
                const promise = await fetch(url , headerObj);
                const response = await promise.json();
                
                if (!response) {
                    throw new Error();
                };
    
                const token = promise.headers.get('Authorization');
     
                document.cookie = `oreo=${token}`;
    
                context.login({
                    username: response.username,
                    userId: response._id
                });
    
                history.push('/')
    
            } catch (error) {
                console.log(error)
            };
        };

    },

    login : async (event, context , history , state) => {

        event.preventDefault();

        const {usernameIsCorrect , passwordIsCorrect} = state;

        if (usernameIsCorrect && passwordIsCorrect) {
            
            const data = {};
            Object.assign(data , state);
            
            const headerObj = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            };
    
            const url = 'http://localhost:9999/api/user/verifyPassword'
    
            const promise = await fetch(url , headerObj);
    
            if(promise.status === 200) {
    
                const response = await promise.json();
    
                const token = promise.headers.get('Authorization');
     
                document.cookie = `oreo=${token}`;
    
                context.login({
                    username: response.username,
                    userId: response._id
                });
    
                history.push('/')
    
            };
        };

    },

    handleUserNameBlur : async (event , state , setState) => {
        
        const target = event.target;
        const username = target.value;
        const url = `http://localhost:9999/api/user/validate/${username}`;

        if (username.length < 5) {

            return handleError(target , 'Minimal length - 5 symbols' , state , setState , 'username' , 'usernameIsCorrect');

        };
        
        const promise = await fetch(url);

        if(promise.status === 200) {

            return handleError(target , 'Username is already used' , state , setState , 'username' , 'usernameIsCorrect');

        };

        return handleSuccess(target , state , setState , 'username' , username ,'usernameIsCorrect');

    },

    handleLoginUsernameBlur : async (event , state , setState) => {

        const target = event.target;
        const username = target.value;
        const url = `http://localhost:9999/api/user/validate/${username}`;

        const promise = await fetch(url);

        if(promise.status !== 200) {

            return handleError(target , 'Invalid username' , state , setState , 'username' , 'usernameIsCorrect');

        };

        return handleSuccess(target , state , setState , 'username' , username ,'usernameIsCorrect');
        
    },

    handleLoginPasswordBlur : async (event , state , setState) => {

        const target = event.target;
        const password = target.value;
        const {username} = state;
        const data = {username , password};

        const headerObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        const url = 'http://localhost:9999/api/user/verifyPassword';

        const promise = await fetch(url , headerObj);
     
        if(promise.status !== 200) {
            
            return handleError(target , 'Invalid password' , state , setState , 'password' , 'passwordIsCorrect');

        };

        return handleSuccess(target , state , setState , 'password' , password , 'passwordIsCorrect');

    },

    handlePasswordBlur : (event , state , setState) => {

        const target = event.target;
        const password = target.value;
        
        if(password.length < 7) {

            return handleError(target , 'Minimal Length - 7 symbols' , state , setState , 'password' , 'passwordIsCorrect');

        };

        return handleSuccess(target , state , setState , 'password' , password , 'passwordIsCorrect');

    },

    handleRePasswordBlur : (event , state , setState) => {

        const target = event.target;
        const rePassword = target.value;
        const {password} = state;

        if(rePassword !== password) {

            return handleError(target , "Passwords don't match" , state , setState , 'rePassword' , 'rePasswordIsCorrect');

        };

        return handleSuccess(target , state , setState , 'rePassword' , rePassword , 'rePasswordIsCorrect');

    },

    addActivity: async (event, history , state , userId) =>  {

        event.preventDefault();
    
        const data = {...state , userId};
       
        const url = `http://localhost:9999/api/activity/add`
        
        const headerObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
    
            
        const promise = await fetch (url , headerObj);
            
        if(promise && promise.status === 200) {
                
            console.log('Success');
            history.push('/')
    
        }else {
            console.log('Fail');
        };
    
    }

};