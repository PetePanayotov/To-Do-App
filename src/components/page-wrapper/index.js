import React from 'react';
import Header from '../header';
import Main from '../main';
import Footer from '../footer';
import LinkContainer from '../link-container';
import LinkComponent from '../link';
import paragraphsObj from '../paragraph';
import getNavigation from '../../utils/getNavigation';

const {FooterParagraph} = paragraphsObj;

const PageWrapper = (props) => {

    const linksArray = getNavigation();
    
    const mainPage = props.page ? 'guestPage' : undefined;
    
    return (
        <div>
            <Header>
                <LinkContainer>
                    {
                        linksArray.map( ({title , href} , i) => {

                            return <LinkComponent key={i} type="headerLink" href={href} text={title}/>

                        })
                    }
                </LinkContainer>
            </Header>
            <Main page={mainPage}>
                {props.children}
            </Main>
            <Footer>
                <FooterParagraph>#JustDoIt</FooterParagraph>
            </Footer>
        </div>
    )

};

export default PageWrapper;