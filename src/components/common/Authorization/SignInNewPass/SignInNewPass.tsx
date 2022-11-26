import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { routes } from '../../../App/AppRoutesAuth/AppRouterAuth';
import { Routes } from '../../../App/AppRoutes/routes';

import styles from './SignInNewPass.module.css';

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
			<h2 className={styles.titleSignIn}>Sign In</h2>

			<p className={styles.changedPassword}>Your password has been changed !</p>
			<Input
				keyData="email"
				inputName="Email"
				inputType="email"
				placeholder="Your email"
				register={register}
				required
			/>
			<Input
				keyData="password"
				inputName="Password"
				inputType="password"
				placeholder="Your password"
				register={register}
				required
			/>
			<Link className={styles.forgotPassword} to={routes.RESET_PASSWORD}>Forgot password?</Link>
			<button className={styles.buttonSignIn} type="submit">Sign in</button>
			<p className={styles.noAccountText}>
				Don’t have an account? <Link className={styles.signUpStyled} to={routes.SIGN_UP}>Sign Up</Link>
			</p>
		</form>
	);
};

export default SignIn;
