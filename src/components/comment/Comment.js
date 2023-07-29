import React from 'react'

import styles from './Comment.module.scss'

const Comment = ({ children, className, type, list }) => {
    return (
        <div className={`${styles.wrapper} ${className}`}>
            <span className='starting-tag'>
                {type === "js" ? <span>// </span> : type === "css" ? <span>/** <br /></span> : type === "html" ? <span>{"<!-- "}</span> : ''}
            </span>
            <span className={type == "css" && styles.css}>
                {list ? (
                    <ul>
                        {list.map((listItem) => (
                            <li key={listItem.id}>
                                <span className='list-tag'>
                                    {type === "js" ? <span>//</span> : type === "css" ? <span>* </span> : <span>{/* Other Type */}</span>}
                                </span>
                                {listItem.label}
                            </li>
                        ))}
                    </ul>
                ) : (
                    children
                )}
                <span className='ending-tag'>
                    {type === "js" ? <span></span> : type === "css" ? <span> */</span> : type === "html" ? <span>{" -->"}</span> : '' }
                </span>
            </span>
        </div>
    );
};

export default Comment
