import React, { FC } from 'react';
import MainWrapper from '../common/MainWrapper/MainWrapper';
import "./App.scss";

import { AppRouterAuth } from './AppRoutesAuth/AppRouterAuth';
import AppRouter from './AppRoutes/AppRouter';

const App: FC = () => {
	return (
		<>
			<MainWrapper>
				<AppRouter />
			</MainWrapper>
			<AppRouterAuth />
		</>
	);
};

export default App;