import React, { useState, useEffect } from 'react'

import { CloseIcon } from 'assets/icons';
import { FileName } from 'components';
import styles from './Files.module.scss'

const Files = ({children, name, type, className}) => {
    const [open, setOpen] = useState(true);
    const handleClose = () => {
        setOpen(false);
    };
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
