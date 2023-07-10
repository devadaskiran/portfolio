import React, { useState } from 'react'

import Files from '../files/Files';
import logo from 'assets/images/logo/logo.svg';
import { Comment, Code } from 'components';
import styles from './Container.module.scss';

const Container = () => {

    const [introduction, setIntroduction] = useState(true);
    const handleIntroduction = () => {
        setIntroduction(false);
    };
    return (
        <div className={`d-flex w-100 h-100 ${styles.wrapper}`}>
            <Files
                className={styles.introduction}
                name="Introduction"
                type="js"
                open={introduction}
                handleClose={handleIntroduction}
            >
                <img src={logo} alt='logo' className={styles.logo} />
                <Comment>
                    UI Developer & UI/UX Designer
                </Comment>
                <Code tag="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                </Code>
            </Files>
        </div>
    );
};

export default Container
