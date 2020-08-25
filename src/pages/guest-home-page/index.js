import React , {useEffect} from 'react';
import PageWrapper from '../../components/page-wrapper';
import paragraphsObj from '../../components/paragraph';

const {TitleParagraph} = paragraphsObj;


const GuestHomePage = () => {

    useEffect(() => {
        document.title = 'Home';
    }, []);


    return(

        <PageWrapper page="guestPage">
            <TitleParagraph>#OwnToday!</TitleParagraph>
        </PageWrapper>

    )

};

export default GuestHomePage;