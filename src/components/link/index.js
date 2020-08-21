import React from 'react';
import {Link} from 'react-router-dom';
import styles from './index.module.css'

const LinkComponent = ({text}) => {

    return (
        <Link to="" className={styles.link}>{text}</Link>
    )
    
};

export default LinkComponent