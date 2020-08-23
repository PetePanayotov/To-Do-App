import React from 'react';
import {Link} from 'react-router-dom';
import styles from './index.module.css'

const LinkComponent = ({type , text , href}) => {

    return (
        <Link to={href} className={styles[type]}>{text}</Link>
    )
    
};

export default LinkComponent