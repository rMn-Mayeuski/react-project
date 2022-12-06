import React, { FC, MouseEventHandler, useState } from 'react';
import UserAvatar from './UserAvatar/UserAvatar';
import arrow from "../../../../../../assets/icons/ArrowAuth.svg"
import styles from "./AuthUser.module.scss";
import UserMenu from './UserMenu/UserMenu';

const AuthUser: FC = () => {

    const currentUserName = localStorage.getItem("name");

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
            <UserAvatar displayName={currentUserName}/>
            <div className={styles.authUserLeft}>
                <p>{currentUserName}</p>
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