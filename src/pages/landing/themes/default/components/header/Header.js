import React from 'react'

import { strings } from 'assets/data/data';

import SocialMedia from '../social-media/SocialMedia';
import { ProgrammingIcon } from 'assets/icons';
import styles from './Header.module.scss'

const Header = () => {
    return (
        <div className={styles.wrapper}>
            <div className={`d-flex align-items-center ${styles.logo}`}>
                <ProgrammingIcon/>
                <p>
                    {strings.firstName + '_' +strings.lastName}
                </p>
            </div>
            <div className={styles.socialmedia}>
                <SocialMedia/>
            </div>
        </div>
    );
};

export default Header
