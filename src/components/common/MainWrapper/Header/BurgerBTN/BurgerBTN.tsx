import React, { FC, MouseEventHandler, useState } from 'react';
import burger from "../../../../../assets/icons/burger.svg"
import cross from "../../../../../assets/icons/CrossBurger.svg"
import { useMenu } from '../../../../../provider/BurgerMenuProvider';
import styles from "./BurgerBTN.module.scss"

const BurgerBTN: FC = () => {

    const menu = useMenu()

    return (
        <>
            <div 
            className={styles.burger}
            onClick={menu.handleToggleBurgerMenu}
            >
            {!menu.open ?
            <img src={burger} alt="Burger icon" />
            :
            <img src={cross} alt="Burger icon" />
            }
            </div>
        </>
    );
};

export default BurgerBTN;