import React, { useState } from 'react';
import PageWrapper from '../../components/page-wrapper';
import InputContainer from '../../components/form-input-div';
import FormLabel from '../../components/form-label';
import InputField from '../../components/form-input-field';
import Button from '../../components/button';
import Form from '../../components/form';
import LinkComponent from '../../components/link';
import paragraphsObj from '../../components/paragraph';
import registerPageHandlers from '../../utils/login-register-page-handlers'


const {FormParagraph} = paragraphsObj;
const {handleChange , handleSubmit , handleUserNameBlur , handlePasswordBlur , handleRePasswordBlur} = registerPageHandlers;

const initialState = {
    username: '',
    password: '',
    rePassword: '',
    passwordIsDisabled: true,
    rePasswordIsDisabled: true,
    buttonIsDisabled: true
};


const RegisterPage = () => {

    const [state , setState] = useState(initialState);

    const {username , password , rePassword , passwordIsDisabled , rePasswordIsDisabled , buttonIsDisabled} = state;
    
    return (
        
        <PageWrapper>
           
            <Form>

                <InputContainer>
                    <FormLabel>Username</FormLabel>
                    <InputField value={username} 
                        onChange={e => handleChange(e , state , setState , 'username')}
                        onBlur={e => handleUserNameBlur(e , state , setState)}
                    />
                </InputContainer>

                <InputContainer>
                    <FormLabel>Password</FormLabel>
                        <InputField 
                            type="password" 
                            value={password}
                            disabled={passwordIsDisabled}
                            onChange={e => handleChange(e , state , setState , 'password')}
                            onBlur={e => handlePasswordBlur(e , state , setState)}
                        />
                </InputContainer>

                <InputContainer>
                    <FormLabel>Repeat Password</FormLabel>
                    <InputField 
                        type="password" 
                        value={rePassword}
                        disabled={rePasswordIsDisabled} 
                        onChange={e => handleChange(e , state , setState , 'rePassword')} 
                        onBlur={e => handleRePasswordBlur(e , state , setState)}/>
                </InputContainer>

                <Button 
                    type="submit"
                    disabled={buttonIsDisabled}
                    onClick={e => handleSubmit(e , state)}
                >
                        Register
                </Button>

                <FormParagraph>Already have an account? <LinkComponent href="/login" type="formLink" text="Login"/></FormParagraph>

            </Form>

        </PageWrapper>
    )

};

export default RegisterPage;