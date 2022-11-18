import React, {FC, useEffect, useState} from 'react';
import MainWrapper from '../common/MainWrapper/MainWrapper';
import "./App.scss";
import AppRouter from './AppRoutes/AppRouter';

    const App: FC = () => {

    return (
        <MainWrapper>
            <AppRouter/>
        </MainWrapper>
    );
    };

export default App;