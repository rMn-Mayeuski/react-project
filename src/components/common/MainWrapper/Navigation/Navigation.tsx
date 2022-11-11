import React, { FC } from 'react';
import home from "../../../../Assets/Home.svg"
import trends from "../../../../Assets/Trends.svg"
import favorites from "../../../../Assets/Favorites.svg"
import setting from "../../../../Assets/Settings.svg"
import styles from "./Navigation.module.scss"
import { Link, NavLink } from 'react-router-dom';

const Navigation: FC = () => {
    return (
        <div className={styles.navigation}>
            <ul className={styles.navigationContent}>
                <li>
                    <img src={home} alt="Home ico" />
                    <p>Home</p>
                </li>
                <li>
                    <img src={trends} alt="Trends ico" />
                    <p>Trends</p>
                </li>
                <li>
                    <img src={favorites} alt="Favorites ico" />
                    <p>Favorites</p>
                </li>
                <li>
                    <img src={setting} alt="Settings ico" />
                    <p>Settings</p>
                </li>
            </ul>
        <p>© All Rights Reserved</p>
        </div>
    );
};

export default Navigation;