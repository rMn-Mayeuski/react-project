//TODO: добавить , если аккаунт не сущ; и совместить с уведомлением об отправленном сообщении.
// убрать кавычки
import { SubmitHandler, useForm } from 'react-hook-form';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../App/AppRoutesAuth/AppRouterAuth';
import Input, { IInputData } from '../Input/Input';
/*import { useState } from 'react';*/

import styles from './ResetPassword.module.css';

// отправка на почту ресетать пароль с последующим переходом на страницу логина.


const ResetPassword = () => {
	const { register, handleSubmit } = useForm<IInputData>();
	const navigate = useNavigate();
	const onSubmit: SubmitHandler<IInputData> = (data) => {
		const auth = getAuth();
		const email = data.email;
		sendPasswordResetEmail(auth, data.email)
			.then(() =>
				sessionStorage.setItem("userEmail", email)
			) ///сохранили мэйл
			.then(() => {
				navigate(routes.RESET_PASSWORD_SEND);////////////////передать страницу отправки
			});

		/*const [textErrorState, setTexErrorState] = useState<ModalText>();
		const getErrorText = (responseText: string) => {
			if (responseText === 'auth/user-not-found') {
				setTexErrorState(NotificationText.email_not_found);
			}
		};*/

	};
	return (

		<form className={styles.formReset} onSubmit={handleSubmit(onSubmit)}>
			<h2 className={styles.titleReset}>Восстановление пароля</h2>

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
	)
};

export default ResetPassword;
