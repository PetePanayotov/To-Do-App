import React , {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import PageWrapper from '../../components/page-wrapper';
import ForeCastUnit from '../../components/forecast-unit';
import containersObj from '../../components/container';

const {WeatherForecastConteiner} = containersObj;

const ForecastPage = () => {

    useEffect(() => {
        document.title = 'DaliVali'
    }, []);

    const location = useLocation();

    console.log(location.search)

    return(
        <PageWrapper>
            <WeatherForecastConteiner>
                <ForeCastUnit/>
                <ForeCastUnit/>
                <ForeCastUnit/>
                <ForeCastUnit/>
                <ForeCastUnit/>
                <ForeCastUnit/>
                <ForeCastUnit/>
                <ForeCastUnit/>
            </WeatherForecastConteiner>
        </PageWrapper>
    );

};

export default ForecastPage;