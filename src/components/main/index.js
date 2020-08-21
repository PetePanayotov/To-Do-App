import React from 'react';
import styles from './index.module.css';

const Main = (props) => {

    const page = props.page !== undefined ? 'guest' : 'other'

    return (
        <div className={styles[page]}>
            {props.children}
        </div>
    );

};


// const Main = styled.div `

//     background-image: ${props => props.image || ''};
//     background-position: center;
//     background-size: cover;
//     background-repeat: no-repeat;
//     width: 100%;
//     height: 82vh;

// `;

export default Main;