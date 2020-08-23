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

 
    
    return (
        
        <PageWrapper>
           
            <Form>

                <InputContainer>
                    <FormLabel>Username</FormLabel>
                    <InputField value={state.username} onChange={e => handleChange(e , 'username')}/>
                </InputContainer>

                <InputContainer>
                    <FormLabel>Password</FormLabel>
                    <InputField type="password" value={state.password} onChange={e => handleChange(e , 'password')}/>
                </InputContainer>

                <Button type="submit" onClick={e => handleSubmit(e)}>Login</Button>

                <FormParagraph>Not registered yet? <LinkComponent href="/register" type="formLink" text="Register"/></FormParagraph>

            </Form>

        </PageWrapper>
    )

};

export default LoginPage;