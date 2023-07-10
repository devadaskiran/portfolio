import React from 'react'

import styles from './Code.module.scss'

const Code = ({children, tag}) => {
    return (
        <div className={styles.wrapper}>
            <p className={`${styles.tag} ${styles.opening}`}>
                {'<'}{tag}{'>'}
            </p>
            <span className={styles.children}>
                {children}
            </span>
            <p className={`${styles.tag} ${styles.closing}`}>
                {'</'}{tag}{'>'}
            </p>
        </div>
    );
};

export default Code
