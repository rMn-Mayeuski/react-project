import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { routes } from '../../router/AppRouter';
import Input, { IInputData } from '../Input/Input';
import styles from './SignIn.module.css'


const SignIn = () => {
	const navigate = useNavigate();
	const { register, handleSubmit } = useForm<IInputData>();
	const [isDisableError, setIsDisableError] = useState(false);

	const onSubmit: SubmitHandler<IInputData> = ({ email, password }) => {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				navigate(routes.START_PAGE);
			})
			.catch((error) => {
				setIsDisableError(true);
			});
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.formSignIn}>
			<h2 className={styles.titleSignIn}>Sign In</h2>
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
