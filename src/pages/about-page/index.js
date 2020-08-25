import React , {useEffect} from 'react';
import PageWrapper from '../../components/page-wrapper';
import containers from '../../components/container';
import paragraphs from '../../components/paragraph';

const {AboutPageContainer} = containers;
const {AboutPageTitleParagraph , AboutPageParagraph} = paragraphs;

const AboutPage = () => {

    useEffect(() => {
        document.title = 'About'
    } , []);

    return (
        <PageWrapper>
            <AboutPageContainer>
                <AboutPageTitleParagraph>To-Do App</AboutPageTitleParagraph>
                <AboutPageParagraph>
                    Hi! This is my To-Do-App. You want to plan your day or plan an activity in the near 
                    or not that near future? You have come to the right place! Check the weather forecast for the day  or the days after
                    and plan your activities. Whether it's your hobby , dentist appointment or even an important business meeting, we can offer
                    everything to satisfy your needs! Download the App , sign up and you will get 3-month free trial !
                </AboutPageParagraph>
            </AboutPageContainer>
        </PageWrapper>
    )

};

export default AboutPage;