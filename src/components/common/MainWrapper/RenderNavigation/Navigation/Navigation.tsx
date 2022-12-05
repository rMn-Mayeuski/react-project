import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { unsetUser } from '../../../../../store/reducer/userReducer';
import { favorites, home, logOut, settings, trends } from '../../../../../types/configs';
import { Routes } from '../../../../App/AppRoutes/routes';
import { routes } from '../../../Authorization';
import NavTab from './NavTab/NavTab';
import styles from "./Navigation.module.scss"
import User from './User/User';

const Navigation: FC = () => {

    const navigate = useNavigate()
    const handleUserNavigateHome = () => navigate(Routes.home)
    const handleUserNavigateTrends = () => navigate(Routes.trends)
    const handleUserNavigateFavorites = () => navigate(Routes.favorites)
    const handleUserNavigateSettings = () => navigate(Routes.settings)
    const handleUserNavigateSignIn = () => navigate(routes.SIGN_IN)

    return (
        <div className={styles.navigation}>
            <div className={styles.navigationContent}>
                <User/>
                <NavTab icon={home} title="Главная" onClick={handleUserNavigateHome}/>
                <NavTab icon={trends} title="Популярные" onClick={handleUserNavigateTrends}/>
                <NavTab icon={favorites} title="Избранное" onClick={handleUserNavigateFavorites}/>
                <NavTab icon={settings} title="Настройки" onClick={handleUserNavigateSettings}/>
            </div>
        </div>
    );
};

export default Navigation;