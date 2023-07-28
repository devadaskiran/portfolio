import React from 'react';

import { LinkedinColorIcon } from 'assets/icons';
import styles from './Header.module.scss';
import { SearchBox } from 'components';


const Header = ({themeSwitch}) => {
  return (
    <div className={styles.wrapper}>
      <div className={`d-flex justify-content-between ${styles.container}`}>
        <div className={`d-flex align-items-center ${styles.column}`}>
          <div className={styles.logo}>
            <LinkedinColorIcon/>
          </div>
          <SearchBox/>
        </div>
        <div className={styles.column}>
          {themeSwitch}
        </div>
      </div>
    </div>
  );
};

export default Header;
