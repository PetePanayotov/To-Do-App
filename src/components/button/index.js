import styled from 'styled-components';

const Button = styled.button `

`;

const SubmitButton = styled(Button) `

    width: 25%;
    height: 7%;
    align-self: center;
    font-size: 20px;
    font-weight: 400;
    color: #0F508E;
    background-color: #ffffff;
    border: 1px solid #BEBECE;
    border-radius: 5px;

    &:hover {
        cursor: pointer;
        color: #ffffff;
        background-color: #0379FF;
    }

`;

const DropDownButton = styled(Button) `

    background-color: #0F508E;
    color: white;
    font-size: 24px;
    border: none;
    outline: none;

    &:hover {
        padding-bottom: 3px;
        cursor: pointer;
        
    }
`;

const LogoutButton = styled(Button) `
    
    background-color: #0F508E;
    border: none;
    color: #ffffff;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 24px;
    text-decoration: none;
    outline: none;

    &:hover {
        padding-bottom: 3px;
        cursor: pointer;
        border-bottom: 2px solid #ffffff;
        
    }

`;

export default {SubmitButton , DropDownButton , LogoutButton};