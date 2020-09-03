import React, { useState , useContext , useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import UserContext from '../../Context';
import PageWrapper from '../../components/page-wrapper';
import InputContainer from '../../components/form-input-div';
import InputField from '../../components/form-input-field';
import Form from '../../components/form';
import labelsObj from '../../components/label';
import linksObj from '../../components/link';
import buttonsObj from '../../components/button';
import paragraphsObj from '../../components/paragraph';
import loginPageHandlers from '../../utils/form-handlers';

const {FormLink} = linksObj;
const {FormLabel} = labelsObj;
const {SubmitButton} = buttonsObj;
const {FormParagraph} = paragraphsObj;
const {handleChange, login , handleLoginUsernameBlur , handleLoginPasswordBlur} = loginPageHandlers;

const SettingsPage = () => {

    useEffect(() => {
        document.title = 'Settings';
    } , []);
    
    return (
        
        <PageWrapper withVideo={false}>

        </PageWrapper>
    )

};

export default SettingsPage;