import React , {useState , useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import PageWrapper from '../../components/page-wrapper';
import ForeCastUnit from '../../components/forecast-unit';
import containersObj from '../../components/container';

const {WeatherForecastConteiner} = containersObj;

const ForecastPage = () => {

    const [state , setState] = useState({daily:[]})

    const getWeather = async () => {

        const promise = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=42.698334&lon=23.319941&exclude=hourly,minutely,current&appid=9f02b6cf369ed5a363a78ce2be815314&units=metric')
        
        const response = await promise.json();

        setState(response)

    };


    useEffect(() => {
        document.title = 'DaliVali';

        getWeather();

    }, []);

    const itemsToRender = state.daily.slice(0 , state.daily.length - 1)

    return(
        <PageWrapper>
            <WeatherForecastConteiner>
                {
                    itemsToRender.map((obj , i) => {
                        
                        const dateString = getDateString(obj.dt);
                        const date = getDate(dateString)
                        const day = i === 0 ? 'Today' : getDay(dateString);
                        const minTemp = Math.round(obj.temp.min);
                        const maxTemp = Math.round(obj.temp.max)
                        const windS = Math.round(obj['wind_speed']);
                        const windD = getWindDirection();
                        const pressure = obj.pressure;
                        
                        return <ForeCastUnit windD={windD} pressure={pressure} windS={windS} maxTemp={maxTemp} minTemp={minTemp} day={day} date={date} key={i}/>

                    })
                }
            </WeatherForecastConteiner>
        </PageWrapper>
    );

};

function getDateString (number) {

    const date = new Date(number * 1000);
    
    return date.toUTCString();

};

function getDate(string) {

    const monthsObj = {

        Aug: '08',
        Sep: '09',
        Oct: '10',
        Nov: '11',
        Dec: '12'
    };

    const [ , date , month , year, ] = string.split(' ');

    return `${date}.${monthsObj[month]}.${year}`;
};

function getDay (string) {
    
    const [dayAbb , ] = string.split(',')
   
    const daysObj = {
        Mon: 'Monday',
        Tue: 'Tuesday',
        Wed: 'Wednesday',
        Thu: 'Thursday',
        Fri: 'Friday',
        Sat: 'Saturday',
        Sun: 'Sunday'

    };

    return daysObj[dayAbb];

};

function getWindDirection () {

    const directionsObj = {

        0: 'North',
        1: 'East',
        2: 'South',
        3: 'West',
        4: 'North-East',
        5: 'North-West',
        6: 'South-East',
        7: 'South-West',

    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    };

    const randomInt = getRandomInt(7);

    return directionsObj[randomInt];
};

export default ForecastPage;