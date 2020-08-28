import React , {useState , useEffect} from 'react';
import PageWrapper from '../../components/page-wrapper';
import ForeCastUnit from '../../components/forecast-unit';
import containersObj from '../../components/container';
import handlers from '../../utils/forecast-page-handlers';

const {WeatherForecastConteiner} = containersObj;
const {getTimeAndDate , getImage , getWindDirection} = handlers;


const ForecastPage = () => {

    const [state , setState] = useState({list:[]})

    const getWeather = async () => {

        const promise = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=Sofia&cnt=8&units=metric&appid=9f02b6cf369ed5a363a78ce2be815314')
        
        const response = await promise.json();

        setState(response)

    };


    useEffect(() => {
        document.title = 'DaliVali';

        getWeather();

    }, []);

    const itemsToRender = state.list.slice(0 , 7);
    
    return(
        <PageWrapper>
            <WeatherForecastConteiner>
                {
                    itemsToRender.map((obj , i) => {
                        
                        const dateString = obj['dt_txt'];
                        const [time , date] = getTimeAndDate(dateString);
                        const temp = Math.round(obj.main.temp);
                        const windS = Math.round(obj.wind.speed);
                        const pressure = obj.main.pressure;
                        const condition = obj.weather[0].main;
                        const description = obj.weather[0].description;
                        const image = getImage(condition , description);
                        const windD = getWindDirection();
                        
                        return <ForeCastUnit windD={windD} description={description} image={image} pressure={pressure} windS={windS} temp={temp} isHourFrc={true} time={time} date={date} key={i}/>

                    })
                }
            </WeatherForecastConteiner>
        </PageWrapper>
    );

};


export default ForecastPage;