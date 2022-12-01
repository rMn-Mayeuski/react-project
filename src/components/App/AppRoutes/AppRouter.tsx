import React, {FC} from 'react';
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from './routes';

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
			<Route path={"*"} element={<Navigate to={isAuth ? "/home" : "/signin"} replace />} />
		</Routes >
	);
};

export default AppRouter;