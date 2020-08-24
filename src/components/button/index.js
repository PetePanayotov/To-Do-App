import styled from 'styled-components';

const Button = styled.button `

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

export default Button;