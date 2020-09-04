export default {

    handleChange: (e , state , setState , type) => {

        const value = e.target.value;
    
        const newState = {[type]: value};
    
        setState({...state , ...newState});
    
    },
    
    handleInputBlur: async (e , state ,setState) => {
    
        const input = e.target;
        const {username} = state;
    
        const url = `http://localhost:9999/api/user/validate/${username}`;
        let newState;
        
        if (username.length < 5) {
            input.style.backgroundColor = '#FF4040';
            newState = {
                username: '',
                usernameIsCorrect: false
            }
            
            input.placeholder = 'Minimal length 5 symbols';

            return setState({...state , ...newState});
        }
            
        const promise = await fetch(url);
    
        if(promise.status === 200) {
    
            input.style.backgroundColor = '#FF4040';
            newState = {
                username: '',
                usernameIsCorrect: false
            };

            input.placeholder = 'Username is already used';
            return setState({...state , ...newState});
        };
    
        input.style.backgroundColor = '#A2FFA2';
        input.placeholder = '';
        newState = {usernameIsCorrect: true};
        return setState({...state, ...newState});
    },
    
    updateUsername: async (e , history ,state , userId) => {
    
        const {username , usernameIsCorrect} = state

        if(!usernameIsCorrect) {
            return;
        }

        const date = {username};
    
        const headerObj = {
            method: 'PUT',
            headers: {
             'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(date)
        }
    
        const url = `http://localhost:9999/api/user/update/${userId}`;
        const promise = await fetch(url , headerObj);
    
        if(promise.status === 200) {
    
            return history.push('/')
        };
    
        return;
        
    },

    handlePasswordBlur: (e , state , setState) => {

        const input = e.target;
        const {password} = state;
        
        if(password.length < 7) {
            
            input.style.backgroundColor = '#FF4040';
            input.placeholder = 'Minimal length - 7 symbols';
            const newState = {
                password: '',
                passwordIsCorrect: false
            };
            return setState({...state , ...newState});
            
        };
        
        input.style.backgroundColor = '#A2FFA2';
        input.placeholder = '';
        const newState = {passwordIsCorrect: true};
        return setState({...state , ...newState});
    
    
    
    },
    
    handleRePasswordBlur: (e , state , setState) => {
    
        const input = e.target;
        const {password , rePassword} = state;
    
        if(rePassword !== password) {
    
            input.style.backgroundColor = '#FF4040';
            input.value = '';
            input.placeholder = "Passwords don't match";
            const newState = {
                rePassword: '',
                rePasswordIsCorrect: false
            };
            return setState({...state , ...newState});
    
        };
    
        input.style.backgroundColor = '#A2FFA2';
        input.placeholder = '';
        const newState = {rePasswordIsCorrect: true};
        return setState({...state , ...newState});
    
    },
    
    updatePassword: async (e , history ,state , userId) => {
    
        const {password , passwordIsCorrect , rePasswordIsCorrect} = state;
    
        if(passwordIsCorrect && rePasswordIsCorrect) {

            const url = `http://localhost:9999/api/user/update/${userId}`;
            const date = {password};
    
            const headerObj = {
                method: 'PUT',
                headers: {
                 'Content-type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify(date)
            }
    
            const promise = await fetch(url , headerObj);
        
            if(promise.status === 200) {
        
                return history.push('/')
            };

            return;
        
        };
    
        return;
    
    }

};