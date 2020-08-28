import React from 'react';
import ForeCstImage from '../forecast-image';
import containersObj from '../../components/container';
import paragraphsObj from '../../components/paragraph';
import labelsObj from '../../components/label';


const {ForeCastUnitWrapper , ForeCstImageWrapper} = containersObj;
const {WeatherFrcUnitParagraph} = paragraphsObj;
const {MinTempLabel , MaxTempLabel} = labelsObj;

const ForeCastUnit = ({isHourFrc , time , day, temp , date , minTemp , maxTemp , windS , pressure , windD , image , description}) => {


    return (
        <ForeCastUnitWrapper>
            {
                isHourFrc &&

                <WeatherFrcUnitParagraph>
                    {time}
                </WeatherFrcUnitParagraph>

            }

            {
                !isHourFrc &&

                <WeatherFrcUnitParagraph>
                    {day}
                </WeatherFrcUnitParagraph>

            }

            <WeatherFrcUnitParagraph>
                {date}
            </WeatherFrcUnitParagraph>

            <ForeCstImageWrapper>
                <ForeCstImage src={image} alt="weather"/>
            </ForeCstImageWrapper>

            {
                isHourFrc &&

                <WeatherFrcUnitParagraph>
                    {temp}&#176;
                </WeatherFrcUnitParagraph>
            }

            {
                !isHourFrc &&

                <WeatherFrcUnitParagraph>
                    <MinTempLabel>{minTemp}&#176; </MinTempLabel>
                        /
                    <MaxTempLabel> {maxTemp}&#176;</MaxTempLabel>

                </WeatherFrcUnitParagraph>

            }

            <WeatherFrcUnitParagraph>
                {description}
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