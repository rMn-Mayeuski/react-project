import { MouseEventHandler, useContext, useState } from "react";
import { MenuContext } from "../context/MenuContext";
import { IWithChildren } from "../types/types";

export const useMenu = () => useContext(MenuContext)

export const BurgerMenuProvider = ({ children, ...props}: IWithChildren) => {
    const [menuActive, setMenuActive] = useState<boolean>(false);

    const burgerMenuActive = () => {
        setMenuActive(!menuActive)
    }
    const handleClickAway: MouseEventHandler = (event) => {
        if (event.target === event.currentTarget) {
            burgerMenuActive()
        }
    }

    const [open, setOpen] = useState<boolean>(false);
    const handleToggleBurgerMenu = (e:any) => {
        setOpen(prevState => !prevState);
        burgerMenuActive()
    }

    return (
        <MenuContext.Provider value={{
            menuActive,
            handleClickAway,
            handleToggleBurgerMenu,
            open,
        }}
        {...props}
        >
            {children}
        </MenuContext.Provider>
    )
}