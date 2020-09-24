import React, { useState , useContext , useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import UserContext from '../../Context';
import PageWrapper from '../../components/page-wrapper';
import Form from '../../components/form';
import containersObj from '../../components/container';
import inputsObj from '../../components/input';
import linksObj from '../../components/link';
import labelsObj from '../../components/label';
import buttonsObj from '../../components/button';
import paragraphsObj from '../../components/paragraph';
import registerPageHandlers from '../../utils/form-handlers'
import dictionary from '../../dictionary';


const {InputContainer} = containersObj;
const {FormInput} = inputsObj;
const {FormLink} = linksObj;
const {FormLabel} = labelsObj;
const {SubmitButton} = buttonsObj
const {FormParagraph} = paragraphsObj;
const {handleChange , register , handleUserNameBlur , handlePasswordBlur , handleRePasswordBlur} = registerPageHandlers;

const initialState = {
    username: '',
    password: '',
    rePassword: '',
    usernameIsCorrect: null,
    passwordIsCorrect: null,
    rePasswordIsCorrect: null
};


const RegisterPage = () => {

    useEffect(() => {

        document.title = 'Register Page'

    } , [])

    const context = useContext(UserContext);
    const history = useHistory();
    const [state , setState] = useState(initialState);

    const {username , password , rePassword} = state;
    const {language} = context;
    const stringsObj = dictionary[language];
    
    return (
        
        <PageWrapper withVideo={true}>
           
            <Form>

                <InputContainer>
                    <FormLabel>{stringsObj.username}</FormLabel>
                    <FormInput value={username} 
                        onChange={e => handleChange(e , state , setState , 'username')}
                        onBlur={e => handleUserNameBlur(e , state , setState)}
                    />
                </InputContainer>

                <InputContainer>
                    <FormLabel>{stringsObj.password}</FormLabel>
                    <FormInput 
                        type="password" 
                        value={password}
                        onChange={e => handleChange(e , state , setState , 'password')}
                        onBlur={e => handlePasswordBlur(e , state , setState)}
                    />
                </InputContainer>

                <InputContainer>
                    <FormLabel>{stringsObj.rePassword}</FormLabel>
                    <FormInput 
                        type="password" 
                        value={rePassword} 
                        onChange={e => handleChange(e , state , setState , 'rePassword')} 
                        onBlur={e => handleRePasswordBlur(e , state , setState)}
                    />
                </InputContainer>

                <SubmitButton 
                    type="submit"
                    onClick={e => register(e , context , history ,state)}
                >
                        {stringsObj.register}
                </SubmitButton>

                <FormParagraph>
                    {stringsObj.logQ}

                    <FormLink to="/login"> {stringsObj.login}</FormLink>

                </FormParagraph>

            </Form>

        </PageWrapper>
    )

};

export default RegisterPage;