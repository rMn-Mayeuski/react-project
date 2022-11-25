import React, { FC } from "react";

import MainPage from "../../../Pages/MainPage/MainPage";
import SearchPage from "../../../Pages/SearchPage/SearchPage";
import MoviePage from "../../../Pages/MoviePage/MoviePage";

//Authorization

import AuthorizationBase from "../../common/Authorization/AuthorizationBase/AuthorizationBase";
/*import Login from "../../../Pages/Login/Login";*/
import LoginNewPass from "../../../Pages/LoginNewPassword/LoginNewPassword";
import Registration from "../../../Pages/Registration/Registration";
import Reset from "../../../Pages/Reset/Reset";
import SetNewPassword from "../../common/Authorization/ResetPassword/SetNewPassword/SetNewPassword";
import ResetPasswordSend from "../../common/Authorization/ResetPassword/ResetPasswordSend/ResetPasswordSend";

export interface RouteObject {
	caseSensitive?: boolean;
	children?: RouteObject[];
	element?: React.ReactNode;
	index?: boolean;
	path?: string;
}

export interface IRoute extends RouteObject {
	path: string,
	Element: FC,
}

export enum Routes {
	home = "/home",
	movie = "/home/:id",
	search = "/search",
	/*sign_in = "/sign-in",*/
	sign_up = "/sign-up",
	sign_in_new_password = "sign-in-new",
	reset_password = '/reset-password',
	set_new_password = '/set-new-password',
	reset_password_send = '/reset-password-send',
}

/*
<Route element={
	<AuthorizationBase />}>
	< Route path = { Routes.sign_in } element = {< Login />} />
		< Route path = { Routes.sign_up } element = {< Registration />} />
			< Route path = { Routes.reset_password } element = {< Reset />} />
				< Route path = { Routes.sign_in_new_password } element = {< LoginNewPass />} />
					< Route path = { Routes.set_new_password } element = {< SetNewPassword />} />
						< Route path = { Routes.reset_password_send } element = {< ResetPasswordSend />} />
							< /Route>*/

export const PUBLIC_ROUTES: IRoute[] = [
	{ path: Routes.home, Element: MainPage },
	{ path: Routes.search, Element: SearchPage },
	{ path: Routes.movie, Element: MoviePage },
	/*{ path: Routes.sign_in, Element: Login },*/
	{ path: Routes.sign_up, Element: Registration },
	{ path: Routes.reset_password, Element: Reset },
	{ path: Routes.sign_in_new_password, Element: LoginNewPass },
	{ path: Routes.set_new_password, Element: SetNewPassword },
	{ path: Routes.reset_password_send, Element: ResetPasswordSend }
]

export const PRIVATE_ROUTES: IRoute[] = [
	...PUBLIC_ROUTES,

]