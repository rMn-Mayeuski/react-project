import React, { FC } from 'react';
import { useMenu } from '../../../provider/BurgerMenuProvider';
import { useScreenWidth } from '../../../provider/ScreenWidthProvider';
import { IWithChildren } from '../../../types/types';
import BurgerMenu from './Header/BurgerMenu/BurgerMenu';
import Header from './Header/Header';
import RenderSearch from './Header/RenderSearch/RenderSearch';
import styles from "./MainWrapper.module.scss"
import RenderNavigation from './RenderNavigation/RenderNavigation';

const MainWrapper: FC<IWithChildren> = ({children}) => {

    const menu = useMenu()

    const { screenWidth } = useScreenWidth()

    return (
        <div className={styles.wrapper}>
            <div className={styles.conteiner}>
            <Header/>
            {screenWidth < 588 ? <RenderSearch/> : ""}
                <div className={styles.content}>
                    <nav>
                        <RenderNavigation/>
                    </nav>
                    <main>
                        {children}
                    </main>
                </div>
            </div>
                <BurgerMenu
                    menuActive={menu.menuActive} 
                    handleClickAway={menu.handleClickAway}
                />
        </div>
    );
};

export default MainWrapper;