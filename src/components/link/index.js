import styled from 'styled-components';
import {Link} from 'react-router-dom';


const HeaderLink = styled(Link) `

    color: #ffffff;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 24px;
    text-decoration: none;

    &:hover{
        padding-bottom: 5px;
        cursor: pointer;
        border-bottom: 2px solid #ffffff;
    }
`;

const FormLink = styled(Link) `

    font-family: Arial, Helvetica, sans-serif;
    color: #7E4CCC;
    font-size: 16px;
    text-decoration: none;

    &:hover{
        cursor: pointer;
        border-bottom: 1px solid;
    }
`;

const DropDownLink = styled(Link) `

    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    text-align: center;
    color: #3A5A9C;
    padding: 12px 16px;
    text-decoration: none;
    display: block;

    &:hover{
        color: #ffffff;
        background-color: #3A5A9C;
    }

`;

export default {HeaderLink , FormLink , DropDownLink};
