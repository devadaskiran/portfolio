import React, { useState, useEffect } from 'react'

import styles from './Header.module.scss'

const Header = ({projectName, themeSwitch}) => {
    return (
        <div className={styles.wrapper}>
            {projectName}
            {themeSwitch}
        </div>
    );
};

export default Header
