import React from 'react';
import Header from '../header';
import Main from '../main';
import Footer from '../footer';
import LinkContainer from '../link-container';
import LinkComponent from '../link';
import Paragraph from '../paragraph';

const PageWrapper = (props) => {

    return (
        <div>
            <Header>
                <LinkContainer>
                    <LinkComponent text="Home"/>
                    <LinkComponent text="About"/>
                    <LinkComponent text="Login"/>
                    <LinkComponent text="Register"/>
                </LinkContainer>
            </Header>
            <Main>
                {props.children}
            </Main>
            <Footer>
                <Paragraph>Just Do It</Paragraph>
            </Footer>
        </div>
    )

};

export default PageWrapper;