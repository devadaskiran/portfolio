import React, { useState, useEffect } from 'react'

import { CloseIcon, JSIcon } from 'assets/icons';
import styles from './Files.module.scss'
import { FileName } from 'components';

const Files = ({children, name, type, open, handleClose, className}) => {
    return (
        <>
            {open &&
                <div className={`${styles.wrapper} ${className}`}>
                    <div className={`d-flex align-items-center ${styles['file-name']}`}>
                        <FileName name={name} type={type}/>
                        <div className={styles.close} onClick={handleClose}>
                            <CloseIcon/>
                        </div>
                    </div>
                    <div className={styles['inner-wrapper']}>
                        {children}
                    </div>
                </div>
            }
        </>
    );
};

export default Files
