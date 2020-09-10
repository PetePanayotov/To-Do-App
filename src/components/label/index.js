import styled from 'styled-components';

const Label = styled.label `

    text-align: center;
    font-size: ${props => props.error ?'75px' : '25px'};

    @media only screen and (max-width: 768px) {
        
        font-size: ${props => props.error ?'45px' : '14px'};

    };
`;

const FormLabel = styled(Label) `

    font-size: 25px;
    font-weight: 400;

    @media only screen and (max-width: 768px) {
        
        font-size: 16px;

    };

`;

const MinTempLabel = styled(Label) `

    color: #00B3F3;
    font-size: 24px;

`;

const MaxTempLabel = styled(Label) `

    color: #F73C21;
    font-size: 24px;

`;

export default {Label , FormLabel , MinTempLabel , MaxTempLabel};