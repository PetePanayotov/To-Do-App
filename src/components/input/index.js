import styled from 'styled-components';

const Input = styled.input `

`;

const FormInput = styled(Input) `

    height: 40%;
    width: 100%;
    font-size: 16px;

    ::placeholder {
        font-size: 14px;
        color: #000000;
    };

    @media only screen and (max-width: 768px) {
        
        height: 35%;
        width: 100%;
        font-size: 14px;

        ::placeholder {
            font-size: 10px;
            color: #000000;
        };

    };

`; 

const UpdateInput = styled(Input) `

    width: 15vw;
    height: 3vh;

    ::placeholder {
        font-size: 14px;
        color: #000000;
    };

    @media only screen and (max-width: 768px) {
        
        height: 15%;
        width: 80%;
        font-size: 14px;

        ::placeholder {
            font-size: 10px;
            color: #000000;
        };

    };
`;

export default {FormInput , UpdateInput};