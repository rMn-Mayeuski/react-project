import { SubmitHandler, useForm } from 'react-hook-form';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../App/AppRoutesAuth/AppRouterAuth';
import Input, { IInputData } from '../Input/Input';

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

		//проверка, чтоб почта существовала??хз
	};
	return (
		<form className={styles.formReset} onSubmit={handleSubmit(onSubmit)}>
			<h2 className={styles.titleReset}>Reset Password</h2>

			<Input
				inputName="Email"
				inputType="email"
				placeholder="Your email"
				keyData="email"
				register={register}
				required
			/>
			<button className={styles.buttonReset}>Reset</button>
		</form>

	);
};


export default ResetPassword;
