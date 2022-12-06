import React, { FC } from 'react';
import { IBurgerMenuCondition } from '../../../../../types/types';
import Navigation from '../../RenderNavigation/Navigation/Navigation';
import styles from "./BurgerMenu.module.scss"

const BurgerMenu: FC<IBurgerMenuCondition> = ({
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