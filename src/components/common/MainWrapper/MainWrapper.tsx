import React, { FC, useEffect, useState } from 'react';
import { TABS_CONFIG } from '../../../types/configs';
import { IWithChildren } from '../../../types/types';
import Header from './Header/Header';
import styles from "./MainWrapper.module.scss"
import Navigation from './Navigation/Navigation';

const MainWrapper: FC<IWithChildren> = ({children}) => {
    const [activeTabItem, setActiveTabItem] = useState<number>(TABS_CONFIG[0].id);
    const handleSetActiveTabItem = (id: number) => setActiveTabItem(id);

    useEffect(() => {
        fetch('http://www.omdbapi.com/?s=Jason&page=2&apikey=55394393')
        .then(response => response.json())
        .then(json => console.log(json))
        }, []);

        const getPosts = async () => {
            const { results: posts } = await fetch("http://www.omdbapi.com/?s=Jason&page=2&apikey=55394393")
            .then(response => response.json())
            .catch(e => console.log(e))
        }

    return (
        <div className={styles.wrapper}>
                <Header/>
            <div className={styles.content}>
                <nav>
                    <Navigation 
                        config={TABS_CONFIG} 
                        onClick={handleSetActiveTabItem}
                        activeTabItem={activeTabItem}
                    />
                </nav>
                <main>
                    {children}
                </main>
            </div>
        </div>
    );
};

export default MainWrapper;