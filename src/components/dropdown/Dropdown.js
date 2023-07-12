import React, { useState, useEffect, useRef } from 'react';

import vscode from 'assets/images/icons/vscode.png';
import { DefaultIcon } from 'assets/icons';
import styles from './Dropdown.module.scss';

const Dropdown = ({label, className, handleDefault, handleVsCode}) => {
    const [dropdown, setDropdown] = useState(false);
    const componentRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (componentRef.current && !componentRef.current.contains(event.target)) {
        setDropdown(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
    const handleDropdown = () => {
        setDropdown(!dropdown);
    };
    return (
        <div className={`${styles.wrapper} ${className}`} ref={componentRef}>
            <div className="dropdown-label" onClick={handleDropdown}>
                {label}
            </div>
            {dropdown &&
                <div className={`${'dropdown-global'} ${styles['dropdown-window']}`} onClick={handleDropdown}>
                    <ul>
                        <li onClick={handleDefault}>
                            <DefaultIcon/>
                            Default
                        </li>
                        <li onClick={handleVsCode}>
                            <img src={vscode} alt='vs code logo'/>
                            VS Code
                        </li>
                    </ul>
                </div>
            }
        </div>
    );
};

export default Dropdown
