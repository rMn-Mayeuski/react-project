import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainPage from '../../../Pages/MainPage/MainPage';
import { setCardsAction } from '../../../store/reducer/selectedCardReducer';
import { TABS_CONFIG } from '../../../types/configs';
import { IWithChildren } from '../../../types/types';
import { IMovieCardProps } from '../MovieCard/MovieCard';
import Header from './Header/Header';
import styles from "./MainWrapper.module.scss"
import Navigation from './Navigation/Navigation';

const MainWrapper: FC<IWithChildren> = ({children}) => {

    const dispatch = useDispatch();
    const [activeTabItem, setActiveTabItem] = useState<number>(TABS_CONFIG[0].id);
    const [posts, setPosts] = useState<IMovieCardProps[]>([]);

    const {cards} = useSelector((state: any) => state.selectedCard);

    const handleSetActiveTabItem = (id: number) => setActiveTabItem(id);

    // useEffect(() => {
    //     fetch('http://www.omdbapi.com/?s=Jason&page=2&apikey=55394393')
    //     .then(response => response.json())
    //     .then(json => console.log(json))
    //     }, []);

        const setReduxPosts = (payload: IMovieCardProps[]) => {
            dispatch(setCardsAction(payload))
        }

        const getPosts = async () => {
            const { results: posts } = await fetch("http://www.omdbapi.com/?s=Jason&page=2&apikey=55394393")
            .then(response => response.json())
            .catch(e => console.log(e))
    
            if (Array.isArray(posts)) {
                setReduxPosts(posts)
            }
        }

        const filterPosts = () => {
            switch (activeTabItem) {
                case 2:  
                    setPosts(cards.filter((card: IMovieCardProps) => card.favorite));
                    return
    
                default:
                    setPosts(cards)
            }
        }

        useEffect(() => {
            getPosts()
        }, [])

        useEffect(() => {
            setPosts(cards)
        }, [cards])

        useEffect(() => {
            filterPosts()
        }, [activeTabItem, cards])

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
                    <MainPage cards={posts}/>
                </main>
            </div>
        </div>
    );
};

export default MainWrapper;