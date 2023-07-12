import React, {useState} from 'react'

import { Default, VSCode } from './themes';

import ThemeSwitch from 'components/theme-switch/ThemeSwitch';
import styles from './Landing.module.scss';

const Landing = () => {
    const [vsCode, setVsCode] = useState(false);

    const handleVsCode = () => {
        setVsCode(true);
    };
    const handleDefault = () => {
        setVsCode(false);
    };
    return (
        <div className={styles.wrapper}>
            <ThemeSwitch handleDefault={handleDefault} handleVsCode={handleVsCode}/>
            {vsCode ?
                <VSCode/> :
                <Default/>
            }
        </div>
    );
};

export default Landing
