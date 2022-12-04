import styles from "./NotificationBase.module.css"

export enum NotificationText {
	signed_up = 'Вы успешно зарегистрированы!',
	signed_in = 'Вход успешно выполнен!',
	signed_out = 'Выход успешно выполнен!',
	reset_password = 'Вы получите электронное письмо example@gmail.com со ссылкой на восстановление пароля',
	error_signed_up = ' Пользователь уже существует',
	wrong_password = 'Неверный пароль',
	wrong_email = 'Неверный адрес эл.почты',
	email_not_found = 'Адрес эл.почты не найден',
}



interface INotificationMessage {
	message: NotificationText;
}

const NotificationBase = (message: INotificationMessage) => {
	return (
		<div className={styles.NotificationBase}>
			<p className={styles.NotificationBaseMessage}>{message.message}</p>
		</div>
	);
};

export default NotificationBase;
