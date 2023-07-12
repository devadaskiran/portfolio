import React, { useState, useEffect } from 'react'

import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={`d-flex w-100 ${styles.wrapper}`}>
            <div className={styles['side-separate']}>

            </div>
            <div className={`d-flex w-100 h-100 align-items-center justify-content-end ${styles.inner}`}>
                <a className={styles.link}>
                    mail.kirandevadas@gmail.com
                </a>
                <a className={styles.link}>
                    +91 9947724433
                </a>
                <a className={styles.link}>
                    hire me?
                </a>
            </div>
        </div>
    );
};

export default Footer
