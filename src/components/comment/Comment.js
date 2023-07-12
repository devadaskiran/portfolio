import React from 'react'

import styles from './Comment.module.scss'

const Comment = ({children, className}) => {
    return (
        <div className={`${styles.wrapper} ${className}`}>
            <span>//</span> {children}
        </div>
    );
};

export default Comment
