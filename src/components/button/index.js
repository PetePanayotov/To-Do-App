import styled from 'styled-components';

const Button = styled.button `

`;

const SubmitButton = styled(Button) `

    width: 25%;
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
    }

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
    }

`;

const ArrowButton = styled(Button) `

    height: 40%;
    opacity: 0.5;
    font-size: 40px;
    outline: none;
    background-color:#D9D6D5;
    border: 1px solid #D9D6D5;
    border-radius: 20px;
    color: #ACACA8;
    
    &:hover {
        
        cursor: pointer;
        opacity: 1;
        
    }
`;

const FinishButton = styled(Button) `

    margin-left: 85%;
    font-size: 22px;
    font-weight: 500;
    width: 10%;
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
        
    }

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
        
    }

`;

const UpdateButton = styled(Button) `

    width: 15%;
    height: 4vh;
    align-self: center;
    font-size: 18px;
    color: #0F508E;
    background-color: #ffffff;
    border: 2px solid #0F508E;
    border-radius: 10px;
    outline: none;

    &:hover {
        
        cursor: pointer;
        color: #ffffff;
        background-color: #0F508E;
        
    }
`;

export default {SubmitButton , LogoutButton , ArrowButton , FinishButton , PageButton , UpdateButton};