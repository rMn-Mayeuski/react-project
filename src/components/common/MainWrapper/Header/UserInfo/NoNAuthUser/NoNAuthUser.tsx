import React, { FC } from 'react';
import nonUser from "../../../../../../Assets/ArrowNoNAuth.svg"
import User from "../../../../../../Assets/user.svg"
import styles from "./NoNAuthUser.module.scss"

const NoNAuthUser: FC = () => {
    return (
        <div className={styles.nonUser}>
            <div className={styles.nonUserAvatar}>
                <img src={User} alt="User" />
            </div>
            <div className={styles.nonUserLeft}>
                <p>Sign In</p>
                <img src={nonUser} alt="Icon" />
            </div>
        </div>
    );
};

export default NoNAuthUser;