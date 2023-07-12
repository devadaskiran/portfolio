import React, { useState, useEffect } from 'react'

import styles from './Header.module.scss'

const Header = ({projectName}) => {
    return (
        <div className={styles.wrapper}>
            {projectName}
        </div>
    );
};

export default Header
