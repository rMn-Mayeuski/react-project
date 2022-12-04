import styles from "./ModalWindow.module.css"

export enum ModalText {
	SUCCES_SIGN_UP = 'You are successfully registered!',
	SUCCES_SIGN_IN = 'You are successfully signed in.',
	SUCCES_SIGN_OUT = 'You are successfully signed out.',
	SUCCES_USER_INFORMATION_UPDATED = 'Your personal information was updated',
	SUCCES_USER_PASSWORD_CHANGED = 'Your password has been changed !',
	RESET_PASSWORD_POPUP = 'You will receive an email example@gmail.com with a link to reset your password!',
	ERROR_SIGN_UP = 'Email or user already exist',
	ERROR_PASSWORD = 'Incorrect password',
	ERROR_EMAIL = 'Incorrect email',
	ERROR_EMAIL_NOT_FOUND = 'Email not found',
}



interface IModalMessage {
	message: ModalText;
}

const ModalBase = (message: IModalMessage) => {
	return (
		<div className={styles.modalWindow}>
			<p className={styles.modalWindowMessage}>{message.message}</p>
		</div>
	);
};

export default ModalBase;
