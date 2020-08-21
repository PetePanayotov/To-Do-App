import React from 'react';
import Header from '../header';
import Main from '../main';
import Footer from '../footer';
import LinkContainer from '../link-container';
import LinkComponent from '../link';
import Paragraph from '../paragraph';
import getNavigation from '../../utils/getNavigation';

const PageWrapper = (props) => {

    const linksArray = getNavigation();
    
    const mainPage = props.page ? 'guestPage' : undefined;
    
    return (
        <div>
            <Header>
                <LinkContainer>
                    {
                        linksArray.map( ({title , href} , i) => {

                            return <LinkComponent key={i} href={href} text={title}/>

                        })
                    }
                </LinkContainer>
            </Header>
            <Main page={mainPage}>
                {props.children}
            </Main>
            <Footer>
                <Paragraph>Just Do It</Paragraph>
            </Footer>
        </div>
    )

};

export default PageWrapper;