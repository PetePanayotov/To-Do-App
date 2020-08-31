import React , {useState , useEffect} from 'react';
import PageWrapper from '../../components/page-wrapper';
import ForeCastUnit from '../../components/forecast-unit';
import containersObj from '../../components/container';
import handlers from '../../utils/forecast-page-handlers';

const {WeatherForecastConteiner} = containersObj;
const {getDateString , getDate , getDay , getWindDirection , getImage} = handlers;


const ForecastPage = () => {

    const [state , setState] = useState({daily:[]})

    const getWeather = async () => {

        const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=42.698334&lon=23.319941&exclude=hourly,minutely,current&appid=9f02b6cf369ed5a363a78ce2be815314&units=metric';

        const promise = await fetch(url)
        
        const response = await promise.json();

        setState(response)

    };


    useEffect(() => {
        document.title = 'DaliVali';

        getWeather();

    }, []);

    const itemsToRender = state.daily.slice(0 , state.daily.length - 1)

    return(
        <PageWrapper withVideo={false}>
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
                        const condition = obj.weather[0].main;
                        const {description} = obj.weather[0];
                        const image = getImage(condition , description);
                        
                        return <ForeCastUnit 
                                    key={i}
                                    day={day} 
                                    date={date} 
                                    image={image} 
                                    minTemp={minTemp} 
                                    maxTemp={maxTemp} 
                                    description={description} 
                                    windS={windS} 
                                    windD={windD} 
                                    pressure={pressure} 
                                />

                    })
                }
            </WeatherForecastConteiner>
        </PageWrapper>
    );

};


export default ForecastPage;