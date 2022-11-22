import React, { FC } from 'react';
import nonUser from "../../../../../../assets/ArrowNoNAuth.svg"
import User from "../../../../../../assets/user.svg"
import styles from "./NoNAuthUser.module.scss"

const NoNAuthUser: FC = () => {
    return (
        <div className={styles.nonUser}>
            <div className={styles.nonUserAvatar}>
                <img src={User} alt="User" />
            </div>
            <div className={styles.nonUserLeft}>
                <p>Войти</p>
                <img src={nonUser} alt="Icon" />
            </div>
        </div>
    );
};

export default NoNAuthUser;