import styled from 'styled-components';

const Paragraph = styled.p `

`;

const TitleParagraph = styled(Paragraph) `
        width: 45%auto;
        color: #BEBEBE;
        text-shadow: -5px 2px #000000;
        font-size: 100px;
        font-family: "Arial Black",Gadget,sans-serif;
        margin: 0;
    
`;

const FooterParagraph = styled(Paragraph) `
    margin: 0;
    color: #ffffff;
    font-size: 26px;
    font-family: Arial, Helvetica, sans-serif; 

`;

const FormParagraph = styled(Paragraph) `
    color: #000000;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 16px;
    margin: 0 auto;
`;

export default {TitleParagraph , FooterParagraph , FormParagraph};
