import React from 'react';
import styles from './index.module.css';
import Video from '../video/JustDoIt.mp4';

const Main = (props) => {

    const page = props.page !== undefined ? 'guest' : 'other'

    return (
        <div className={styles[page]}>

            <div>
                <video autoPlay loop muted 
                    style={{
                        position: "absolute",
                        width: "100%",
                        left: "50%",
                        top: "50%",
                        height: "100%",
                        objectFit: "cover",
                        transform: "translate(-50% , -50%)",
                        zIndex: "-1"
                    }}
                >
                <source src={Video} type="video/mp4"/>
                </video>
            
            </div>
            
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