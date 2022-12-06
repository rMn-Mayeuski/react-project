import React, { FC, Suspense } from 'react';
import { useMenu } from '../../../provider/BurgerMenuProvider';
import { useScreenWidth } from '../../../provider/ScreenWidthProvider';
import { useFilter } from '../../../provider/SearchFilterProvider';
import { IWithChildren } from '../../../types/types';
import GoTopButton from '../GoTopButton/GoTopButton';
import BurgerMenu from './Header/BurgerMenu/BurgerMenu';
import Header from './Header/Header';
import RenderSearch from './Header/RenderSearch/RenderSearch';
import RenderSearchFilter from './Header/RenderSearchFilter/RenderSearchFilter';
import styles from "./MainWrapper.module.scss"
import Navigation from './RenderNavigation/Navigation/Navigation';

const MainWrapper: FC<IWithChildren> = ({children}) => {

    const filter = useFilter()
    const menu = useMenu()
    const { screenWidth } = useScreenWidth()

    const conteinerStyles = filter?.filterActive ? styles.conteinerActive : styles.conteiner;

    return (
        <div className={styles.wrapper}>
            <div className={conteinerStyles}>
            <Header/>
            {screenWidth < 588 ? <RenderSearch/> : ""}
                <div className={styles.content}>
                    <nav>
                        <Navigation/>
                    </nav>
                    <main>
                        {children}
                    </main>
                </div>
                <GoTopButton/>
                <footer className={styles.conteinerFooterText}>
                    © Все права защищены
                </footer>
            </div>
                <BurgerMenu
                    menuActive={menu.menuActive} 
                    handleClickAway={menu.handleClickAway}
                />
                <RenderSearchFilter/>
        </div>
    );
};

export default MainWrapper;