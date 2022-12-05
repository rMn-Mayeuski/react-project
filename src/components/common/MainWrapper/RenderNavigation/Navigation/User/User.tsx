import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NonAuthUser from "../../../../../../assets/icons/user.svg"
import { unsetUser } from '../../../../../../store/reducer/userReducer';
import { routes } from '../../../../Authorization';
import UserAvatar from '../../../Header/UserInfo/AuthUser/UserAvatar/UserAvatar';
import styles from "./User.module.scss"

const User: FC = () => {

    const { user } = useSelector((state: any) => state.user)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUserNavigateSignIn = () => navigate(routes.SIGN_IN)

    const handleLogOut = () => {
        dispatch(unsetUser());
        navigate(routes.SIGN_IN);
    }

    return (
            <>
                {!!user.accessToken ? 
                    <div onClick={handleLogOut} className={styles.authUser}>
                        <UserAvatar displayName={user?.displayName}/>
                        <p>Выйти</p>
                    </div>
                        :
                    <div onClick={handleUserNavigateSignIn} className={styles.authUser}>
                        <div className={styles.authUserNonAvatar}>
                            <img src={NonAuthUser} alt="Icon" />
                        </div>
                        <p>Войти</p>
                    </div>
                }
            </>
    );
};

export default User;