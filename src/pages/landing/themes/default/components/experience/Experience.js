import React from 'react'

import { experience } from 'assets/data/data';
import { NewWindowIcon } from 'assets/icons';
import { Comment } from 'components';
import { strings } from 'assets/data/data';
import styles from './Experience.module.scss';

const Experience = () => {
    return (
        <div className={`d-flex w-100 h-100  ${styles.wrapper}`}>
            <div className={`d-flex align-items-center ${styles.column}`}>
                <div className={`${styles['exp-wrapper']} ${styles['exp-heading']}`}>
                    <h2>
                        Experience    
                    </h2>
                    <Comment className={styles['commented-code']}>
                        {strings.expDescription}
                    </Comment>
                </div>
            </div>
            <div className={`d-flex ${styles.column}`}>
                <div className={styles['exp-wrapper']}>
                    {experience.map((expItems) => (
                        <div className={styles['exp-items']}>
                            <div className={`d-flex ${styles['exp-inner-wrapper']}`} key={expItems.id}>
                                <div className={styles.year}>
                                    {expItems.startDate.split(' ')[1]} -{' '} {expItems.endDate === 'Present'
                                        ? 'Present'
                                        : expItems.endDate.split(' ')[1]}
                                </div>
                                <div className={styles['exp-details']}>
                                    <div className='d-flex align-items-center'>
                                        <h4 className={styles.designation}>
                                            {expItems.designation}
                                        </h4>
                                        <span className={styles.dot} />
                                        <a target='_blank' className={`d-flex align-items-center ${styles.organisation}`} href={expItems.orgUrl}>
                                            {expItems.organisation}
                                            {expItems.orgUrl &&
                                                <NewWindowIcon className={styles['new-window']} />
                                            }
                                        </a>
                                    </div>
                                    <p className={styles.description}>
                                        {expItems.description}
                                    </p>
                                    <ul className={`list-style-none d-flex ${styles.tag}`}>
                                        {expItems.skills.map((skill, index) => (
                                            <li key={index}>{skill}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Experience
