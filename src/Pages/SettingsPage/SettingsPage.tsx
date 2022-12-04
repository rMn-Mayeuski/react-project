import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import InputField, { IInputData } from '../../components/common/Authorization/Input/Input';
import { Theme } from '../../context/ThemeContext';
import { useTheme } from '../../provider/ThemeProvider';
import styles from "./SettingsPage.module.scss"

const SettingsPage: FC = () => {

    const { user } = useSelector((state: any) => state.user)
    const { register, handleSubmit } = useForm<IInputData>();
    const theme = useTheme()

    function changeTheme() {
        theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    }

    const themeTitle = theme.theme === Theme.LIGHT ? "Светлая тема" : "Тёмная тема";
    const themeSubTitle = theme.theme === Theme.LIGHT ? "Используется светлая тема" : "Используется тёмная тема";

    return (
        <div className={styles.settingsPageConteiner}>
            {!!user.accessToken ? 
            <React.Fragment>
                <div className={styles.settingsPageConteinerContent}>
                <h2 className={styles.title}>Профиль</h2>
                <div className={styles.settingsPageConteinerContentProfile}>
                    <InputField 
                        register={register} 
                        keyData="name" 
                        inputName='Имя'
                        placeholder={user?.displayName}
                        disabled
                    />
                    <InputField 
                        register={register} 
                        keyData="email" 
                        inputName='Email'
                        placeholder={user?.email}
                        disabled
                    />
                </div>
            </div>
            <div className={styles.settingsPageConteinerContent}>
                <h2 className={styles.title}>Пароль</h2>
                <div className={styles.settingsPageConteinerContentPassword}>
                    <InputField
                        inputName='Пароль'
                        keyData="password"
                        placeholder='Ваш текущий пароль'
                        register={register} 
                    />
                    <div className={styles.settingsPageConteinerContentPasswordLeft}>
                        <InputField
                            inputName='Новый пароль'
                            keyData="password_new"
                            placeholder='Ваш новый пароль'
                            register={register} 
                        />
                        <InputField
                            inputName='Подтвердите новый пароль'
                            keyData="password_confirm"
                            placeholder='Подтвердите ваш новый пароль'
                            register={register} 
                        />
                    </div>
                </div>
            </div>
            </React.Fragment>
                : 
                ""
            }
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