import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import NotificationBase, { NotificationText } from '../NotificationBase/NotificationBase';
import { Routes } from '../../../App/AppRoutes/routes';
import { routes } from '../../../App/AppRoutesAuth/AppRouterAuth';
import Input, { IInputData } from '../Input/Input';
import styles from './SignIn.module.css'
import { setUser } from '../../../../store/reducer/userReducer';
import { useAppDispatch } from '../../../../store/hook/hooks';


const SignIn = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { register, handleSubmit } = useForm<IInputData>();
	const [textErrorState, setTexErrorState] = useState<NotificationText>(NotificationText.signed_in);
	const [isDisableError, setIsDisableError] = useState(false);

	const onSubmit: SubmitHandler<IInputData> = ({ email, password }) => {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				dispatch(setUser({ user }));
				navigate(Routes.home);
			})
			.catch((error) => {
				getErrorText(error.code);
				setIsDisableError(true);
			});
	};
	const getErrorText = (responseText: string) => {
		if (responseText === 'auth/wrong-password') {
			setTexErrorState(NotificationText.wrong_password);
		}
		if (responseText === 'auth/user-not-found') {
			setTexErrorState(NotificationText.email_not_found);
		}
	};

	return (

		<form onSubmit={handleSubmit(onSubmit)} className={styles.formSignIn}>
			<h2 className={styles.titleSignIn}>Вход</h2>
			{isDisableError && <NotificationBase message={textErrorState} />}
			<Input
				keyData="email"
				inputName="Адрес электронной почты"
				inputType="email"
				placeholder="Ваш адрес эл.почты"
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
			<button className={styles.buttonSignIn} type="submit">Вход</button>
			<p className={styles.noAccountText}>
				Нет аккаунта? <Link className={styles.signUpStyled} to={routes.SIGN_UP}>Зарегистрироваться</Link>
			</p>
		</form>
	);
};

export default SignIn;
