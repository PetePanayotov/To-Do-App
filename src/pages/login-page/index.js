import React, { useState , useContext , useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import UserContext from '../../Context';
import PageWrapper from '../../components/page-wrapper';
import Form from '../../components/form';
import containersObj from '../../components/container';
import inputsObj from '../../components/input';
import labelsObj from '../../components/label';
import linksObj from '../../components/link';
import buttonsObj from '../../components/button';
import paragraphsObj from '../../components/paragraph';
import loginPageHandlers from '../../utils/form-handlers';

const {InputContainer} = containersObj;
const {FormInput} = inputsObj;
const {FormLink} = linksObj;
const {FormLabel} = labelsObj;
const {SubmitButton} = buttonsObj;
const {FormParagraph} = paragraphsObj;
const {handleChange, login , handleLoginUsernameBlur , handleLoginPasswordBlur} = loginPageHandlers;

const initialState = {
    username: '',
    password: '',
    passwordIsDisabled: true,
    buttonIsDisabled: true
}

const LoginPage = () => {

    useEffect(() => {
        document.title = 'Login Page';
    } , [])

    const context = useContext(UserContext);
    const history = useHistory();
    const [state , setState] = useState(initialState);

    const {username , password , passwordIsDisabled , buttonIsDisabled} = state;
    
    return (
        
        <PageWrapper withVideo={true}>
           
            <Form>

                <InputContainer>
                    <FormLabel>Username</FormLabel>
                    <FormInput 
                        value={username} 
                        onChange={e => handleChange(e , state , setState , 'username')}
                        onBlur={e => handleLoginUsernameBlur(e , state , setState)}
                    />
                </InputContainer>

                <InputContainer>
                    <FormLabel>Password</FormLabel>
                    <FormInput 
                        type="password" value={password}
                        disabled={passwordIsDisabled}
                        onChange={e => handleChange(e , state , setState , 'password')}
                        onBlur={e => handleLoginPasswordBlur(e , state , setState)}
                    />
                </InputContainer>

                <SubmitButton type="submit" 
                    onClick={e => login(e , context , history , state)}
                    disabled={buttonIsDisabled}
                >
                    Login
                </SubmitButton>

                <FormParagraph>
                    Not registered yet? 

                    <FormLink to="/register"> Register</FormLink>
                </FormParagraph>

            </Form>

        </PageWrapper>
    )

};

export default LoginPage;