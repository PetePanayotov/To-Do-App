import React from 'react';
import styles from './index.module.css';
import Video from '../video/JustDoIt.mp4';

const Main = (props) => {


    return (
        <div className={styles['pagelayout']}>

            { props.hasVideo &&
            
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
            
            }
            
            {props.children}

        </div>
    );

};



export default Main;