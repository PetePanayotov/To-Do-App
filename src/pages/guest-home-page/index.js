import React from 'react';
import PageWrapper from '../../components/page-wrapper';
import paragraphsObj from '../../components/paragraph';

const {TitleParagraph} = paragraphsObj;


const GuestHomePage = () => {

    return(

        <PageWrapper page="guestPage">
            <TitleParagraph>#OwnToday!</TitleParagraph>
        </PageWrapper>

    )

};

export default GuestHomePage;