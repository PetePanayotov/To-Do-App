import React from 'react';
import containersObj from '../../components/container';
import paragraphsObj from '../../components/paragraph';
import buttonsObj from '../../components/button';

const {ActivityContainer} = containersObj;
const {ActivityTitleParagraph , ActivityParagraph} = paragraphsObj;
const {FinishButton} = buttonsObj;


const ActivityUnit = ({handler , activity , location , date , time}) => {

    return (

        <ActivityContainer>

            <ActivityTitleParagraph>
                {activity}
            </ActivityTitleParagraph>

            <ActivityParagraph>
                Location: {location}
            </ActivityParagraph>

            <ActivityParagraph>
                Date: {date}
            </ActivityParagraph>

            <ActivityParagraph>
                Time: {time}
            </ActivityParagraph>

            <FinishButton onClick={handler}>
                <i className="fas fa-check-square"></i>&nbsp;&nbsp;&nbsp;Finish
            </FinishButton>

        </ActivityContainer>
        
    );

};


export default ActivityUnit;