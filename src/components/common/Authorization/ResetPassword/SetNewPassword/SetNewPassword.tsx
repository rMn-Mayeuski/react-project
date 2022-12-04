import { SubmitHandler, useForm } from 'react-hook-form';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import Input, { IInputData } from '../../Input/Input';
import { Routes } from '../../../../App/AppRoutes/routes';
import styles from './SetNewPassword.module.scss';


const SetNewPassword = () => {
	const { register, handleSubmit } = useForm<IInputData>();
	const navigate = useNavigate();

	const onSubmit: SubmitHandler<IInputData> = (data) => {
		const auth = getAuth();
		const email = data.email;
		const userEmail = '';
		sendPasswordResetEmail(auth, data.email)
			.then(() =>
				sessionStorage.setItem(userEmail, email))
			.then(() => {
				const mail = sessionStorage.getItem(userEmail);
				navigate(Routes.home);

			});
		//проверка, чтоб почта существовала??хз
	};
	return (
		<form className={styles.formReset} onSubmit={handleSubmit(onSubmit)}>
			<h2 className={styles.titleReset}>Новый пароль</h2>

			<Input
				inputName="Пароль"
				inputType="password"
				placeholder="Ваш пароль"
				keyData="password"
				register={register}
				required
			/>
			<Input
				inputName="Подтвердите новый пароль"
				inputType="password"
				placeholder="Подтвердите ваш пароль"
				keyData="password"
				register={register}
				required
			/>
			<button className={styles.buttonReset}>Изменить пароль</button>
		</form>
	);
};
// TODO проверка,чтобы пароли совпадали 
export default SetNewPassword;
