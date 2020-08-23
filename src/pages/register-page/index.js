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

const RegisterPage = () => {

    const initialState = {
        username: '',
        password: '',
        rePassword: '',
        passwordIsDisabled: true,
        rePasswordIsDisabled: true,
        buttonIsDisabled: true
    };

    const [state , setState] = useState(initialState);

    const handleChange = (event , type) => {

        const value = event.target.value;

        const newState = {};

        newState[type] = value;

        setState({...state , ...newState})
    };

    const handleSubmit = async (event) => {

        event.preventDefault();
        console.log(state)
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////
    const handleUserNameBlur = async (event) => {
        
        const target = event.target;
        const value = target.value;
        const url = `http://localhost:9999/api/user/${value}`;

        const lengthError = 'Minimal length - 5 symbols';
        const usageError = 'Username is already used'

        const handleError = (errorText) => {

            target.value = ''
            target.style.backgroundColor = '#FF4040'
            target.placeholder = errorText;
        }

        if (value.length < 5) {
            return handleError(lengthError);
        }
        
        const promise = await fetch(url);
        const response = await promise.json();

        if (response[0]) {
            return handleError(usageError);
        };

        const newState = {
            passwordIsDisabled: false
        };

        setState({...state , ...newState});
        target.style.backgroundColor = '#A2FFA2';
        target.placeholder = '';

    };

    const handlePasswordBlur = (event) => {

        const target = event.target;
        const value = target.value;

        if(value.length < 7) {

            const newState = {};

            newState['password'] = '';
            setState({...state , ...newState});

            target.style.backgroundColor = '#FF4040'
            target.placeholder = 'Minimal Length - 7 symbols';

            return;
        };

        const newState = {
            rePasswordIsDisabled: false
        };

        setState({...state , ...newState});
        target.style.backgroundColor = '#A2FFA2';
        target.placeholder = '';

    };

    const handleRePasswordBlur = (event) => {

        const target = event.target;
        const value = target.value;
        const {password} = state;
        
        if(value !== password) {

            const newState = {};

            newState['rePassword'] = '';
            setState({...state , ...newState});

            target.style.backgroundColor = '#FF4040'
            target.placeholder = "Passwords don't match";

            return;
        };

        const newState = {
            buttonIsDisabled: false
        };

        setState({...state , ...newState});
        target.style.backgroundColor = '#A2FFA2';
        target.placeholder = '';
    }

    const {username , password , rePassword , passwordIsDisabled , rePasswordIsDisabled , buttonIsDisabled} = state;
    
    return (
        
        <PageWrapper>
           
            <Form>

                <InputContainer>
                    <FormLabel>Username</FormLabel>
                    <InputField value={username} 
                        onChange={e => handleChange(e , 'username')}
                        onBlur={e => handleUserNameBlur(e)}
                    />
                </InputContainer>

                <InputContainer>
                    <FormLabel>Password</FormLabel>
                        <InputField 
                            type="password" 
                            value={password}
                            disabled={passwordIsDisabled}
                            onChange={e => handleChange(e , 'password')}
                            onBlur={e => handlePasswordBlur(e)}
                        />
                </InputContainer>

                <InputContainer>
                    <FormLabel>Repeat Password</FormLabel>
                    <InputField 
                        type="password" 
                        value={rePassword}
                        disabled={rePasswordIsDisabled} 
                        onChange={e => handleChange(e , 'rePassword')} 
                        onBlur={e => handleRePasswordBlur(e)}/>
                </InputContainer>

                <Button 
                    type="submit"
                    disabled={buttonIsDisabled}
                    onClick={e => handleSubmit(e)}
                >
                        Register
                </Button>

                <FormParagraph>Already have an account? <LinkComponent href="/login" type="formLink" text="Login"/></FormParagraph>

            </Form>

        </PageWrapper>
    )

};

export default RegisterPage;