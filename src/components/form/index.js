import styled from 'styled-components';

const Form = styled.form `

    width: 25%;
    height: 60vh;
    background-color: #EFEFEF;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-self: center;
    margin: 0 auto;
    border: 1px solid #282C34;
    border-radius: 5px;
    opacity: 0.80;

    @media only screen and (max-width: 768px) {
        
        width: 70%;

    };

`;

export default Form;