import React, { FC } from 'react';
import Switches from '../../components/common/Switch/Switch';
import styles from "./SettingsPage.module.scss"

const SettingsPage: FC = () => {
    return (
        <div className={styles.settingsPageConteiner}>
            <div className={styles.settingsPageConteinerContent}>
                <h2 className={styles.title}>Профиль</h2>
                <div>
                    inputs...
                </div>
            </div>
            <div className={styles.settingsPageConteinerContent}>
                <h2 className={styles.title}>Пароль</h2>
                <div>
                    inputs...
                </div>
            </div>
            <div className={styles.settingsPageConteinerContent}>
                <h2 className={styles.title}>Тема</h2>
                <div>
                    <Switches/>
                </div>
            </div>
            <div className={styles.settingsPageConteinerBtns}>
                <button className={styles.settingsPageConteinerBtnsL}>
                    Отмена
                </button>
                <button className={styles.settingsPageConteinerBtnsR}>
                    Сохранить
                </button>
            </div>
        </div>
    );
};

export default SettingsPage;