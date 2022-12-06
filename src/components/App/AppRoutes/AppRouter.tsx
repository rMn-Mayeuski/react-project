import React, { FC } from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import { PRIVATE_ROUTES, PUBLIC_ROUTES, } from './routes';

const AppRouter: FC = () => {
	const currentUserToken = localStorage.getItem("token");
	return (
		<Routes>
			{currentUserToken
				?
				PRIVATE_ROUTES.map(({ path, Element }) => <Route key={path} path={path} element={<Element />} />)
				:
				PUBLIC_ROUTES.map(({ path, Element }) => <Route key={path} path={path} element={<Element />} />)
			}
			<Route path={"*"} element={<Navigate to={currentUserToken ? "/home" : "/sign-in"} replace />} />
		</Routes >
	);
};

export default AppRouter;