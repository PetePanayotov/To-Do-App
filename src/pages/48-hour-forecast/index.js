import React , {useState , useEffect} from 'react';
import PageWrapper from '../../components/page-wrapper';
import ForeCastUnit from '../../components/forecast-unit';
import containersObj from '../../components/container';
import buttonsObj from '../../components/button';
import handlers from '../../utils/forecast-page-handlers';

const {WeatherForecastConteiner} = containersObj;
const {ArrowButton} = buttonsObj;
const {getTimeAndDate , getImage , getWindDirection} = handlers;


const ForecastPage = () => {

    const [state , setState] = useState({list:[]})
    const [index , setIndex] = useState(0);
    
    const getWeather = async () => {

        const url = 'https://api.openweathermap.org/data/2.5/forecast?q=Sofia&cnt=24&units=metric&appid=9f02b6cf369ed5a363a78ce2be815314';
        
        const promise = await fetch(url)
        
        const response = await promise.json();
    
        setState(response)

    };


    useEffect(() => {
        document.title = 'DaliVali';

        getWeather();

    }, []);

    const endIndex = index + 8;
    const itemsToRender = state.list.slice(index , endIndex);

    
    return(
        <PageWrapper withVideo={false}>
            <WeatherForecastConteiner>



                <ArrowButton disabled={index === 0} onClick={() => setIndex(index - 1)}>
                    <i className="fas fa-chevron-left"></i>
                </ArrowButton>

                

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
                        
                        return <ForeCastUnit 
                                    key={i}
                                    isHourFrc={true} 
                                    time={time} 
                                    date={date} 
                                    image={image} 
                                    temp={temp} 
                                    description={description} 
                                    windS={windS} 
                                    windD={windD} 
                                    pressure={pressure} 
                                />

                    })
                }

                <ArrowButton disabled={index === 16} onClick={() => setIndex(index + 1)}>
                    <i className="fas fa-chevron-right"></i>
                </ArrowButton>

            </WeatherForecastConteiner>
        </PageWrapper>
    );

};


export default ForecastPage;