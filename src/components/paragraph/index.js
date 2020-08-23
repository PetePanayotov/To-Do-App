import styled from 'styled-components';

const Paragraph = styled.p `
    margin: 0;
    color: #ffffff;
    font-size: 22px;
    font-family: Georgia, 'Times New Roman', Times, serif; 

`;

const FormParagraph = styled(Paragraph) `
    color: #000000;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 16px;
    margin: 0 auto;
`;

export default {Paragraph , FormParagraph};
