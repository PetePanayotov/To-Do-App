import React, { useState , useContext , useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import UserContext from '../../Context';
import PageWrapper from '../../components/page-wrapper';
import containersObj from '../../components/container';
import inputsObj from '../../components/input';
import linksObj from '../../components/link';
import labelsObj from '../../components/label';
import buttonsObj from '../../components/button';
import paragraphsObj from '../../components/paragraph';
import settingsPageHandlers from '../../utils/settings-page-handlers'


const {UpdateContainer , UpdateWrapper} = containersObj;
const {UpdateInput} = inputsObj;
const {FormLink} = linksObj;
const {Label} = labelsObj;
const {SubmitButton , UpdateButton} = buttonsObj
const {FormParagraph} = paragraphsObj;
const {handleChange , handleInputBlur , handleUsernameUpdate} = settingsPageHandlers;

const initialState = {
    username: '',
    updateUnBtnDisabled: true
};

const SettingsPage = () => {

    useEffect(() => {
        document.title = 'Settings';
    } , []);

    const context = useContext(UserContext);
    const {user: {userId}} = context;
    const history = useHistory();
    const [state , setState] = useState(initialState);

    const {username , password , updateUnBtnDisabled} = state;
    
    return (
        
        <PageWrapper withVideo={false} pageDirection="column">

            <UpdateContainer>

                <UpdateWrapper>
                    <Label>New Username</Label>
                    <UpdateInput 
                        value={username}
                        onChange={e => handleChange (e , state , setState , 'username')}
                        onBlur={e => handleInputBlur(e , state ,setState)}
                    />
                </UpdateWrapper>

                <UpdateButton 
                    type="submit"
                    disabled={updateUnBtnDisabled}
                    onClick={e => handleUsernameUpdate(e , state ,userId)}
                >
                        Chanage
                </UpdateButton>

            </UpdateContainer>

            {/* <UpdateContainer>

                <UpdateWrapper>
                    <Label>New Password</Label>
                    <UpdateInput 
                        value={username} 
                        onChange={e => handleChange(e , state , setState , 'username')}
                        onBlur = {e => handleUserNameBlur(e , state , setState)}
                    />

                    <Label>Confirm New Password</Label>
                    <UpdateInput 
                        value={username} 
                        onChange={e => handleChange(e , state , setState , 'username')}
                        onBlur = {e => handleUserNameBlur(e , state , setState)}
                    />
                </UpdateWrapper>

                <UpdateButton 
                    type="submit"
                    onClick={e => {
                        e.preventDefault()
                        console.log(state)
                    }}
                >
                        Chanage
                </UpdateButton>

            </UpdateContainer> */}


        </PageWrapper>
    )

};


export default SettingsPage;