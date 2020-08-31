import React , {useState , useEffect , useContext} from 'react';
import {useHistory} from 'react-router-dom';
import UserContext from '../../Context';
import PageWrapper from '../../components/page-wrapper';
import containersObj from '../../components/container';
import paragraphsObj from '../../components/paragraph';
import labelsObj from '../../components/label';
import buttonsObj from '../../components/button';
import handlers from '../../utils/form-handlers';

const {ActivitContainer} = containersObj;
const {ActivityTitleParagraph , ActivityParagraph} = paragraphsObj;
const {FormLabel} = labelsObj;
const {FinishButton} = buttonsObj;
const {handleChange , addActivity} = handlers;

const ProfilePage = () => {

    const context = useContext(UserContext);
    const {user:{username}} = context;

    useEffect(() => {
        document.title = username
    } , []);

    return (
        <PageWrapper withVideo={false} pageDirection="column">

            <ActivitContainer>

                <ActivityTitleParagraph>
                    Dentist Appointmnet
                </ActivityTitleParagraph>
                <ActivityParagraph>
                    Location: Dupnitsa
                </ActivityParagraph>
                <ActivityParagraph>
                    Date: 09/01/2020
                </ActivityParagraph>
                <ActivityParagraph>
                    Time: 10:00
                </ActivityParagraph>

                <FinishButton>
                    Finish
                </FinishButton>

            </ActivitContainer>

            <ActivitContainer>

                <ActivityTitleParagraph>
                    Dentist Appointmnet
                </ActivityTitleParagraph>
                <ActivityParagraph>
                    Location: Dupnitsa
                </ActivityParagraph>
                <ActivityParagraph>
                    Date: 09/01/2020
                </ActivityParagraph>
                <ActivityParagraph>
                    Time: 10:00
                </ActivityParagraph>

            </ActivitContainer>

            <ActivitContainer>

                <ActivityTitleParagraph>
                    Dentist Appointmnet
                </ActivityTitleParagraph>
                <ActivityParagraph>
                    Location: Dupnitsa
                </ActivityParagraph>
                <ActivityParagraph>
                    Date: 09/01/2020
                </ActivityParagraph>
                <ActivityParagraph>
                    Time: 10:00
                </ActivityParagraph>

            </ActivitContainer>


        </PageWrapper>
    );

};


export default ProfilePage;