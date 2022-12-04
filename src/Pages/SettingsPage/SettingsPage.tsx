import React, { FC } from 'react';
import { Theme } from '../../context/ThemeContext';
import { useTheme } from '../../provider/ThemeProvider';
import styles from "./SettingsPage.module.scss"

const SettingsPage: FC = () => {

    const theme = useTheme()

    function changeTheme() {
        theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    }

    const themeTitle = theme.theme === Theme.LIGHT ? "Светлая тема" : "Тёмная тема";
    const themeSubTitle = theme.theme === Theme.LIGHT ? "Используется светлая тема" : "Используется тёмная тема";

    return (
        <div className={styles.settingsPageConteiner}>
            <div className={styles.settingsPageConteinerContent}>
                <h2 className={styles.title}>Профиль</h2>
                <div className={styles.settingsPageConteinerContentProfile}>
                    inputs...
                </div>
            </div>
            <div className={styles.settingsPageConteinerContent}>
                <h2 className={styles.title}>Пароль</h2>
                <div className={styles.settingsPageConteinerContentPassword}>
                    inputs...
                </div>
            </div>
            <div className={styles.settingsPageConteinerContent}>
                <h2 className={styles.title}>Тема</h2>
                <div className={styles.settingsPageConteinerContentTheme}>
                    <div className={styles.settingsPageConteinerContentThemeText}>
                        <p 
                            className={styles.settingsPageConteinerContentThemeTextTitle}>
                            {themeTitle}
                        </p>
                        <p 
                            className={styles.settingsPageConteinerContentThemeTextSubTitle}>
                            {themeSubTitle}
                        </p>
                    </div>
                    {/* <Switches onClick={changeTheme}/> */}
                </div>
            </div>
            <div className={styles.settingsPageConteinerBtns}>
                <button className={styles.settingsPageConteinerBtnsL} onClick={changeTheme}>
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