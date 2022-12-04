import * as yup from 'yup';

export const SignUpScheme = yup.object().shape(
	{
		email: yup.string().email("неверная почта").required("Почта обязательна"),
		password: yup.string().min(6, "длина парол должна ыть больше 6 символов").required("Пароль обязателен")
	}
)