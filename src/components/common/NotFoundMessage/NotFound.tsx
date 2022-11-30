import React, { FC } from 'react';
import notFound from "../../../assets/Group 150.png"
import styles from "./NotFound.module.scss"

const NotFound: FC = () => {
    return (
        <div className={styles.notFound}>
            <img src={notFound} alt="NotFound" />
            <h2>
                По вашему запросу ничего не найдено.
                Проверьте корректность введенных данных.
            </h2>
        </div>
    );
};

export default NotFound;