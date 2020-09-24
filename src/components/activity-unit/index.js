import React from 'react';
import containersObj from '../../components/container';
import paragraphsObj from '../../components/paragraph';
import buttonsObj from '../../components/button';

const {ActivityContainer} = containersObj;
const {ActivityTitleParagraph , ActivityParagraph} = paragraphsObj;
const {FinishButton} = buttonsObj;


const ActivityUnit = ({handler , stringsObj ,activity , location , date , time}) => {

    return (

        <ActivityContainer>

            <ActivityTitleParagraph>
                {activity}
            </ActivityTitleParagraph>

            <ActivityParagraph>
                {stringsObj.location}: {location}
            </ActivityParagraph>

            <ActivityParagraph>
                {stringsObj.date}: {date}
            </ActivityParagraph>

            <ActivityParagraph>
                {stringsObj.time}: {time}
            </ActivityParagraph>

            <FinishButton onClick={handler}>
                <i className="fas fa-check-square"></i>&nbsp;&nbsp;&nbsp;{stringsObj.finish}
            </FinishButton>

        </ActivityContainer>
        
    );

};


export default ActivityUnit;