import React from 'react'

import { strings } from 'assets/data/data';
import { Header, Tabs, Footer } from './components';
import styles from './Default.module.scss';

const Default = () => {

    return (
        <div className={`d-flex w-100 flex-column ${styles.wrapper}`}>
            <Header projectName={strings.name} />
            <Tabs/>
            <Footer/>
        </div>
    );
};

export default Default
