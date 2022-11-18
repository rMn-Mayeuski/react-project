import React, { FC, useState } from 'react';
import burger from "../../../../../assets/burger.svg"
import cross from "../../../../../assets/CrossBurger.svg"
import styles from "./BurgerMenu.module.scss"

const BurgerMenu: FC = () => {

    const [open, setOpen] = useState<boolean>(false);
    const handleToggleBurgerMenu = (e:any) => {
        setOpen(prevState => !prevState);
    }
    const [menuActive, setMenuActive] = useState<boolean>(false);
    const burgerMenuActive = () => setMenuActive(!menuActive)

    return (
        <div 
            className={styles.burger}
            onClick={handleToggleBurgerMenu}
            >
            {!open ?
            <img src={burger} alt="Burger icon" />
            :
            <img src={cross} alt="Burger icon" />
            }
        </div>
    );
};

export default BurgerMenu;