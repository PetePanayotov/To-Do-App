import styled from 'styled-components';

const Container = styled.div `

`;

const Main = styled(Container) `

    width: 100%;
    height: 100%;
    min-height: 82vh;
    display: flex;
    flex-direction: ${props => props.direction === 'column' ? 'column' : 'row'};
    justify-content: ${props => props.direction === 'column' ? 'space-evenly' : 'center'};
   

`;


const DropDownContent = styled(Container) `

    display: none;
    position: absolute;
    opacity: 0.90;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;

`;

const AboutPageContainer = styled(Container) `

    width: 70%;
    height: 50%;
    background-color: #FFFFE0;
    opacity: 0.70;
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;

`;

const WeatherForecastConteiner = styled(Container) `

    width: 95%;
    height: 70vh;
    align-self: center;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const ForeCastUnitWrapper = styled(Container) `

    border-left: 1px solid #BCBCBA;
    border-right: 1px solid #BCBCBA;
    height: 80%;
    max-width: 150px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

`;

const ForeCstImageWrapper = styled(Container) `

    width: 90%;
    height: 28%;
    align-self: center;
   
`;

const ActivityContainer = styled(Container) `

    width: 70%;
    max-height: 25%;
    border: 2px solid #0F508E;
    border-radius: 30px;
    padding-bottom: 15px;
    margin: 0 auto;

`;

const PageBtnsContainer = styled(Container) `

    align-self: center;
    display: flex;
    justify-content: space-evenly;
    min-width: 4%;
`;

const InputContainer = styled.div `

    width: 50%;
    margin: 0 auto;
    height: 15%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`;

const UpdateContainer = styled(Container) `

    width: 60%;
    height: 25vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 2px solid #0F508E;
    border-radius: 10px;
    padding: 10px 0;
    align-self: center;
    background-color: #EFEFEF;
`;

const UpdateWrapper = styled(Container) `

    align-self: center;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 80%;
    align-items: center;
    

`;

export default {Main , DropDownContent , AboutPageContainer , WeatherForecastConteiner , ForeCastUnitWrapper , ForeCstImageWrapper , ActivityContainer , PageBtnsContainer , InputContainer , UpdateContainer , UpdateWrapper};