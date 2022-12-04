import React, { FC, MouseEventHandler, useState } from 'react';
import { useSelector } from 'react-redux';
import UserAvatar from './UserAvatar/UserAvatar';
import arrow from "../../../../../../assets/ArrowAuth.svg"
import styles from "./AuthUser.module.scss";
import UserMenu from './UserMenu/UserMenu';

const AuthUser: FC = () => {

    const { user } = useSelector((state: any) => state.user)

    console.log(user);

    const [menuActive, setMenuActive] = useState(false);

    const burgerMenuActive = () => setMenuActive(!menuActive)

    const handleClickAway: MouseEventHandler = (event) => {
        if (event.target === event.currentTarget) {
            burgerMenuActive()
        }
    }

    return (
        <div 
            className={styles.authUser} 
            onClick={burgerMenuActive}
        >
            <UserAvatar displayName={user?.displayName}/>
            <div className={styles.authUserLeft}>
                <p>{user?.displayName}</p>
                <img src={arrow} alt="Icon" />
            </div>
            <UserMenu 
                menu={menuActive} 
                onClick={handleClickAway}
            />
        </div>
    );
};

export default AuthUser;