import React , {useEffect} from 'react';
import PageWrapper from '../../components/page-wrapper';


const ForecastPage = () => {

    useEffect(() => {
        document.title = 'DaliVali'
    }, []);

    return(
        <PageWrapper>

        </PageWrapper>
    );

};

export default ForecastPage;