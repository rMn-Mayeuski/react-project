import React, { FC } from 'react';
import { INavTabProps } from '../../../../../../types/types';
import styles from "./NavTab.module.scss"

const NavTab: FC<INavTabProps> = ({
    id, 
    activeTabItem, 
    title= "",
    icon, 
    onClick, 
}) => {
    return (
        <button 
            onClick={onClick}
            className={styles.navTab}
        >
            <img src={icon} alt="Tab icon" />
            <p>{title}</p>    
        </button>
    );
};

export default NavTab;