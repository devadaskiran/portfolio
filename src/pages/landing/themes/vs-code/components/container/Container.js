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
                <Comment className={styles.comment}>
                    {strings.designation}
                </Comment>
                <Code tag="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                </Code>
            </Files>
        </div>
    );
};

export default Container
