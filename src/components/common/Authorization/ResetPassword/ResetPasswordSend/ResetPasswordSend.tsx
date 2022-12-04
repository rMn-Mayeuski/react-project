import { SubmitHandler, useForm } from 'react-hook-form';

import { useNavigate } from 'react-router-dom';

import Input, { IInputData } from '../../Input/Input';
import { Routes } from '../../../../App/AppRoutes/routes'; // роут через сетТаймАут на главную страницу?
import styles from './ResetPasswordSend.module.scss';

// отправка на почту ресетать пароль с последующим переходом на страницу логина.
const ResetPasswordSend = () => {
	const { register } = useForm<IInputData>();
	/*const navigate = useNavigate();*/
	const currentUserEmail = JSON.stringify(sessionStorage.getItem("userEmail"));
	console.log(typeof (currentUserEmail)) //string
	return (
		<form className={styles.formReset}>
			<h2 className={styles.titleReset}>Изменение пароля</h2>
			<p className={styles.receivePassToEmail}> `Вы получите электронное письмо на {currentUserEmail} для изменения вашего пароля!</p>
			<Input
				inputName="Email"
				inputType="email"
				placeholder={currentUserEmail} //TODO: решить завтра эту ошибку
				keyData="email"
				register={register}
				required
			/>
			<button className={styles.buttonReset}>Изменить</button>
		</form>
	);
};

export default ResetPasswordSend;
