import React, { FC } from 'react';
import { INavTabProps } from '../../../../../../types/types';
import styles from "./NavTab.module.scss"

const NavTab: FC<INavTabProps> = ({
    title,
    icon, 
    onClick, 
}) => {
    return (
        <button
            type='button' 
            onClick={onClick}
            className={styles.navTab}
        >
            <>{icon}</>
            <p>{title}</p>    
        </button>
    );
};

export default NavTab;