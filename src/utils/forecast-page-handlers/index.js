import sunnyImage from '../../images/day-clear.jpg';
import drizzle from '../../images/day-drizzle.jpg';
import fewClouds from '../../images/day-few clouds.jpg';
import overcastClouds from '../../images/day-overcast clouds.jpg';
import rain from '../../images/day-rain.jpg';
import scatteredClouds from '../../images/day-scattered clouds.jpg';
import thunderstorm from '../../images/day-thunderstorm.jpg';

export default {

    getDateString: (number) => {

        const date = new Date(number * 1000);

        return date.toUTCString();

    },

    getDate: (string) => {

        const monthsObj = {

            Aug: '08',
            Sep: '09',
            Oct: '10',
            Nov: '11',
            Dec: '12'
        };

        const [ , date , month , year, ] = string.split(' ');

        return `${date}.${monthsObj[month]}.${year}`;
    },

    getDay: (string) => {

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

    },

    getWindDirection: () => {

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

        const getRandomInt = (max) => {
            return Math.floor(Math.random() * Math.floor(max));
        };

        const randomInt = getRandomInt(7);

        return directionsObj[randomInt];
    },

    getImage: (condition , description) => {

        const conditionsObj = {

            Thunderstorm: thunderstorm,
            Drizzle: drizzle,
            Rain: rain,
            Clear: sunnyImage,
            Clouds: {
                'few clouds': fewClouds,
                'scattered clouds': scatteredClouds,
                'broken clouds': scatteredClouds,
                'overcast clouds': overcastClouds
            }

        };

        if (condition === 'Clouds') {
            return conditionsObj[condition][description];
        };

        return conditionsObj[condition];

    },

    getTimeAndDate: (string) => {

        const [dateString , timeString] = string.split(' ');
        const [y , m , dd] = dateString.split('-');
        const [hr , min , ] = timeString.split(':');
        
        const time = `${hr}:${min}`;
        const date = `${dd}.${m}.${y}`;
    
        return [time , date];
    
    }

};
