import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TABS_CONFIG } from '../../../types/configs';
import { IMovie, IWithChildren } from '../../../types/types';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import styles from "./MainWrapper.module.scss"

const MainWrapper: FC<IWithChildren> = ({children}) => {

    const dispatch = useDispatch();
    const [activeTabItem, setActiveTabItem] = useState<number>(TABS_CONFIG[0].id);
    const [posts, setPosts] = useState<IMovie[]>([]);

    const {cards} = useSelector((state: any) => state.selectedCard);

    const handleSetActiveTabItem = (id: number) => setActiveTabItem(id);

        const filterPosts = () => {
            switch (activeTabItem) {
                case 2:
                    alert("2")
                    return
                case 3:  
                    setPosts(cards.filter((card: IMovie) => card.favorite));
                    return
                case 4:
                    alert("4")
                    return
                default:
                    setPosts(cards)
            }
        }

        // useEffect(() => {
        //     filterPosts()
        // }, [activeTabItem])

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