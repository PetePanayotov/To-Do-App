import styled from 'styled-components';

const Button = styled.button `

    width: 25%;
    height: 7%;
    align-self: center;
    font-size: 16px;
    color: #ffffff;
    background-color: #0379FF;
    border: 1px solid #0379FF;
    border-radius: 5px;

    &:hover {
        cursor: pointer;
        color: #0379FF;
        background-color: #ffffff;
    }

`;

export default Button;