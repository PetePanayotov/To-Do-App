import React from 'react';
import ForeCstImage from '../forecast-image';
import sunnyImage from '../../images/synny.jpg';
import containersObj from '../../components/container';
import paragraphsObj from '../../components/paragraph';
import labelsObj from '../../components/label';


const {ForeCastUnitWrapper , ForeCstImageWrapper} = containersObj;
const {WeatherFrcUnitParagraph} = paragraphsObj;
const {MinTempLabel , MaxTempLabel} = labelsObj;

const ForeCastUnit = ({day , date , minTemp , maxTemp , windS , pressure , windD}) => {


    return (
        <ForeCastUnitWrapper>
            <WeatherFrcUnitParagraph>
                {day}
            </WeatherFrcUnitParagraph>

            <WeatherFrcUnitParagraph>
                {date}
            </WeatherFrcUnitParagraph>

            <ForeCstImageWrapper>
                <ForeCstImage src={sunnyImage} alt="weather"/>
            </ForeCstImageWrapper>

            <WeatherFrcUnitParagraph>
                <MinTempLabel>{minTemp}&#176; </MinTempLabel>
                    /
                <MaxTempLabel> {maxTemp}&#176;</MaxTempLabel>

            </WeatherFrcUnitParagraph>

            <WeatherFrcUnitParagraph>
                {windS} m/s
            </WeatherFrcUnitParagraph>

            <WeatherFrcUnitParagraph>
                {windD}
            </WeatherFrcUnitParagraph>

            <WeatherFrcUnitParagraph>
                {pressure} hPa
            </WeatherFrcUnitParagraph>
        </ForeCastUnitWrapper>
    )

};

export default ForeCastUnit;