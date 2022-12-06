import React, { FC } from 'react';
import { useMatch, useNavigate } from 'react-router-dom';
import { favorites, home, settings, trends } from '../../../../../types/configs';
import { Routes } from '../../../../App/AppRoutes/routes';
import User from './User/User';
import NavTab from './NavTab/NavTab';
import styles from "./Navigation.module.scss"
import btnStyles from "../Navigation/NavTab/NavTab.module.scss"

const Navigation: FC = () => {

    const navigate = useNavigate()
    const handleUserNavigateHome = () => navigate(Routes.home)
    const handleUserNavigateTrends = () => navigate(Routes.trends)
    const handleUserNavigateFavorites = () => navigate(Routes.favorites)
    const handleUserNavigateSettings = () => navigate(Routes.settings)

    const isHomePage = useMatch(Routes.home)
    const isTrendsPage = useMatch(Routes.trends);
    const isFavorites = useMatch(Routes.favorites)
    const isSettingsPage = useMatch(Routes.settings)

    return (
        <div className={styles.navigation}>
            <div className={styles.navigationContent}>
                <User/>
                <NavTab 
                    icon={home} 
                    title="Главная" 
                    onClick={handleUserNavigateHome}
                    className={`${btnStyles.navTab} ${isHomePage ? btnStyles.navTabActive : ""}`}
                />
                <NavTab 
                    icon={trends} 
                    title="Популярные" 
                    onClick={handleUserNavigateTrends}
                    className={`${btnStyles.navTab} ${isTrendsPage ? btnStyles.navTabActive : ""}`}
                />
                <NavTab 
                    icon={favorites} 
                    title="Избранное" 
                    onClick={handleUserNavigateFavorites}
                    className={`${btnStyles.navTab} ${isFavorites ? btnStyles.navTabActive : ""}`}
                />
                <NavTab 
                    icon={settings} 
                    title="Настройки" 
                    onClick={handleUserNavigateSettings}
                    className={`${btnStyles.navTab} ${isSettingsPage ? btnStyles.navTabActive : ""}`}
                />
            </div>
        </div>
    );
};

export default Navigation;