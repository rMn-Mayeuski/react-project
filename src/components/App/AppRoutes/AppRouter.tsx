import React, {FC, useEffect} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from './Routes';

const AppRouter: FC = () => {

    const isAuth: boolean = true

    return (
            <Routes>
                {isAuth
                    ?
                    PRIVATE_ROUTES.map(({ path, Element}) => <Route key={path} path={path} element={<Element />} />)
                    :
                    PUBLIC_ROUTES.map(({ path, Element}) => <Route key={path} path={path} element={<Element />} />)
                }
                <Route path={"*"} element={<Navigate to={isAuth ? "/home" : "/signin"} replace />} />
            </Routes>
    );
};

export default AppRouter;