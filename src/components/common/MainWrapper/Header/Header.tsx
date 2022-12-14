import React, { FC, useEffect, useState } from 'react';
import UserInfo from './UserInfo/UserInfo';
import BurgerBTN from './BurgerBTN/BurgerBTN';
import RenderSearch from './RenderSearch/RenderSearch';
import { NavLink } from 'react-router-dom';
import logoDark from "../../../../assets/icons/Logo.svg"
import logoLight from "../../../../assets/icons/LogoLight.svg"
import { useMenu } from '../../../../provider/BurgerMenuProvider';
import { useScreenWidth } from '../../../../provider/ScreenWidthProvider';
import { useTheme } from '../../../../provider/ThemeProvider';
import { Theme } from '../../../../context/ThemeContext';
import styles from "./Header.module.scss"

const Header: FC = () => {

    const menu = useMenu()

    const theme = useTheme()

    const logo = theme.theme === Theme.LIGHT ? logoLight : logoDark;

    const { screenWidth } = useScreenWidth()

    const stylesHeader = !!menu.open && screenWidth < 517 ? styles.headerOpen : styles.header;

    return (
        <header className={stylesHeader}>
            {!!menu.open && screenWidth > 588 
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