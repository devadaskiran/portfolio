import React from 'react'

import styles from './Code.module.scss'

const Code = ({children, tag, className}) => {
    return (
        <div className={`${styles.wrapper} ${className}`}>
            <p className={`${styles.tag} ${tag == "h2" && styles['h-tag']} ${styles.opening}`}>
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
