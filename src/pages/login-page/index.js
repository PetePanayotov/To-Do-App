import React, { useState } from 'react';
import PageWrapper from '../../components/page-wrapper';
import InputContainer from '../../components/form-input-div';
import FormLabel from '../../components/form-label';
import InputField from '../../components/form-input-field';
import Button from '../../components/button';
import Form from '../../components/form';
import LinkComponent from '../../components/link';
import paragraphsObj from '../../components/paragraph';
const {FormParagraph} = paragraphsObj;

const LoginPage = () => {

    const initialState = {
        username: '',
        password: '',
        passwordIsDisabled: true,
        buttonIsDisabled: true
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

        const url = 'http://localhost:9999/api/user/login';

        try {
            
            const user = await fetch(url , headerObj);
            
            if (!user) {
                throw new Error();
            };

            console.log('Successfully Logged In')

        } catch (error) {
            console.log(error)
        };

    };

    const handleUsernameBlur = async (event) => {

        const target = event.target;
        const value = target.value;
        const url = `http://localhost:9999/api/user/${value}`;

        const promise = await fetch(url);
        const response = await promise.json();

        if (response[0]) {

            const newState = {
                passwordIsDisabled: false
            };
    
            setState({...state , ...newState});
            target.style.backgroundColor = '#A2FFA2';
            target.placeholder = '';

            return;

        };

        const newState = {};

        newState['username'] = '';
        setState({...state , ...newState});
        
        target.style.backgroundColor = '#FF4040'
        target.placeholder = 'Invalid Username';

    };

    const handlePasswordBlur = async (event) => {

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
            target.value = ''
            target.style.backgroundColor = '#FF4040'
            target.placeholder = 'Invalid Password';

            return;
        };

        const newState = {
            buttonIsDisabled: false
        };

        setState({...state , ...newState});
        target.style.backgroundColor = '#A2FFA2';
        target.placeholder = '';

    }

    const {username , password , passwordIsDisabled , buttonIsDisabled} = state;
    
    return (
        
        <PageWrapper>
           
            <Form>

                <InputContainer>
                    <FormLabel>Username</FormLabel>
                    <InputField 
                        value={username} 
                        onChange={e => handleChange(e , 'username')}
                        onBlur={e => handleUsernameBlur(e)}
                    />
                </InputContainer>

                <InputContainer>
                    <FormLabel>Password</FormLabel>
                    <InputField 
                        type="password" value={password}
                        disabled={passwordIsDisabled}
                        onChange={e => handleChange(e , 'password')}
                        onBlur={e => handlePasswordBlur(e)}
                    />
                </InputContainer>

                <Button type="submit" 
                    onClick={e => handleSubmit(e)}
                    disabled={buttonIsDisabled}
                >
                    Login
                </Button>

                <FormParagraph>Not registered yet? <LinkComponent href="/register" type="formLink" text="Register"/></FormParagraph>

            </Form>

        </PageWrapper>
    )

};

export default LoginPage;