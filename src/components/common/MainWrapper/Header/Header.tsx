import React, { FC } from 'react';
import styles from "./Header.module.scss"
import logo from "../../../../assets/Logo.svg"
import { Link, NavLink } from 'react-router-dom';
import Search from './Search/Search';
import UserInfo from './UserInfo/UserInfo';
import BurgerMenu from './BurgerMenu/BurgerMenu';

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Logo" />
            <Search/>
            <UserInfo/>
            <BurgerMenu/>
        </header>
    );
};

export default Header;