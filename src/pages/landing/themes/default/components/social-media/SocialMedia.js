import React from 'react'

import { GithubIcon, InstagramIcon, LinkedinIcon, BehanceIcon } from 'assets/icons';
import styles from './SocialMedia.module.scss'

const SocialMedia = () => {
    return (
        <ul className={`d-flex ${styles['social-media']}`}>
            <li>
                Find me in
            </li>
            <li>
                <a target="_blank" href='https://www.linkedin.com/in/kirandevadas/'>
                    <LinkedinIcon/>
                </a>
            </li>
            <li>
                <a target="_blank" href='https://github.com/devadaskiran/'>
                    <GithubIcon/>
                </a>
            </li>
            <li>
                <a target="_blank" href='https://www.behance.net/_kirandevadas'>
                    <BehanceIcon/>
                </a>
            </li>
            <li>
                <a target="_blank" href='https://www.instagram.com/kiran__devadas/'>
                    <InstagramIcon/>
                </a>
            </li>
        </ul>
    );
};

export default SocialMedia
