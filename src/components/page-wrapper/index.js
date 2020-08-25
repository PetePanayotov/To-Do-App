import React , {useContext} from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../Context';
import Header from '../header';
import Main from '../main';
import Footer from '../footer';
import LinkContainer from '../link-container';
import LinkComponent from '../link';
import containerObj from '../container';
import buttonsObj from '../button';
import paragraphsObj from '../paragraph';
import getNavigation from '../../utils/getNavigation';
import handlers from '../../utils/page-wrapper-handler';

const {DropDownWrapper , DropDownContent} = containerObj;
const {DropDownButton , LogoutButton} = buttonsObj;
const {FooterParagraph} = paragraphsObj;
const {handleMouseOver , handleMouseOut} = handlers;


const PageWrapper = (props) => {

    const context = useContext(UserContext);
    const history = useHistory()
    const linksArray = getNavigation(context.isLoggedIn);
    
    const mainPage = props.page ? 'guestPage' : undefined;

    const logout = () => {

        context.logout();
        history.push('/')

    }
    
    return (
        <div>
            <Header>
                <LinkContainer>
                    {
                        context.isLoggedIn &&

                        <DropDownWrapper >
                            
                            <DropDownButton onMouseOver={e => handleMouseOver(e)}>
                                Weather
                            </DropDownButton>

                            <DropDownContent onMouseOut={e => handleMouseOut(e)}>
                                <LinkComponent type="dropDown" href="" text="Today"/>
                                <LinkComponent type="dropDown" href="" text="5-day"/>
                                <LinkComponent type="dropDown" href="" text="16-day"/>
                            </DropDownContent>

                        </DropDownWrapper>
                    }
                
                    {
                        linksArray.map( ({title , href} , i) => {

                            return <LinkComponent key={i} type="headerLink" href={href} text={title}/>

                        })
                    }

                    {
                        context.isLoggedIn &&

                        <LogoutButton onClick={() => logout()}>Logout</LogoutButton>
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