import React, { FC } from 'react';
import { INavTabProps } from '../../../../../../../../types/types';
import styles from "./Button.module.scss"

const Button: FC<INavTabProps> = ({onClick, title, id, activeTabItem}) => {
    return (
        <button
            type='button'
            onClick={onClick}
            className={`${styles.button} ${activeTabItem === id ? styles.buttonActive : ""}`}
        >
            <p>{title}</p>    
        </button>
    );
};

export default Button;