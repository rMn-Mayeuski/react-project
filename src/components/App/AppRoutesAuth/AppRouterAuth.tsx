import { Route, Routes } from 'react-router-dom';
import AuthorizationBase from "../../common/Authorization/AuthorizationBase/AuthorizationBase";
import Login from "../../../Pages/Login/Login";
import LoginNewPass from "../../../Pages/LoginNewPassword/LoginNewPassword";
import Registration from "../../../Pages/Registration/Registration";
import Reset from "../../../Pages/Reset/Reset";
import SetNewPassword from "../../common/Authorization/ResetPassword/SetNewPassword/SetNewPassword";
import ResetPasswordSend from "../../common/Authorization/ResetPassword/ResetPasswordSend/ResetPasswordSend";

export enum routes {
	SIGN_IN = '/sign-in',
	SIGN_IN_NEW_PASSWORD = '/sign-in-new',
	SIGN_UP = '/sign-up',
	RESET_PASSWORD = '/reset-password',
	RESET_PASSWORD_SEND = '/reset-password-send',
	SET_NEW_PASSWORD = '/set-new-password',
}

export const AppRouterAuth = () => {
	return (
		<Routes>
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
