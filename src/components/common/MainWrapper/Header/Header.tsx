import React, { FC, useEffect, useState } from 'react';
import UserInfo from './UserInfo/UserInfo';
import BurgerBTN from './BurgerBTN/BurgerBTN';
import RenderSearch from './RenderSearch/RenderSearch';
import { NavLink } from 'react-router-dom';
import logo from "../../../../assets/Logo.svg"
import { useMenu } from '../../../../provider/BurgerMenuProvider';
import styles from "./Header.module.scss"
import { useScreenWidth } from '../../../../provider/ScreenWidthProvider';

const Header: FC = () => {

    const menu = useMenu()

    const { screenWidth } = useScreenWidth()

    const stylesHeader = !!menu.open && screenWidth < 467 ? styles.headerOpen : styles.header;

    return (
        <header className={stylesHeader}>
            {menu.open && screenWidth > 588 
                ? 
                "" 
                : 
            <NavLink to={"/home"}>
                <img src={logo} alt="Logo" />
            </NavLink>
            }
            {screenWidth < 588 
                ? 
                "" 
                : 
            <RenderSearch/>
            }
            <UserInfo/>
            <BurgerBTN/>
        </header>
    );
};

export default Header;