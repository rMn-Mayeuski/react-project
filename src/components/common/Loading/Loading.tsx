import React, { FC } from 'react';
import styles from "./Loading.module.scss"

const Loading: FC = () => {
    return (
        <div className={styles.loader}>
            {/*<div className={styles.loader}></div>*/}
            {/*<p>Загрузка...</p>*/}
        </div>
    );
};

export default Loading;