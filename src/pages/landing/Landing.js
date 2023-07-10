import React from 'react'

import { Container, FolderExplorer, Footer, Header, SideBar } from './components';
import { strings } from 'assets/data/data';
import styles from './Landing.module.scss';

const Landing = ({projectName}) => {
    return (
        <div className={`d-flex w-100 flex-column ${styles.container}`}>
            <Header projectName={strings.projectName}/>
            <div className='d-flex h-100'>
                <SideBar/>
                <FolderExplorer projectName={strings.projectName}/>
                <Container/>
            </div>
            <Footer/>
        </div>
    );
};

export default Landing
