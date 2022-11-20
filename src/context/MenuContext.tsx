import { createContext } from "react";
import { IBurgerMenuСondition } from "../types/types";


export const MenuContext = createContext<IBurgerMenuСondition>({
    menuActive: false,
    open: false,
    handleClickAway: () => {},
    handleToggleBurgerMenu: () => {},
})