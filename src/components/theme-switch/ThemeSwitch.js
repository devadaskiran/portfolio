import React, { useState } from 'react';
import { CloseIcon, SettingsIcon, TickIcon } from 'assets/icons';
import styles from './ThemeSwitch.module.scss';

const ThemeSwitch = ({ className, themes }) => {
  const [sidePanel, setSidePanel] = useState(false);

  const handleSettings = () => {
    setSidePanel(!sidePanel);
  };

  const handleClick = (index) => {
    themes[index].handle();
  };

  return (
    <div
      className={`d-flex align-items-center ${styles.wrapper} ${
        sidePanel && styles.dropdown
      } ${className}`}
      onClick={handleSettings}
    >
      <div className={`d-flex align-items-center ${'floating-button-general'} ${styles['floating-button']}`} onClick={handleSettings}>
        <SettingsIcon />
      </div>
      {sidePanel && (
        <div className={styles['side-panel-wrapper']} onClick={handleSettings}>
          <div className={`${styles['side-panel']} ${styles.open} side-panel-global`}>
            <header className="d-flex justify-content-between">
              Themes
              <CloseIcon onClick={handleSettings} />
            </header>
            <ul>
              {themes.map((theme, index) => (
                <li
                  key={index}
                  className={`d-flex align-items-center ${
                    theme.active ? styles.active : ''
                  }`}
                  onClick={() => handleClick(index)}
                >
                  {theme.icon}
                  <p>{theme.name} theme</p>
                  <div className={styles.tick}>
                      <TickIcon/>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitch;
