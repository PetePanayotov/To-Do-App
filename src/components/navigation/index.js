import styled from 'styled-components';

const Navigation = styled.ul `
    list-style-type: none;
    display: flex;
    width: 50%;
    justify-content: space-evenly;
    align-items: center;

    @media only screen and (max-width: 768px) {
        width: 85%;
    }

`;


export default Navigation;