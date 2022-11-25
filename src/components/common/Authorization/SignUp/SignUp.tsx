import { SubmitHandler, useForm } from 'react-hook-form';

import { Link, useNavigate } from 'react-router-dom';
import { Routes } from '../../../App/AppRoutes/routes';
import { routes } from '../../../App/AppRoutesAuth/AppRouterAuth';
import styles from './SignUp.module.css';
import {
	getAuth,
	createUserWithEmailAndPassword,
	updateProfile,
	sendEmailVerification,
} from 'firebase/auth';


import Input, { IInputData } from '../Input/Input';
import { useState } from 'react';




const SignUp = () => {
	const navigate = useNavigate();

	const { register, handleSubmit } = useForm<IInputData>();

	const [isDisable, setIsDisable] = useState(false);
	const [isDisableError, setIsDisableError] = useState(false);




	const onSubmit: SubmitHandler<IInputData> = (data) => {
		const auth = getAuth();

		createUserWithEmailAndPassword(auth, data.email, data.password)
			.then(({ user }) => {
				updateProfile(user, {
					displayName: data.name,
					photoURL: 'https://upload.wikimedia.org/wikipedia/ru/4/42/Kenny-sp.jpg',
				})
					.then(() => {
						setIsDisable(true);
						setTimeout(() => {
							setIsDisable(false);
							navigate(routes.SIGN_IN);
						}, 3000);
					})
			})
			.catch((error) => {
				setIsDisableError(true);

			});
	};

	return (
		<>

			<form className={styles.formSignUp} onSubmit={handleSubmit(onSubmit)}>
				<h2 className={styles.titleSignUp}>Sign Up</h2>

				<Input
					keyData="name"
					inputName="Name"
					inputType="text"
					placeholder="Your Name"
					register={register}
					required
				/>
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
					placeholder="Your pasword"
					register={register}
					required
				/>
				<Input
					keyData="password_confirm"
					inputName="Confirm password"
					inputType="password"
					placeholder="Confirm password"
					register={register}
					required
				/>
				<button className={styles.buttonSignUp}>Sign up</button>
				<p className={styles.alreadyHaveAccount}>
					Already have an account?{' '}
					<Link className={styles.signInLink} to={routes.SIGN_IN}>
						Sign In
					</Link>
				</p>
			</form>

		</>
	);
};

export default SignUp;
