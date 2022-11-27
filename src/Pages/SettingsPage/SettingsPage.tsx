import React, { FC } from 'react';
import Switches from '../../components/common/Switch/Switch';
import { Theme } from '../../context/ThemeContext';
import { useTheme } from '../../provider/ThemeProvider';
import styles from "./SettingsPage.module.scss"

const SettingsPage: FC = () => {

    const theme = useTheme()

    function changeTheme() {
        theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    }

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
                    <Switches onClick={changeTheme}/>
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