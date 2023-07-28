import React from 'react'

import { SearchIcon } from 'assets/icons';
import styles from './SearchBox.module.scss'

const SearchBox = ({className}) => {
    return (
        <div className={`${styles.wrapper} ${className}`}>
            <SearchIcon/>
            <input type='text' placeholder='Search'/>
        </div>
    );
};

export default SearchBox
