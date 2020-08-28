import React , {useContext} from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../Context';
import Header from '../header';
import Main from '../main';
import Footer from '../footer';
import LinkContainer from '../link-container';
import linksObj from '../link';
import containerObj from '../container';
import buttonsObj from '../button';
import paragraphsObj from '../paragraph';
import getNavigation from '../../utils/getNavigation';
import handlers from '../../utils/page-wrapper-handler';

const {HeaderLink , DropDownLink} = linksObj;
const {DropDownWrapper , DropDownContent} = containerObj;
const {DropDownButton , LogoutButton} = buttonsObj;
const {FooterParagraph} = paragraphsObj;
const {handleMouseOver , handleMouseOut} = handlers;


const PageWrapper = (props) => {

    const context = useContext(UserContext);
    const {isLoggedIn , user} = context;
    const history = useHistory()
    const linksArray = getNavigation(isLoggedIn , user.username ,user.userId);

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

                            <DropDownContent onMouseOver={e => handleMouseOut(e)}>
                                <DropDownLink to="/current-forecast">Today</DropDownLink>
                                <DropDownLink to="/48-hour-forecast">48-Hour</DropDownLink>
                                <DropDownLink to="/seven-day-forecast">7-Day</DropDownLink>
                            </DropDownContent>

                        </DropDownWrapper>
                    }
                
                    {
                        linksArray.map( ({title , href} , i) => {

                            return <HeaderLink key={i} to={href}>{title}</HeaderLink>

                        })
                    }

                    {
                        context.isLoggedIn &&

                        <LogoutButton onClick={() => logout()}>Logout</LogoutButton>
                    }
                </LinkContainer>
            </Header>
            <Main hasVideo={props.withVideo}>
                {props.children}
            </Main>
            <Footer>
                <FooterParagraph>#JustDoIt</FooterParagraph>
            </Footer>
        </div>
    )

};

export default PageWrapper;