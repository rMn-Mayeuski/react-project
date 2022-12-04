import React, { FC } from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import { PRIVATE_ROUTES, PUBLIC_ROUTES, } from './routes';

import AuthorizationBase from "../../common/Authorization/AuthorizationBase/AuthorizationBase";
import Login from "../../../Pages/Login/Login";
import LoginNewPass from "../../../Pages/LoginNewPassword/LoginNewPassword";
import Registration from "../../../Pages/Registration/Registration";
import Reset from "../../../Pages/Reset/Reset";
import SetNewPassword from "../../common/Authorization/ResetPassword/SetNewPassword/SetNewPassword";
import ResetPasswordSend from "../../common/Authorization/ResetPassword/ResetPasswordSend/ResetPasswordSend";


export enum routes {
	START_PAGE = '/',
	SIGN_IN = '/sign-in',
	SIGN_IN_NEW_PASSWORD = '/sign-in-new',
	SIGN_UP = '/sign-up',
	RESET_PASSWORD = '/reset-password',
	RESET_PASSWORD_SEND = '/reset-password-send',
	SET_NEW_PASSWORD = '/set-new-password',
}

const AppRouter: FC = () => {
	const isAuth: boolean = true
	return (
		<Routes>
			{isAuth
				?
				PRIVATE_ROUTES.map(({ path, Element }) => <Route key={path} path={path} element={<Element />} />)
				:
				PUBLIC_ROUTES.map(({ path, Element }) => <Route key={path} path={path} element={<Element />} />)
			}
			<Route path={"*"} element={<Navigate to={isAuth ? "/home" : "/sign-in"} replace />} />
		</Routes >
	);
};

export default AppRouter;