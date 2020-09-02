import styled from 'styled-components';

const Label = styled.label `

    text-align: center;
`;

const FormLabel = styled(Label) `

    font-size: 25px;
    font-weight: 400;

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