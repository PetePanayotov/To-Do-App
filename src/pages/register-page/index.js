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

    const handleBlur = (event) => {

        const target = event.target;
        
        const {password , rePassword} = state;

        if(password !== rePassword) {
            target.style.backgroundColor = "#FF4848";
        };

    };

    const handleUserNameBlur = (event) => {

        const target = event.target;
        const {username} = state;

        const url = '';

    };

 
    
    return (
        
        <PageWrapper>
           
            <Form>

                <InputContainer>
                    <FormLabel>Username</FormLabel>
                    <InputField value={state.username} 
                        onChange={e => handleChange(e , 'username')}
                        onBlur={e => handleUserNameBlur(e)}
                    />
                </InputContainer>

                <InputContainer>
                    <FormLabel>Password</FormLabel>
                    <InputField type="password" value={state.password} onChange={e => handleChange(e , 'password')}/>
                </InputContainer>

                <InputContainer>
                    <FormLabel>Repeat Password</FormLabel>
                    <InputField type="password" value={state.rePassword} onChange={e => handleChange(e , 'rePassword')} onBlur={e => handleBlur(e)}/>
                </InputContainer>

                <Button type="submit" onClick={e => handleSubmit(e)}>Register</Button>

                <FormParagraph>Already have an account? <LinkComponent href="/login" type="formLink" text="Login"/></FormParagraph>

            </Form>

        </PageWrapper>
    )

};

export default RegisterPage;