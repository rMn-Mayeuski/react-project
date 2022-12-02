//TODO: проверка, чтоб пароли совпадали


import { SubmitHandler, useForm } from 'react-hook-form';

import { Link, useNavigate } from 'react-router-dom';
import { routes } from '../../../App/AppRoutesAuth/AppRouterAuth';
import styles from './SignUp.module.css';
import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from 'firebase/auth';
import { useAppDispatch } from '../../../../store/hook/hooks';
import { setUser } from '../../../../store/reducer/userReducer';
import NotificationBase, { NotificationText } from '../NotificationBase/NotificationBase';
import Input, { IInputData } from '../Input/Input';
import { useState } from 'react';


const SignUp = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { register, handleSubmit } = useForm<IInputData>();

	const [isDisable, setIsDisable] = useState(false);
	const [isDisableError, setIsDisableError] = useState(false);
	const [textErrorState, setTexErrorState] = useState<NotificationText>(NotificationText.signed_up);

	const getErrorText = (responseText: string) => {
		if (responseText === 'auth/email-already-in-use') {
			setTexErrorState(NotificationText.error_signed_up);
		}
	};
	const onSubmit: SubmitHandler<IInputData> = (data) => {
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, data.email, data.password)
			.then(({ user }) => {
				updateProfile(user, {
					displayName: data.name,
					photoURL: '#',
				})
					.then(() => {
						setIsDisable(true);
						dispatch(setUser(user));
						setTimeout(() => {
							setIsDisable(false);
							navigate(routes.SIGN_IN);
						}, 3000);
					})
					.catch((error) => {
						console.log(error)
					});
				/*	sendEmailVerification(user);// не работает*/

			})

			.catch((error) => {
				setIsDisableError(true);
				getErrorText(error.code);
			});

	};

	return (
		<>
			{isDisable ? (
				<NotificationBase message={NotificationText.signed_up} />
			) : (
				<form className={styles.formSignUp} onSubmit={handleSubmit(onSubmit)}>
					<h2 className={styles.titleSignUp}>Регистрация</h2>
					{isDisableError && <NotificationBase message={textErrorState} />}
					<Input
						keyData="name"
						inputName="Имя"
						inputType="text"
						placeholder="Ваше имя"
						register={register}
						required
					/>
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
					<Input
						keyData="password_confirm"
						inputName="Подтвердите пароль"
						inputType="password"
						placeholder="Подтвердите пароль"
						register={register}
						required
					/>
					<button className={styles.buttonSignUp}>Зарегистрироваться</button>
					<p className={styles.alreadyHaveAccount}>
						Уже есть аккаунт?{' '}
						<Link className={styles.signInLink} to={routes.SIGN_IN}>
							Войти
						</Link>
					</p>
				</form>

			)}</>
	);
};

export default SignUp;
