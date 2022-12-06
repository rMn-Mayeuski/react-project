import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { routes } from '../../../App/AppRoutesAuth/AppRouterAuth';
import Input, { IInputData } from '../Input/Input';
import { NotificationText } from '../NotificationBase/NotificationBase';

import styles from './ResetPassword.module.scss';
import NotificationBase from '../NotificationBase/NotificationBase';

const ResetPassword = () => {
	const { register, handleSubmit } = useForm<IInputData>();
	const navigate = useNavigate();
	const [isDisable, setIsDisable] = useState(false); // для изменения вида модалки(обычная форма/ форма с отправленным email)
	const [isDisableError, setIsDisableError] = useState(false);//
	const [textErrorState, setTexErrorState] = useState();// если user не существует
	
	const getErrorText = (responseText: string) => {
		if (responseText === 'auth/user-not-found') {
			setTexErrorState(NotificationText.email_not_found);
		}
	};
	
	const currentUserEmail = sessionStorage.getItem("userEmail"); 
	const sendEmail = `На указанную эл.почту ${currentUserEmail} отправлена ссылка для восстановления пароля!`
	
	const onSubmit: SubmitHandler<IInputData> = (data) => {
		const auth = getAuth();
		const email = data.email; //получили введенный email пользователя, чтобы прокинуть его в текст Notification
		sendPasswordResetEmail(auth, data.email)
			.then(() => {
				setIsDisable(true);
				setTimeout(() => {
					setIsDisable(false);
					navigate(routes.SIGN_IN);
				}, 5000);
			})
			.then(() =>
				sessionStorage.setItem("userEmail", email)
			) 
	};
	
	return (
		<>
			{isDisable ? (
				<form className={styles.formReset}>
					<h2 className={styles.titleReset}>Восстановление пароля</h2>
					<p className={styles.receivePassToEmail}> {sendEmail}</p>
					<Input
						inputName="Email"
						inputType="email"
						placeholder="Ваш адрес эл.почты"
						keyData="email"
						register={register}
						required
					/>
					<button className={styles.buttonReset}>Reset</button>
				</form>
			) : (
				<form className={styles.formReset} onSubmit={handleSubmit(onSubmit)}>
					<h2 className={styles.titleReset}>Восстановление пароля</h2>
					{isDisableError && <NotificationBase message={textErrorState} />}
					<Input
						inputName="Адрес электронной почты"
						inputType="email"
						placeholder="Ваш адрес эл.почты"
						keyData="email"
						register={register}
						required
					/>
					<button className={styles.buttonReset}>Восстановить</button>
				</form>
			)}
		</>)
};

export default ResetPassword;
