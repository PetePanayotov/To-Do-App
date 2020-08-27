import styled from 'styled-components';

const Paragraph = styled.p `

`;

const TitleParagraph = styled(Paragraph) `
        width: 45%;
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

const AboutPageTitleParagraph = styled(Paragraph) `
    margin: 10px 0 0 10px;
    font-size: 35px;
    font-weight: 500;
    font-family: "Arial Black",Gadget,sans-serif;
`;

const AboutPageParagraph = styled(Paragraph) `

    font-size: 20px;
    font-family: "Arial Black",Gadget,sans-serif;
    font-weight: 100;
    width: 80%;
    text-align :center;
`;

const WeatherFrcUnitParagraph = styled(Paragraph) `
    margin: 0;
    text-align: center;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;

`

export default {TitleParagraph , FooterParagraph , FormParagraph , AboutPageTitleParagraph , AboutPageParagraph , WeatherFrcUnitParagraph};
