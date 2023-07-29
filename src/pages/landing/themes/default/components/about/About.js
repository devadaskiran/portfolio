import React from 'react'

import { strings } from 'assets/data/data';
import kiran from 'assets/images/photos/kiranDevadas.png';
import signature from 'assets/images/photos/signature.png';
import styles from './About.module.scss';
import { Testimonials } from './components';

const About = () => {
    const paragraphs = strings.detailedDescription.split('\n\n');
    return (
        <div className={`d-flex w-100 h-100 align-items-center ${styles.wrapper}`}>
           <div className={styles.column}>
                <div className={`d-flex align-items-center ${styles.user}`}>
                    <img className={styles.dp} src={kiran} alt='Kiran Devadas - UI/UX Designer and UI Developer with 8+ Years of Experience'/>
                   <div>
                   <h3>
                        {strings.firstName + ' ' + strings.lastName}
                    </h3>
                    <h5>
                        {strings.designation}
                    </h5>
                   </div>
                </div>
                <div className={styles.paragraph}>
                    {paragraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                    <p>
                        Sincerly,
                        <strong className='d-block'>
                          {strings.firstName + ' ' + strings.lastName}
                        </strong>
                    </p>
                </div>
                <img className={styles.signature} src={signature} alt='Kiran Devadas - UI/UX Designer and UI Developer with 8+ Years of Experience'/>

           </div>
           <div className={`d-flex align-items-center ${styles.column}`}>
                <Testimonials className="w-100"/>
           </div>
        </div>
    );
};

export default About
