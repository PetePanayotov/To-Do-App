import styled from 'styled-components';

const Paragraph = styled.p `

`;

const TitleParagraph = styled(Paragraph) `

    color: #BEBEBE;
    text-shadow: -5px 2px #000000;
    font-size: 100px;
    font-family: "Arial Black",Gadget,sans-serif;
    align-self: flex-start;
    
    @media only screen and (max-width: 768px) {
        font-size: 40px;
    }
    
`;

const FooterParagraph = styled(Paragraph) `
    margin: 0;
    color: #ffffff;
    font-size: 26px;
    font-family: Arial, Helvetica, sans-serif; 
    align-self: center;
    margin: 0 auto;

    @media only screen and (max-width: 768px) {
        font-size: 18px
    }

`;

const FormParagraph = styled(Paragraph) `
    color: #000000;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 16px;
    margin: 0 auto;

    @media only screen and (max-width: 768px) {
        
        font-size: 14px;

    };
`;

const AboutPageTitleParagraph = styled(Paragraph) `
    margin: 10px 0 0 10px;
    font-size: 35px;
    font-weight: 500;
    font-family: "Arial Black",Gadget,sans-serif;

    @media only screen and (max-width: 768px) {
        font-size: 18px
    }
`;

const AboutPageParagraph = styled(Paragraph) `

    font-size: 20px;
    font-family: "Arial Black",Gadget,sans-serif;
    font-weight: 100;
    width: 80%;
    text-align :center;

    @media only screen and (max-width: 768px) {
        font-size: 12px
    }
`;

const WeatherFrcUnitParagraph = styled(Paragraph) `
    margin: 0;
    text-align: center;
    font-size: ${props => props.title ? '24px' : '16px'};
    color: ${props => props.date ? '#BCBCBA' : '#000000'};
    font-family: Arial, Helvetica, sans-serif;

    @media only screen and (max-width: 768px) {
        
        font-size: ${props => props.title ? '12px' : '10px'};
    }

`;

const ActivityTitleParagraph = styled(Paragraph) `

    font-size: 30px;
    margin-top: -24px;
    margin-left: 70px;
    color: #0F508E;
    text-align: center;
    width: 25%;
    background: #ffffff;
    margin-bottom: 0;

    @media only screen and (max-width: 768px) {
        font-size: 25px;
        width: 40%;
        margin-top: -20px;
    };

`;

const ActivityParagraph = styled(Paragraph) `

    margin: 0;
    color: #0F508E;
    font-size: 24px;
    margin-left: 75px;  

    @media only screen and (max-width: 768px) {
        font-size: 18px;
    };    

`;

export default {ActivityTitleParagraph , ActivityParagraph , TitleParagraph , FooterParagraph , FormParagraph , AboutPageTitleParagraph , AboutPageParagraph , WeatherFrcUnitParagraph};
