import React, { useState } from 'react';

import { TerminalIcon } from 'assets/icons';
import {Home, About} from '../index';
import styles from './Tabs.module.scss';


const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabData = [
    { label: 'home', content: <Home/> },
    { label: 'about me', content: <About/> },
    { label: 'experience', content: 'experience' },
    { label: 'skills', content: 'skills' },
    { label: 'projects', content: 'project' },
    { label: 'contact', content: 'contact' },
    { label: ''},
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className={styles.wrapper}>
      <ul className={styles.tabs}>
        {tabData.map((tab, index) => (
          <li
            key={index}
            className={index === activeTab ? styles.active : ''}
            onClick={() => handleTabClick(index)}
          >
            <TerminalIcon/>
            <span>_</span>{tab.label}
          </li>
        ))}
      </ul>
      <div className={`d-flex align-items-center ${styles.container}`}>{tabData[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
