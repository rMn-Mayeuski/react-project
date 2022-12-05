import React, { FC, MouseEventHandler } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { unsetUser } from '../../../../../../../store/reducer/userReducer';
import { Routes, routes } from '../../../../../Authorization';
import styles from "./UserMenu.module.scss"

interface IMenuСondition {
    menu: boolean;
    onClick?: MouseEventHandler;
}

const UserMenu: FC<IMenuСondition> = ({menu = false, onClick}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user } = useSelector((state: any) => state.user)

    const handlerStylesUserMenu = menu ? styles.userMenuActive : styles.userMenu;

    const handleLogOut = () => {
        dispatch(unsetUser());
        navigate(routes.SIGN_IN);
    }

    const openSettings = () => {
        navigate(Routes.settings)
    }

    return (
        <div className={handlerStylesUserMenu} onClick={onClick}>
            <p onClick={openSettings}>Редактировать профиль</p>
            <p onClick={handleLogOut}>Выйти</p>
        </div>
    );
};

export default UserMenu;