import React from 'react'

import { DocumentIcon, FolderIcon, JSIcon } from 'assets/icons';
import styles from './FileName.module.scss'

const FileName = ({type, name, children}) => {
    return (
        <div className={styles.wrapper}>
            <div className={`d-flex align-items-center ${styles['file-name']}`}>
                {type == "js" ? <JSIcon/> : type == "folder" ? <FolderIcon/> : <DocumentIcon/>}
                
                {name}{type == "js" ? '.js' : ''}
            </div>
        </div>
    );
};

export default FileName
