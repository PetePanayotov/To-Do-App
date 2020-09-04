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
    
        if (username.length < 5) {
            input.style.backgroundColor = '#FF4040';
            input.value = '';
            return input.placeholder = 'Minimal length 5 symbols'
        }
            
        const promise = await fetch(url);
    
        if(promise.status === 200) {
    
            input.style.backgroundColor = '#FF4040';
            input.value = '';
            return input.placeholder = 'Username is already used';
     
        };
    
        input.style.backgroundColor = '#A2FFA2';
        input.placeholder = '';
        return setState({...state, updateUnBtnDisabled: false})
    },
    
    handleUsernameUpdate: async (e , state , userId) => {
    
        const {username} = state
        const date = {username};
    
        const headerObj = {
            method: 'PUT',
            headers: {
             'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(date)
        }
    
        const updateUrl = `http://localhost:9999/api/user/update/${userId}`;
        const updatePromise = await fetch(updateUrl , headerObj);
    
        if(updatePromise.status === 200) {
    
            return console.log('success')
        };
    
        return console.log('fail')
        
    
    },

};