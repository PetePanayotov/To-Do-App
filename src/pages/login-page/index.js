import React, { useState } from 'react';
import PageWrapper from '../../components/page-wrapper';
import InputContainer from '../../components/form-input-div';
import FormLabel from '../../components/form-label';
import InputField from '../../components/form-input-field';
import Button from '../../components/button';
import Form from '../../components/form';
import LinkComponent from '../../components/link';
import paragraphsObj from '../../components/paragraph';
import loginPageHandlers from '../../utils/login-register-page-handlers';

const {FormParagraph} = paragraphsObj;
const {handleChange , handleLoginUsernameBlur , handleLoginPasswordBlur} = loginPageHandlers;

const initialState = {
    username: '',
    password: '',
    passwordIsDisabled: true,
    buttonIsDisabled: true
}

const LoginPage = () => {

    const [state , setState] = useState(initialState);

    const handleSubmit = async (event) => {

        // event.preventDefault();

        // const data = {};
        // Object.assign(data , state);
        
        // const headerObj = {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // };

        // const url = 'http://localhost:9999/api/user/login';

        // try {
            
        //     const user = await fetch(url , headerObj);
            
        //     if (!user) {
        //         throw new Error();
        //     };

        //     console.log('Successfully Logged In')

        // } catch (error) {
        //     console.log(error)
        // };

    };

    const {username , password , passwordIsDisabled , buttonIsDisabled} = state;
    
    return (
        
        <PageWrapper>
           
            <Form>

                <InputContainer>
                    <FormLabel>Username</FormLabel>
                    <InputField 
                        value={username} 
                        onChange={e => handleChange(e , state , setState , 'username')}
                        onBlur={e => handleLoginUsernameBlur(e , state , setState)}
                    />
                </InputContainer>

                <InputContainer>
                    <FormLabel>Password</FormLabel>
                    <InputField 
                        type="password" value={password}
                        disabled={passwordIsDisabled}
                        onChange={e => handleChange(e , state , setState , 'password')}
                        onBlur={e => handleLoginPasswordBlur(e , state , setState)}
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