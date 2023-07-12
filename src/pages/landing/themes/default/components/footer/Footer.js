import React, { useState, useEffect } from 'react'

import { DateTime } from 'components';
import SocialMedia from '../social-media/SocialMedia';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={`d-flex justify-content-between ${styles.wrapper}`}>
            <div className={styles.socialmedia}>
                <SocialMedia/>
            </div>
            <DateTime/>
        </div>
    );
};

export default Footer
