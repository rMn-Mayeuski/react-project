import React, { FC } from 'react';
import { IBurgerMenuСondition } from '../../../../../types/types';
import Navigation from '../../RenderNavigation/Navigation/Navigation';
import AuthUser from '../UserInfo/AuthUser/AuthUser';
import styles from "./BurgerMenu.module.scss"

const BurgerMenu: FC<IBurgerMenuСondition> = ({
    menuActive = false,
    handleClickAway,
}
) => {

    const handlerStylesBurgerMenu = menuActive ? styles.burgerMenuActive : styles.burgerMenu;

    return (
        <div 
            className={handlerStylesBurgerMenu}
            onClick={handleClickAway}
        >   
            <Navigation/>
        </div>
    );
};

export default BurgerMenu;