import React, {useEffect } from 'react';
import PageWrapper from '../../components/page-wrapper';
import labelsObj from '../../components/label';

const {Label} = labelsObj;

const ErrorPage = () => {

    useEffect(() => {
        document.title = 'Error - 404';
    } , []);
    
    return (
        
        <PageWrapper withVideo={false} pageDirection="column">

            <Label error>
                404 Not Found &nbsp; <i className="far fa-frown"></i>
            </Label>

        </PageWrapper>
    )

};

export default ErrorPage;