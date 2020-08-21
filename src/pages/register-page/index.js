import React, { useState } from 'react';
import PageWrapper from '../../components/page-wrapper';

const RegisterPage = () => {

    const initialState = {
        username: '',
        password: '',
        rePassword: ''
    }

    const [state , setState] = useState(initialState);

    const handleChange = (event , type) => {

        const value = event.target.value;

        const newState = {};

        newState[type] = value;

        setState({...state , ...newState})
    };

    const handleSubmit = async (event) => {

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

    
    };

 
    
    return (
        
        <PageWrapper>
            <form>
                <div>
                    <label>Username</label>
                    <input value={state.username} onChange={e => handleChange(e , 'username')}/>
                </div>
                <div>
                    <label>Password</label>
                    <input value={state.password} onChange={e => handleChange(e , 'password')}/>
                </div>
                <div>
                    <label>Repeat Password</label>
                    <input value={state.rePassword} onChange={e => handleChange(e , 'rePassword')}/>
                </div>
                <button type="submit" onClick={e => handleSubmit(e)}>Register</button>
            </form>
        </PageWrapper>
    )

};

export default RegisterPage;