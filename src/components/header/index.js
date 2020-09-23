import styled from 'styled-components';


const Header = styled.header `

    width: 100%;
    height: 10vh;
    background-color: #3A5A9C;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 768px) {
        height: 8vh;
    }
    
`;

export default Header