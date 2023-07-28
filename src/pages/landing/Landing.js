import React, { useState, useEffect } from 'react';
import { Default, VSCode, Linkedin } from './themes';
import ThemeSwitch from 'components/theme-switch/ThemeSwitch';
import { strings } from 'assets/data/data';
import { Header } from 'components';
import { Header as DefaultHeader } from './themes/default/components';
import { Header as LinkedinHeader } from './themes/linkedin/components';
import { DefaultIcon, LinkedinColorIcon, VSCodeIcon } from 'assets/icons';
import vscode from 'assets/images/icons/vscode.png';
import styles from './Landing.module.scss';

const Landing = () => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('selectedTheme');
        return savedTheme || 'default';
    });

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
    };

    useEffect(() => {
        localStorage.setItem('selectedTheme', theme);
    }, [theme]);

    const themes = [
        {
            name: 'Default',
            icon: <DefaultIcon />,
            handle: () => handleThemeChange('default'),
            active: theme === 'default'
        },
        {
            name: 'VS Code',
            icon: <VSCodeIcon/>,
            handle: () => handleThemeChange('vscode'),
            active: theme === 'vscode'
        },
        {
            name: 'Linkedin',
            icon: <LinkedinColorIcon />,
            handle: () => handleThemeChange('linkedin'),
            active: theme === 'linkedin'
        }
        // Add more themes as needed
    ];

    const renderHeader = () => {
        const themeSwitch = (
            <ThemeSwitch
                className="additional-class"
                themes={themes}
            />
        );

        switch (theme) {
            case 'vscode':
                return <Header projectName={strings.projectName} themeSwitch={themeSwitch} />;
            case 'default':
                return <DefaultHeader themeSwitch={themeSwitch} />;
            default:
                return <LinkedinHeader themeSwitch={themeSwitch} />;
        }
    };

    const renderThemeComponent = () => {
        switch (theme) {
            case 'vscode':
                return <VSCode />;
            case 'default':
                return <Default />;
            default:
                return <Linkedin />;
        }
    };

    return <div className={styles.wrapper}>{renderHeader()}{renderThemeComponent()}</div>;
};

export default Landing;
