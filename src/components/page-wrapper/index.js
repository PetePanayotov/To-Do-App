import React , {useContext} from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../Context';
import Header from '../header';
import Footer from '../footer';
import LinkContainer from '../link-container';
import Video from '../video/JustDoIt.mp4';
import linksObj from '../link';
import containerObj from '../container';
import buttonsObj from '../button';
import paragraphsObj from '../paragraph';
import getNavigation from '../../utils/getNavigation';
import handlers from '../../utils/page-wrapper-handler';

const {HeaderLink , DropDownLink} = linksObj;
const {Main , DropDownWrapper , DropDownContent} = containerObj;
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
                                <DropDownLink to="/72-hour-forecast">72-Hour</DropDownLink>
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
            <Main direction={props.pageDirection}>

                { props.withVideo &&

                <div>
                    <video autoPlay loop muted 
                        style={{
                            position: "absolute",
                            width: "100%",
                            left: "50%",
                            top: "50%",
                            height: "100%",
                            objectFit: "cover",
                            transform: "translate(-50% , -50%)",
                            zIndex: "-1"
                        }}
                    >
                    <source src={Video} type="video/mp4"/>
                    </video>
                    
                </div>

                }

                {props.children}
            </Main>
            <Footer>
                <FooterParagraph>#JustDoIt</FooterParagraph>
            </Footer>
        </div>
    )

};

export default PageWrapper;