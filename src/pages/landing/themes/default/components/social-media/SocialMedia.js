import React from 'react'

import { GithubIcon, InstagramIcon, LinkedinIcon } from 'assets/icons';
import styles from './SocialMedia.module.scss'

const SocialMedia = () => {
    return (
        <ul className={`d-flex ${styles['social-media']}`}>
            <li>
                Find me in
            </li>
            <li>
                <LinkedinIcon/>
            </li>
            <li>
                <GithubIcon/>
            </li>
            <li>
                <InstagramIcon/>
            </li>
        </ul>
    );
};

export default SocialMedia
