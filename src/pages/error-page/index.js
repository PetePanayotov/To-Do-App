import React, {useEffect , useContext } from 'react';
import PageWrapper from '../../components/page-wrapper';
import labelsObj from '../../components/label';
import UserContext from '../../Context';
import dictionary from '../../dictionary';

const {Label} = labelsObj;

const ErrorPage = () => {

    const context = useContext(UserContext);
    const {language} = context;
    const stringsObj = dictionary[language];

    useEffect(() => {
        document.title = 'Error - 404';
    } , []);
    
    return (
        
        <PageWrapper withVideo={false} pageDirection="column">

            <Label error>
                {stringsObj.error} &nbsp; <i className="far fa-frown"></i>
            </Label>

        </PageWrapper>
    )

};

export default ErrorPage;