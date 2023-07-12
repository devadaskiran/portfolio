import React from 'react'

import { strings } from 'assets/data/data';
import { Code, Comment } from 'components';
import styles from './Home.module.scss';
import { CodeWindow } from '..';

const Home = () => {
    return (
        <div className={`d-flex w-100 ${styles.wrapper}`}>
            <div className={`d-flex flex-column justify-content-center ${styles['basic-info']}`}>
                <p>
                    Hello! I am
                </p>
                <h2>
                    {strings.firstName + ' ' + strings.lastName}
                </h2>
                <h4>
                    {strings.designation}
                </h4>
                <Comment className={styles['commented-code']}>
                    This is my personal website where I showcase my online portfolio.
                </Comment>
                <Comment className={styles['commented-code']}>
                    I have more than 8 years of experience in UI development and design.
                </Comment>
                <Comment className={styles['commented-code']}>
                    The purpose of this website is to display my professional experience
                </Comment>
                <Comment className={styles['commented-code']}>
                    and skills in an organized manner.
                </Comment>
                <Comment className={styles['mobile-commented-code']}>
                    This is my personal website where I showcase my online portfolio. I have more than 8 years of experience in UI development and design.
                    The purpose of this website is to display my professional experience  and skills in an organized manner.
                </Comment>
            </div>
            <div className={`d-flex flex-column ${styles.code}`}>
                <CodeWindow className={styles.shadow}/>
                <CodeWindow className={styles.shadow}/>
                <div className={styles.main}>
                    <div className={styles['small-shadow']}/>
                    <CodeWindow />
                </div>
            </div>
        </div>
    );
};

export default Home
