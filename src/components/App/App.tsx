import React, { FC } from 'react';
import MainWrapper from '../common/MainWrapper/MainWrapper';
import "./App.scss";
import { AppRouterAuth } from './AppRoutesAuth/AppRouterAuth';
import AppRouter from './AppRoutes/AppRouter';
import { useLocation } from 'react-router-dom';

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