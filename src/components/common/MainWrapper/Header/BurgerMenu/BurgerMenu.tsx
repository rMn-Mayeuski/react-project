import React, { FC } from 'react';
import { IBurgerMenuСondition } from '../../../../../types/types';
import RenderNavigation from '../../RenderNavigation/RenderNavigation';
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
            <RenderNavigation/>
        </div>
    );
};

export default BurgerMenu;