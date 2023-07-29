import React, { useState, useEffect } from 'react';

import Slider from "react-slick";

import { testimonials } from 'assets/data/data';
import styles from './Testimonials.module.scss'
import CodeWindow from '../../../code-window/CodeWindow';
import { LinkedinColorIcon } from 'assets/icons';

const Testimonials = ({ className, carousel }) => {
    const [autoplay, setAutoPlay] = useState(true);

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: autoplay,
        autoplaySpeed: 10000,
    };

    const handleAutoplay = () => {
        setAutoPlay(prevAutoplay => !prevAutoplay);
    };

    useEffect(() => {
        settings = {
            ...settings,
            autoplay: autoplay,
        };
    }, [autoplay]);

    return (
        <div className={`${styles.wrapper} ${className}`}>
            <CodeWindow
                projectName="Testimonials"
                projectDetails={testimonials.length + " Comments"}
                className={styles['code-wrapper']}
                footer={
                    <a className={styles['on-off-button']} onClick={handleAutoplay}>
                        Turn {!autoplay ? 'on' : 'off'} autoplay
                    </a>
                }
            >
                <ul className={`list-style-none ${styles['code-list']}`}>
                    <li className='d-flex align-items-center'>
                        <span>
                        </span>
                        <div className={styles.description}>

                        </div>
                    </li>
                    <li className='d-flex align-items-center'>
                        <span>
                            1 1
                        </span>
                        <div className={styles.description}>
                            # This is my testimonial page
                        </div>
                    </li>
                    <li className='d-flex align-items-center'>
                        <span>
                            2 2
                        </span>
                        <div className={styles.description}>
                          # See reviews and recommendations from my leaders and colleagues. 
                        </div>
                    </li>
                    <li className={`d-flex align-items-center ${styles['added-line']}`}>
                        <span>
                            3 3
                        </span>
                        <div className={styles.description}>
                            # highlighting the advantageous impact of my skills and services.
                        </div>
                    </li>
                    <li className='d-flex align-items-center'>
                        <span>
                        </span>
                        <div className={styles.description}>

                        </div>
                    </li>
                    <li className='d-flex align-items-center'>
                        <div className={styles['testimonial-wrapper']}>
                            <Slider {...settings}>
                                {testimonials.map((testimonialsItem) => (
                                    <div className={styles['carousel-item']} key={testimonialsItem.id}>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div className={`d-flex align-items-center ${styles['avatar-info']}`}>
                                                <div className={styles.dp}>
                                                    <img src={testimonialsItem.image} alt='Image of ' />
                                                </div>
                                                <div>
                                                    <h4>
                                                        {testimonialsItem.name}
                                                    </h4>
                                                    <h5>
                                                        {testimonialsItem.designation}, {testimonialsItem.organisation}
                                                    </h5>
                                                </div>
                                                <a className={styles.linkedin} target='_blank' href={testimonialsItem.linkedinLink}>
                                                    <LinkedinColorIcon/>
                                                </a>
                                            </div>
                                            <div className={`d-flex align-items-center ${styles.tag}`}>
                                                Comment
                                            </div>
                                        </div>
                                        <div className={styles['msg-wrapper']}>
                                            <div className={styles.message}>
                                                {testimonialsItem.message}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </li>
                    <li className='d-flex align-items-center'>
                        <span>
                        </span>
                        <div className={styles.description}>

                        </div>
                    </li>
                    <li className='d-flex align-items-center'>
                        <span>
                            4 4
                        </span>
                        <div className={styles.description}>
                            # Testimonials offer insights from leaders/colleagues.
                        </div>
                    </li>
                    <li className='d-flex align-items-center'>
                        <span>
                            5 5
                        </span>
                        <div className={styles.description}>
                            # LinkedIn links included for direct contact.
                        </div>
                    </li>
                    <li className='d-flex align-items-center'>
                        <span>
                            6 6
                        </span>
                        <div className={styles.description}>
                            # I sincerely hope this proves helpful.
                        </div>
                    </li>
                    <li className='d-flex align-items-center'>
                        <span>
                        </span>
                        <div className={styles.description}>

                        </div>
                    </li>
                </ul>
            </CodeWindow>
        </div>
    );
};

export default Testimonials
