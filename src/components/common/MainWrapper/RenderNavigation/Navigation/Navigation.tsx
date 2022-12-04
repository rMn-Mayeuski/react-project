import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { favorites, home, settings, trends } from '../../../../../types/configs';
import { Routes } from '../../../../App/AppRoutes/routes';
import styles from "./Navigation.module.scss"
import NavTab from './NavTab/NavTab';

const Navigation: FC = () => {

    const navigate = useNavigate()
    const handleUserNavigateHome = () => navigate(Routes.home)
    const handleUserNavigateTrends = () => navigate(Routes.trends)
    const handleUserNavigateFavorites = () => navigate(Routes.favorites)
    const handleUserNavigateSettings = () => navigate(Routes.settings)

    return (
        <div className={styles.navigation}>
            <div className={styles.navigationContent}>
                <NavTab icon={home} title="Главная" onClick={handleUserNavigateHome}/>
                <NavTab icon={trends} title="Популярные" onClick={handleUserNavigateTrends}/>
                <NavTab icon={favorites} title="Избранное" onClick={handleUserNavigateFavorites}/>
                <NavTab icon={settings} title="Настройки" onClick={handleUserNavigateSettings}/>
            </div>
        </div>
    );
};

export default Navigation;