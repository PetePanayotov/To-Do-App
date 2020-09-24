import React , {useContext} from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../Context';
import Header from '../header';
import Footer from '../footer';
import Navigation from '../navigation';
import LinkWrapper from '../link-wrapper';
import Video from '../video/JustDoIt.mp4';
import linksObj from '../link';
import containerObj from '../container';
import buttonsObj from '../button';
import paragraphsObj from '../paragraph';
import getNavigation from '../../utils/getNavigation';
import handlers from '../../utils/page-wrapper-handler';
import dictionary from '../../dictionary';

const {HeaderLink , DropDownLink} = linksObj;
const {Main , DropDownContent , LangBtnsContainer} = containerObj;
const {LogoutButton , LanguageButton} = buttonsObj;
const {FooterParagraph} = paragraphsObj;
const {handleMouseOver , handleMouseOut , logout} = handlers;


const PageWrapper = (props) => {

    const context = useContext(UserContext);
    const {isLoggedIn , user:{username , userId} , language , changeLang} = context;
    const history = useHistory()
    const linksArray = getNavigation(isLoggedIn);
    const stringsObj = dictionary[language];

    return (
        <div>
            <Header>

                <Navigation>

                    {
                        context.isLoggedIn &&

                        <LinkWrapper onMouseOver={e => handleMouseOver(e)} onMouseOut={e => handleMouseOut(e)}>

                                [{username}] <i className="fas fa-chevron-down"></i>

                            <DropDownContent>
                                
                                <DropDownLink to={`/activities?id=${userId}`}>
                                    <i className="fas fa-snowboarding"></i>&nbsp;&nbsp;&nbsp;{stringsObj.myActivities}
                                </DropDownLink>

                                <DropDownLink to={`/settings?id=${userId}`}>
                                    <i className="fas fa-user-cog"></i>&nbsp;&nbsp;&nbsp;{stringsObj.settings}
                                </DropDownLink>

                                <LogoutButton onClick={() => logout(context , history)}>
                                    <i className="fas fa-sign-out-alt"></i>&nbsp;&nbsp;&nbsp;{stringsObj.logout}
                                </LogoutButton>

                            </DropDownContent>

                        </LinkWrapper>
                    }

                    {
                        context.isLoggedIn &&

                        <LinkWrapper onMouseOver={e => handleMouseOver(e)} onMouseOut={e => handleMouseOut(e)}>

                            {stringsObj.weather} <i className="fas fa-chevron-down"></i>

                            <DropDownContent>

                                <DropDownLink to="/current-forecast">
                                    {stringsObj.today}
                                </DropDownLink>

                                <DropDownLink to="/72-hour-forecast">
                                    <i className="fas fa-clock"></i>&nbsp;&nbsp;&nbsp;{stringsObj['72-hour']}
                                </DropDownLink>

                                <DropDownLink to="/seven-day-forecast">
                                    <i className="fas fa-calendar-day"></i>&nbsp;&nbsp;&nbsp;{stringsObj['7-day']}
                                </DropDownLink>

                            </DropDownContent>

                        </LinkWrapper>
                    }   
                
                    {
                        linksArray.map( ({title , href} , i) => {

                            return (    
                                        <LinkWrapper key={i}>
                                            <HeaderLink to={href}>{stringsObj[title]}</HeaderLink>
                                        </LinkWrapper>
                                    )
                            

                        })
                    }

                </Navigation>
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