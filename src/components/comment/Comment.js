import React from 'react'

import styles from './Comment.module.scss'

const Comment = ({ children, className, type, list }) => {
    return (
        <div className={`${styles.wrapper} ${className}`}>
            {type === "js" ? <span>// </span> : type === "css" ? <span>/** <br /></span> : <span>{"<!-- "}</span>}
            <span className={type == "css" && styles.css}>
                {list ? (
                    <ul>
                        {list.map((listItem) => (
                            <li key={listItem.id}>
                                {type === "js" ? <span>//</span> : type === "css" ? <span>* </span> : <span>{/* Other Type */}</span>}
                                {listItem.label}
                            </li>
                        ))}
                    </ul>
                ) : (
                    children
                )}

                {type === "js" ? <span></span> : type === "css" ? <span> */</span> : <span>{" -->"}</span>}
            </span>
        </div>
    );
};

export default Comment
