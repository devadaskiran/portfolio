import React, { useState } from 'react';

import { HomeIcon, AboutIcon, ExperienceIcon, SkillIcon, ContactIcon } from 'assets/icons';
import {Home, About, Experience} from '../index';
import styles from './Tabs.module.scss';


const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabData = [
    { label: 'home', content: <Home/>, icon: <HomeIcon/> },
    { label: 'about me', content: <About/>, icon: <AboutIcon/> },
    { label: 'experience', content: <Experience/>, icon: <ExperienceIcon/> },
    { label: 'projects', content: 'project', hideInMobile: true },
    { label: 'contact', content: 'contact', icon: <ContactIcon/> },
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
            className={`${index === activeTab ? styles.active : ''} ${tab.hideInMobile && styles['hide-in-mobile']}`}
            onClick={() => handleTabClick(index)}
          >
            
            {tab.icon}
            <span>_</span>{tab.label}
          </li>
        ))}
      </ul>
      <div className={`d-flex align-items-center ${styles.container}`}>{tabData[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
