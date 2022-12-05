import React, { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useSelector } from 'react-redux';
import InputField, { IInputData } from '../Input/Input';
import Switcher from '../../Switch/Switch';
import { Theme } from '../../../../context/ThemeContext';
import { useTheme } from '../../../../provider/ThemeProvider';

import styles from "./SettingsPage.module.scss";
/////////
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store/hook/hooks';
import { setUser } from '../../../../store/reducer/userReducer';
import { getAuth, onAuthStateChanged, updateEmail, updatePassword, updateProfile } from 'firebase/auth';
import { getUser } from '../../../../store';


const SettingsPage: FC = () => {
	const currentUserToken = localStorage.getItem("token");
	const currentUserEmail = localStorage.getItem("email");
	const currentUserName = localStorage.getItem("name");

	console.log(localStorage)
	/*const user = useAppSelector(getUser);*/

	const dispatch = useAppDispatch();

	const [isDisable, setIsDisable] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IInputData>();

	//////THEMA	
	const theme = useTheme()
	function changeTheme() {
		theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
	}
	const themeTitle = theme.theme === Theme.LIGHT ? "Светлая тема" : "Тёмная тема";
	const themeSubTitle = theme.theme === Theme.LIGHT ? "Используется светлая тема" : "Используется тёмная тема";
	///////////////
	const onSubmit: SubmitHandler<IInputData> = (data) => {
		const auth = getAuth();
		const user = auth.currentUser;
		let newPassword = data.password;
		let newName = data.name;
		let newEmail = data.email;
		if (user !== null) {
			updatePassword(user, newPassword)
				.then(function () {
					console.log()
				})
				.catch(function (error) {
					// An error happened.
				});
			updateEmail(user, newEmail).then(() => {
				console.log()
			})
			updateProfile(user, { displayName: newName })

				.then(() => {
					window.location.reload();
				})

		};

	}


	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.settingsPageConteiner}>
			{!!currentUserToken ?
				<React.Fragment>
					<div className={styles.settingsPageConteinerContent}>
						<h2 className={styles.title}>Профиль</h2>
						<div className={styles.settingsPageConteinerContentProfile}>
							<InputField
								register={register}
								keyData="name"
								inputName='Имя'
								placeholder={currentUserName}
								inputType="text"
								value="Ваше имя"
							/>
							<InputField
								register={register}
								keyData="email"
								inputName='Адрес эл.почты'
								placeholder={currentUserEmail}
								inputType="email"
								value="Ваш адрес эл.почты"
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
								inputType="password"
								required
							/>
							<div className={styles.settingsPageConteinerContentPasswordLeft}>
								<InputField
									inputName='Новый пароль'
									keyData="password_new"
									placeholder='Ваш новый пароль'
									register={register}
									inputType="password"
								//required
								/>
								<InputField
									inputName='Подтвердите новый пароль'
									keyData="password_confirm"
									placeholder='Подтвердите ваш новый пароль'
									inputType="password"
									register={register}
								//required
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
					<Switcher onClick={changeTheme} />
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
		</form>
	);
};

export default SettingsPage;