import { createContext } from "react";
import { IBurgerMenuCondition } from "../types/types";

export const MenuContext = createContext<IBurgerMenuCondition>({
    menuActive: false,
    open: false,
    handleClickAway: () => {},
    handleToggleBurgerMenu: () => {},
})