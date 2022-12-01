import React, { FC } from 'react';
import { AppRouterAuth } from './AppRoutesAuth/AppRouterAuth';
import { useLocation } from 'react-router-dom';
import MainWrapper from '../common/MainWrapper/MainWrapper';
import AppRouter from './AppRoutes/AppRouter';
import "./App.scss";

const App: FC = () => {

	const location = useLocation();

	return(
		(location.pathname === "/sign-in" || 
		location.pathname === "/sign-up" ||
		location.pathname === '/sign-in-new' ||
		location.pathname === '/set-new-password' ||
		location.pathname === '/reset-password' ||
		location.pathname === '/reset-password-send') 
				? 
				<AppRouterAuth /> 
				:
				<MainWrapper>
					<AppRouter />
				</MainWrapper>
	)
};

export default App;