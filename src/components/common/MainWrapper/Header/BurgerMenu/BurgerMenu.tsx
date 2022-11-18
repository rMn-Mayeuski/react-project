import React, { FC } from 'react';
import burger from "../../../../../assets/burger.svg"
import styles from "./BurgerMenu.module.scss"

const BurgerMenu: FC = () => {
    return (
        <div className={styles.burger}>
            <img src={burger} alt="Burger icon" />
        </div>
    );
};

export default BurgerMenu;