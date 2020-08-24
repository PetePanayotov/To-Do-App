const handleError = (target , errorText) => {

    target.value = ''
    target.style.backgroundColor = '#FF4040'
    target.placeholder = errorText;
};

const handleSuccess = (target , state , setState , property) => {

    const newState = {
        [property]: false
    };

    setState({...state , ...newState});
    target.style.backgroundColor = '#A2FFA2';
    target.placeholder = '';

};

export default {

    handleChange : (event , state , setState ,type) => {

        const value = event.target.value;

        const newState = {};

        newState[type] = value;

        setState({...state , ...newState})
    },

    handleSubmit : async (event , state) => {

        event.preventDefault();
        
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
            
            const user = await fetch(url , headerObj);
            
            if (!user) {
                throw new Error();
            };

            console.log('Successfully Registered')

        } catch (error) {
            console.log(error)
        }

    
    },

    handleUserNameBlur : async (event , state , setState) => {
        
        const target = event.target;
        const username = target.value;
        const url = `http://localhost:9999/api/user/${username}`;

        if (username.length < 5) {
            return handleError(target , 'Minimal length - 5 symbols');
        }
        
        const promise = await fetch(url);

        if(promise.status === 200) {

            return handleError(target , 'Username is already used');

        };

        return handleSuccess(target , state , setState , 'passwordIsDisabled');

    },

    handleLoginUsernameBlur : async (event , state , setState) => {

        const target = event.target;
        const username = target.value;
        const url = `http://localhost:9999/api/user/${username}`;

        const promise = await fetch(url);

        if(promise.status !== 200) {

            return handleError(target , 'Invalid Username')

        };

        return handleSuccess(target , state , setState , 'passwordIsDisabled');

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

            return handleError(target , 'Invalid Password')

        };

        return handleSuccess(target , state , setState , 'buttonIsDisabled');

    },

    handlePasswordBlur : (event , state , setState) => {

        const target = event.target;
        const value = target.value;

        if(value.length < 7) {

            return handleError(target , 'Minimal Length - 7 symbols');

        };

        return handleSuccess(target , state , setState , 'rePasswordIsDisabled');

    },

    handleRePasswordBlur : (event , state , setState) => {

        const target = event.target;
        const value = target.value;
        const {password} = state;
        
        if(value !== password) {

            return handleError(target , "Passwords don't match");
        };

        return handleSuccess(target , state , setState , 'buttonIsDisabled');

    }

};