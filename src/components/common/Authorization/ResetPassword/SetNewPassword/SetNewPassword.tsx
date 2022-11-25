import { SubmitHandler, useForm } from 'react-hook-form';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import Input, { IInputData } from '../../Input/Input';
import { Routes } from '../../../../App/AppRoutes/routes';
import styles from './SetNewPassword.module.css';


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
			<h2 className={styles.titleReset}>New Password</h2>

			<Input
				inputName="Password"
				inputType="password"
				placeholder="Your password"
				keyData="password"
				register={register}
				required
			/>
			<Input
				inputName="Confirm password"
				inputType="password"
				placeholder="Confirm your password"
				keyData="password"
				register={register}
				required
			/>
			<button className={styles.buttonReset}>Set Password</button>
		</form>
	);
};
// TODO проверка,чтобы пароли совпадали 
export default SetNewPassword;
