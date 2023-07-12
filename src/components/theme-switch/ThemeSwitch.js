import React, { useState, useEffect, useRef } from 'react';


import { DefaultIcon, SettingsIcon } from 'assets/icons';
import vscode from 'assets/images/icons/vscode.png';
import styles from './ThemeSwitch.module.scss';

const ThemeSwitch = ({className, handleDefault, handleVsCode}) => {
    const [themeDropdown, setThemeDropdown] = useState(false);
    const handleSettings = () => {
        setThemeDropdown(!themeDropdown);
    };
    return (
        <div className={`d-flex align-items-center ${styles.wrapper} ${themeDropdown && styles.dropdown} ${className}`} onClick={handleSettings}>
            <div className={`d-flex align-items-center ${styles.header}`}>
                <div className='d-flex'>
                    <SettingsIcon/>
                </div>
                <p>
                    Themes
                </p>
            </div>
            <ul>
                <li className='d-flex align-items-center' onClick={handleDefault}>
                    <DefaultIcon/>
                    <p>
                        Default theme
                    </p>
                </li>
                <li className='d-flex align-items-center' onClick={handleVsCode}>
                    <img src={vscode} alt='vs code logo'/>
                    <p>
                        VS Code
                    </p>
                </li>
            </ul>
        </div>
    );
};

export default ThemeSwitch
