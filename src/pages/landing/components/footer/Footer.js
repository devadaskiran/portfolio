import React, { useState, useEffect } from 'react'

import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={`d-flex w-100 ${styles.wrapper}`}>
            <div className={styles['side-separate']}>

            </div>
            <div className={`d-flex w-100 h-100 align-items-center ${styles.inner}`}>
                Footer
            </div>
        </div>
    );
};

export default Footer
