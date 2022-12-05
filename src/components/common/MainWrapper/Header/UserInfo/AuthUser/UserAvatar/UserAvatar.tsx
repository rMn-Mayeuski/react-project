import React, { FC } from 'react';
import styles from "./UserAvatar.module.scss";

interface IAvatarProps {
    displayName: any
}

const UserAvatar: FC<IAvatarProps> = ({  displayName = "" }) => {
    const transformUserNameToAvatar = () => {
        return displayName.split(" ").map((str:string) => str.charAt(0).toUpperCase()).join("")
    }
    return (
        <div className={styles.userAvatar}>
            <span>{transformUserNameToAvatar()}</span>
        </div>
    );
};

export default UserAvatar;