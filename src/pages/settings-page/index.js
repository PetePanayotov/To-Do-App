import React, { useState , useContext , useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import UserContext from '../../Context';
import PageWrapper from '../../components/page-wrapper';
import containersObj from '../../components/container';
import inputsObj from '../../components/input';
import labelsObj from '../../components/label';
import buttonsObj from '../../components/button';
import settingsPageHandlers from '../../utils/settings-page-handlers';
import dictionary from '../../dictionary';


const {UpdateContainer , UpdateWrapper , DeleteBtnsWrapper , LangBtnsContainer} = containersObj;
const {UpdateInput} = inputsObj;
const {Label} = labelsObj;
const { UpdateButton , LanguageButton} = buttonsObj
const {handleChange , handleInputBlur , updateUsername , handlePasswordBlur , handleRePasswordBlur , updatePassword , handleDeleteBtnClick , handleCancelBtnClick , deleteAccount} = settingsPageHandlers;

const initialState = {
    username: '',
    usernameIsCorrect: null,
    password: '',
    passwordIsCorrect: null,
    rePassword: '',
    rePasswordIsCorrect: null,
};

const SettingsPage = () => {

    useEffect(() => {
        document.title = 'Settings';
    } , []);

    const context = useContext(UserContext);
    const {user: {userId} , language ,changeLang} = context;
    const stringsObj = dictionary[language];
    const history = useHistory();
    const [state , setState] = useState(initialState);

    const {username , password , rePassword} = state;
    
    return (
        
        <PageWrapper withVideo={false} pageDirection="column">

            <UpdateContainer>

                <UpdateWrapper>
                    <Label>{stringsObj.newName}</Label>
                    <UpdateInput 
                        value={username}
                        onChange={e => handleChange (e , state , setState , 'username')}
                        onBlur={e => handleInputBlur(e , state ,setState)}
                    />
                </UpdateWrapper>

                <UpdateButton 
                    type="submit"
                    onClick={e => updateUsername(e , history ,state ,userId)}
                >
                    <i className="far fa-edit"></i>&nbsp;{stringsObj.change}
                </UpdateButton>

            </UpdateContainer>

            <UpdateContainer>

                <UpdateWrapper>
                    <Label>{stringsObj.newPassword}</Label>
                    <UpdateInput
                        type="password"
                        value={password} 
                        onChange={e => handleChange(e , state , setState , 'password')}
                        onBlur = {e => handlePasswordBlur(e , state , setState)}
                    />

                    <Label>{stringsObj.confirm}</Label>
                    <UpdateInput
                        type="password" 
                        value={rePassword} 
                        onChange={e => handleChange(e , state , setState , 'rePassword')}
                        onBlur = {e => handleRePasswordBlur(e , state , setState)}
                    />
                </UpdateWrapper>

                <UpdateButton 
                    type="submit"
                    onClick={e => updatePassword(e , history ,state , userId)}
                >
                    <i className="far fa-edit"></i>&nbsp;{stringsObj.change}
                </UpdateButton>

            </UpdateContainer>

            <UpdateContainer>

                <UpdateWrapper>
                    <Label>{stringsObj.lang}</Label>

                    <LangBtnsContainer>
                        <LanguageButton onClick={() => changeLang('EN')}>
                                EN
                        </LanguageButton>
                                
                        <LanguageButton onClick={() => changeLang('BG')}>
                                BG
                        </LanguageButton>
                                
                        <LanguageButton onClick={() => changeLang('IT')}>
                                IT
                        </LanguageButton>
                    </LangBtnsContainer>
                </UpdateWrapper>


            </UpdateContainer>


            <UpdateContainer>

                <UpdateButton 
                    type="submit"
                    onClick={e => handleDeleteBtnClick(e)}
                >
                    <i className="fas fa-trash-alt"></i>&nbsp;{stringsObj.delete}
                </UpdateButton>

                <DeleteBtnsWrapper>
                    
                    <Label>{stringsObj.delQ}</Label>
                    
                    <UpdateButton 
                    type="submit"
                    onClick={e => handleCancelBtnClick(e)}
                    >
                        <i className="fas fa-ban"></i>&nbsp;{stringsObj.cancel}
                    </UpdateButton>

                    <UpdateButton 
                    type="submit"
                    onClick={e => deleteAccount(e , context , history , userId)}
                    >
                        <i className="fas fa-trash-alt"></i>&nbsp;{stringsObj.delete}
                    </UpdateButton>

                </DeleteBtnsWrapper>

            </UpdateContainer>


        </PageWrapper>
    )

};

export default SettingsPage;