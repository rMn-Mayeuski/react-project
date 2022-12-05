import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { routes } from '../../../App/AppRoutesAuth/AppRouterAuth';
import { Routes } from '../../../App/AppRoutes/routes';

import styles from './SignInNewPass.module.scss';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Input, { IInputData } from '../Input/Input';
import { useState } from 'react';


const SignIn = () => {
	const navigate = useNavigate();
	const { register, handleSubmit } = useForm<IInputData>();
	const [isDisableError, setIsDisableError] = useState(false);

	const onSubmit: SubmitHandler<IInputData> = ({ email, password }) => {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				navigate(Routes.home);
			})
			.catch((error) => {
				setIsDisableError(true);
			});
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.formSignIn}>
			<h2 className={styles.titleSignIn}>Войти</h2>

			<p className={styles.changedPassword}>Ваш пароль изменен !</p>
			<Input
				keyData="email"
				inputName="Email"
				inputType="email"
				placeholder="Ваш Email"
				register={register}
				required
			/>
			<Input
				keyData="password"
				inputName="Пароль"
				inputType="password"
				placeholder="Ваш пароль"
				register={register}
				required
			/>
			<Link className={styles.forgotPassword} to={routes.RESET_PASSWORD}>Забыли пароль?</Link>
			<button className={styles.buttonSignIn} type="submit">Войти</button>
			<p className={styles.noAccountText}>
				Нет аккаунта? <Link className={styles.signUpStyled} to={routes.SIGN_UP}>Регистрация</Link>
			</p>
		</form>
	);
};

export default SignIn;
