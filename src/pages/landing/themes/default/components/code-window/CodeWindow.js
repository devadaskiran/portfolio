import React from 'react'

import { strings } from 'assets/data/data';

import styles from './CodeWindow.module.scss'

const CodeWindow = ({className}) => {
    return (
        <div className={`d-flex flex-column ${styles.wrapper} ${className}`}>
            <header className='d-flex justify-content-between'>
               <p>
                Project Name
               </p>
               <p>
                Project Details
               </p>
            </header>
            <div className={styles['coding-area']}>
                <div className={styles['commented-code']}>
                    /** <br/>
                        <span>
                            * Lorem ipsum dolor sit amet, consectetur adipiscing <br/>
                            * Lorem ipsum dolor sit amet, consectetur adipiscing   <br/>
                            * Lorem ipsum dolor sit amet, consectetur adipiscing   <br/>
                            * Lorem ipsum dolor sit amet, consectetur adipiscing   <br/>
                            */
                        </span>
                        
                </div>
                <a href='#'>
                  See the project  
                </a>
            </div>
        </div>
    );
};

export default CodeWindow
