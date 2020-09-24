import styled from 'styled-components';

const Button = styled.button `

`;

const SubmitButton = styled(Button) `

    min-width: 25%;
    height: 7%;
    align-self: center;
    font-size: 20px;
    font-weight: 400;
    color: #3A5A9C;
    background-color: #ffffff;
    border: 1px solid #BEBECE;
    border-radius: 5px;

    &:hover {
        cursor: pointer;
        color: #ffffff;
        background-color: #3A5A9C;
    };

    @media only screen and (max-width: 768px) {
        
        font-size: 16px;
        min-width: 30%;
        border: 1px solid #3A5A9C;
    };

`;

const LogoutButton = styled(Button) `
    
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    outline: none;
    border: none;
    color: #3A5A9C;
    padding: 12px 16px;
    text-decoration: none;
    display: block;

    &:hover{
        cursor: pointer;
        color: #ffffff;
        background-color: #3A5A9C;
    };

    @media only screen and (max-width: 768px) {
        
        font-size: 14px;
    };

`;

const ArrowButton = styled(Button) `

    height: 30vh;
    opacity: 0.5;
    font-size: 40px;
    outline: none;
    background-color: #D9D6D5;
    border: 1px solid #D9D6D5;
    border-radius: 20px;
    color: #ACACA8;
    align-self: center;

    
    &:hover {
        
        cursor: pointer;
        opacity: 1;
        
    };

    @media only screen and (max-width: 768px) {
        
        height: 20vh;
        opacity: 0.5;
        font-size: 25px;
    };

`;

const FinishButton = styled(Button) `

    margin-left: 85%;
    font-size: 22px;
    font-weight: 500;
    min-width: 8vw;
    height: 25%;
    outline: none;
    color: #0F508E;
    background-color: #ffffff;
    border: 2px solid #0F508E;
    border-radius: 10px;

    &:hover {
        
        cursor: pointer;
        color: #ffffff;
        background-color: #0F508E;
        
    };

    @media only screen and (max-width: 768px) {
        
        font-size: 12px;
        min-width: 20vw;
        height: 3vh;
        margin-left: 70%;
    };

`;

const PageButton = styled(Button) `

    border: none;
    background-color: #ffffff;
    font-size: 18px;
    color: ${props => props.isFirst ? '#C050F7' : '#0F508E'};
    border-bottom: ${props => props.isFirst ? '1px solid #C050F7' : 'none'};
    outline: none;

    &:hover {
        
        cursor: pointer;
        
    };

    @media only screen and (max-width: 768px) {
        
        font-size: 14px;
    };

`;

const UpdateButton = styled(Button) `

    width: 10vw;
    height: 4vh;
    align-self: center;
    font-size: 18px;
    color: #0F508E;
    background-color: #ffffff;
    border: 2px solid #0F508E;
    border-radius: 10px;
    outline: none;
    font-weight: 700;

    &:hover {
        
        cursor: pointer;
        color: #ffffff;
        background-color: #0F508E;
        
    };

    @media only screen and (max-width: 768px) {
        
        font-size: 12px;
        width: 25vw;
        height: 3vh;
    };
`;

const LanguageButton = styled(Button) `
    
    font-family: Arial,Helvetica,sans-serif;
    border: 2px solid #3A5A9C;
    border-radius: 10px;
    background-color: #ffffff;
    color: #3A5A9C;
    outline: none;
    height: 30px;
    width: 60px;
    font-size: 20px;
    font-weight: 700;

    &:hover {
        
        cursor: pointer;
        color: #ffffff;
        background-color: #0F508E;
        
    };

    @media only screen and (max-width: 768px) {
        width: 40px;
        height: 25px;
        font-size: 15px;
    };
`;

export default {SubmitButton , LogoutButton , ArrowButton , FinishButton , PageButton , UpdateButton , LanguageButton};