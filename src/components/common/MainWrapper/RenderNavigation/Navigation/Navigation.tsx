import React, { FC } from 'react';
import { ITabsProps } from '../../../../../types/types';
import styles from "./Navigation.module.scss"
import NavTab from './NavTab/NavTab';

const Navigation: FC<ITabsProps> = ({
    config = [],
    activeTabItem = 1,
    onClick = () => {},
}) => {
    return (
        <div className={styles.navigation}>
            <div className={styles.navigationContent}>
                {config.map(tab => (
                    <NavTab
                        key={tab.id}
                        id={tab.id}
                        title={tab.title}
                        icon={tab.icon}
                        onClick={() => onClick(tab.id)}
                        activeTabItem={activeTabItem}
                    />
                ))}
            </div>
        <p>© All Rights Reserved</p>
        </div>
    );
};

export default Navigation;