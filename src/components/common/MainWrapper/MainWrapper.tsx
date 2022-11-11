import React, { FC } from 'react';
import { IWithChildren } from '../../../types/types';
import Header from './Header/Header';
import styles from "./MainWrapper.module.scss"
import Navigation from './Navigation/Navigation';

const MainWrapper: FC<IWithChildren> = ({children}) => {
    return (
        <div className={styles.wrapper}>
                <Header/>
            <div className={styles.content}>
                <nav>
                    <Navigation/>
                </nav>
                <main>
                    {children}
                </main>
            </div>
        </div>
    );
};

export default MainWrapper;