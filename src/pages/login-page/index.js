import React, { useState , useContext } from 'react';
import {useHistory} from 'react-router-dom';
import UserContext from '../../Context';
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
const {handleChange, login , handleLoginUsernameBlur , handleLoginPasswordBlur} = loginPageHandlers;

const initialState = {
    username: '',
    password: '',
    passwordIsDisabled: true,
    buttonIsDisabled: true
}

const LoginPage = () => {

    const context = useContext(UserContext);
    const history = useHistory();
    const [state , setState] = useState(initialState);

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
                    onClick={e => login(e , context , history , state)}
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