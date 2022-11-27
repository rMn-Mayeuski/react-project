import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TABS_CONFIG } from '../../../../types/configs';
import { IMovie } from '../../../../types/types';
import { Routes } from '../../../App/AppRoutes/routes';
import Navigation from './Navigation/Navigation';

const RenderNavigation: FC = () => {

    const navigate = useNavigate()
    const handleUserNavigateSettings = () => navigate(Routes.settings)
    const handleUserNavigateHome = () => navigate(Routes.home)

    const dispatch = useDispatch();
    const [activeTabItem, setActiveTabItem] = useState<number>(TABS_CONFIG[0].id);
    const [posts, setPosts] = useState<IMovie[]>([]);

    const {cards} = useSelector((state: any) => state.selectedCard);

    const handleSetActiveTabItem = (id: number) => setActiveTabItem(id);

        const filterPosts = () => {
            switch (activeTabItem) {
                case 1:
                    handleUserNavigateHome()
                    return
                case 2:
                    alert("2")
                    return
                case 3:  
                    setPosts(cards.filter((card: IMovie) => card.favorite));
                    return
                case 4:
                    handleUserNavigateSettings()
                    return
            }
        }
        
        useEffect(() => {
            filterPosts()
        }, [activeTabItem])

    return (
        <>
            <Navigation 
                config={TABS_CONFIG} 
                onClick={handleSetActiveTabItem}
                activeTabItem={activeTabItem}
            />
        </>
    );
};

export default RenderNavigation;