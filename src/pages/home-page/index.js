import React , {useEffect} from 'react';
import PageWrapper from '../../components/page-wrapper';
import paragraphsObj from '../../components/paragraph';

const {TitleParagraph} = paragraphsObj;


const HomePage = () => {

    useEffect(() => {
        document.title = 'Home';
    }, []);


    return(

        <PageWrapper withVideo={true}>
            <TitleParagraph>#OwnToday!</TitleParagraph>
        </PageWrapper>

    )

};

export default HomePage;