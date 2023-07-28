import React from 'react'

import { airBnb } from 'assets/data/data';

import { Comment } from 'components';
import styles from './CodeWindow.module.scss'

const CodeWindow = ({ className, projectName, projectDetails, list, children, link, footer }) => {
    return (
        <div className={`d-flex flex-column ${styles.wrapper} ${className}`}>
            <header className='d-flex justify-content-between'>
                <p>
                    {projectName}
                </p>
                <p>
                    {projectDetails}
                </p>
            </header>
            <div className={`global-coding-area ${styles['coding-area']}`}>
                {list &&            
                    <Comment className={styles['commented-code']} type="css" list={list} />
                }
                {children}
                {link &&
                    <a target='_blank' href={link}>
                        Visit the repository
                    </a>
                }
            </div>
            {footer &&
                <footer>
                    {footer}
                </footer>
            }
        </div>
    );
};

export default CodeWindow
