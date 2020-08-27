import React from 'react';
import ForeCstImage from '../forecast-image';
import sunnyImage from '../../images/synny.jpg';
import containersObj from '../../components/container';
import paragraphsObj from '../../components/paragraph';
import labelsObj from '../../components/label';


const {ForeCastUnitWrapper , ForeCstImageWrapper} = containersObj;
const {WeatherFrcUnitParagraph} = paragraphsObj;
const {MinTempLabel , MaxTempLabel} = labelsObj;

const ForeCastUnit = () => {


    return (
        <ForeCastUnitWrapper>
            <WeatherFrcUnitParagraph>
                Thursday
            </WeatherFrcUnitParagraph>

            <WeatherFrcUnitParagraph>
                27.08.2020
            </WeatherFrcUnitParagraph>

            <ForeCstImageWrapper>
                <ForeCstImage src={sunnyImage} alt="weather"/>
            </ForeCstImageWrapper>

            <WeatherFrcUnitParagraph>
                <MinTempLabel>16&#176; </MinTempLabel>
                    /
                <MaxTempLabel> 30&#176;</MaxTempLabel>

            </WeatherFrcUnitParagraph>

            <WeatherFrcUnitParagraph>
                2 m/s
            </WeatherFrcUnitParagraph>

            <WeatherFrcUnitParagraph>
                West
            </WeatherFrcUnitParagraph>

            <WeatherFrcUnitParagraph>
                1014 hPa
            </WeatherFrcUnitParagraph>
        </ForeCastUnitWrapper>
    )

};

export default ForeCastUnit;