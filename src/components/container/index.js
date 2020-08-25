import styled from 'styled-components';

const Container = styled.div `

`;

const DropDownWrapper = styled(Container) `

    position: relative;
    
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

export default {DropDownWrapper , DropDownContent , AboutPageContainer};