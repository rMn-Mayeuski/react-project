import { Route, Routes } from 'react-router-dom';
import AuthorizationBase from '../components/AuthorizationBase/AuthorizationBase';
import MainPage from '../components/MainPage/MainPage';
import Login from '../pages/Login';
import LoginNewPass from '../pages/LoginNewPassword';
import Registration from '../pages/Registration';
import Reset from '../pages/Reset';
import SetNewPassword from '../components/ResetPassword/SetNewPassword/SetNewPassword';
import ResetPasswordSend from '../components/ResetPassword/ResetPasswordSend/ResetPasswordSend';


export enum routes {
	START_PAGE = '/',
	SIGN_IN = '/sign-in',
	SIGN_IN_NEW_PASSWORD = '/sign-in-new',
	SIGN_UP = '/sign-up',
	RESET_PASSWORD = '/reset-password',
	RESET_PASSWORD_SEND = '/reset-password-send',
	SET_NEW_PASSWORD = '/set-new-password',
}

export const AppRouter = () => {
	return (
		<Routes>
			<Route path={routes.START_PAGE} element={<MainPage />}>
			</Route>
			<Route element={<AuthorizationBase />}>
				<Route path={routes.SIGN_IN} element={<Login />} />
				<Route path={routes.SIGN_UP} element={<Registration />} />
				<Route path={routes.RESET_PASSWORD} element={<Reset />} />
				<Route path={routes.SIGN_IN_NEW_PASSWORD} element={<LoginNewPass />} />
				<Route path={routes.SET_NEW_PASSWORD} element={<SetNewPassword />} />
				<Route path={routes.RESET_PASSWORD_SEND} element={<ResetPasswordSend />} />
			</Route>
		</Routes>
	);
};
