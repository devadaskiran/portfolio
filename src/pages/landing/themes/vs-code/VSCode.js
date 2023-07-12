import React from 'react'

import styles from './VSCode.module.scss';
import { Header, SideBar, FolderExplorer, Container, Footer } from './components';
import { strings } from 'assets/data/data';

const VSCode = ({themeSwitch}) => {

    return (
        <div className={`d-flex w-100 flex-column ${styles.container}`}>
            <Header projectName={strings.projectName} themeSwitch={themeSwitch}/>
            <div className='d-flex h-100'>
                <SideBar/>
                <FolderExplorer projectName={strings.projectName}/>
                <Container/>
            </div>
            <Footer/>
        </div>
    );
};

export default VSCode
