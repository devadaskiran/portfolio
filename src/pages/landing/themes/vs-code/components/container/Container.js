import React, { useState, useEffect } from 'react'

import Files from '../files/Files';
import logo from 'assets/images/logo/logo.svg';
import { Comment, Code } from 'components';
import { strings } from 'assets/data/data';
import styles from './Container.module.scss';

const Container = () => {

    return (
        <div className={`d-flex w-100 h-100 ${styles.wrapper}`}>
            <Files
                className={styles.introduction}
                name="Introduction"
                type="jsx"
            >
                <img src={logo} alt='logo' className={styles.logo} />
                <Comment type="js" className={styles.comment}>
                    {strings.designation}
                </Comment>
                <Code tag="p">
                {strings.about}
                </Code>
            </Files>
            <Files
                className={styles.introduction}
                name="About"
                type="jsx"
            >
                
                <Code tag="h2" className={styles.heading}>
                    About Me 
                </Code>
                <Code tag="p">
                    {strings.detailedDescription}
                </Code>
            </Files>
        </div>
    );
};

export default Container
