import React, { useState, useEffect } from 'react'

import { ArrowDownIcon, FolderIcon } from 'assets/icons';
import { FileName } from 'components';
import styles from './FolderExplorer.module.scss'

const FolderExplorer = ({projectName}) => {
    return (
        <div className={`d-flex flex-column h-100 ${styles.wrapper}`}>
            <p>
                EXPLORER
            </p>
            <p className={`d-flex align-items-center ${styles['project-name']}`}>
                <ArrowDownIcon/>
                {projectName}
            </p>
            <div className={styles.folder}>
                <p className='d-flex align-items-center'>
                    <div className={`d-flex align-items-center ${styles.arrow}`}>
                        <ArrowDownIcon/>
                    </div>
                    <FileName type="folder" name="Home"/>
                </p>
                <ul>
                    <li className={styles.active}>
                        <FileName type="jsx" name="Introduction"/>
                    </li>
                    <li>
                        <FileName type="jsx" name="About"/>
                    </li>
                </ul>
            </div>
            <div className={styles.folder}>
                <p className='d-flex align-items-center'>
                    <div className={`d-flex align-items-center ${styles.arrow}`}>
                        <ArrowDownIcon/>
                    </div>
                    <FileName type="folder" name="Pages"/>
                </p>
                <ul>
                    <li>
                        <FileName type="jsx" name="Experience"/>
                    </li>
                    <li>
                        <FileName type="jsx" name="Skills"/>
                    </li>
                    <li>
                        <FileName type="jsx" name="Contact"/>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default FolderExplorer;
