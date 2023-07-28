import React from 'react'

import { airBnb, strings } from 'assets/data/data';
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
                <Comment type="js" className={styles['commented-code']}>
                    This is my personal website where I showcase my online portfolio.
                </Comment>
                <Comment type="js" className={styles['commented-code']}>
                    I have more than 8 years of experience in UI development and design.
                </Comment>
                <Comment type="js" className={styles['commented-code']}>
                    The purpose of this website is to display my professional experience
                </Comment>
                <Comment type="js" className={styles['commented-code']}>
                    and skills in an organized manner.
                </Comment>
                <Comment type="js" className={styles['mobile-commented-code']}>
                    {strings.about}
                </Comment>
            </div>
            <div className={`d-flex flex-column ${styles.code}`}>
                <CodeWindow projectName="Project Name" projectDetails="Project Details" className={styles.shadow}/>
                <CodeWindow projectName="Project Name" projectDetails="Project Details" className={styles.shadow}/>
                <div className={styles.main}>
                    <div className={styles['small-shadow']}/>
                    <CodeWindow projectName="AirBnb" projectDetails="Replica Website" link="https://github.com/devadaskiran/airbnb-replica" list={airBnb}/>
                </div>
            </div>
        </div>
    );
};

export default Home
