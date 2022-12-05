import React, { FC } from 'react';
import styles from "./Loading.module.scss"

const Loading: FC = () => {
    return (
        <div className={styles.loader}>
        </div>
    );
};

export default Loading;