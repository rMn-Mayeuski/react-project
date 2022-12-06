import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TABS_CONFIG } from '../../../../types/configs';
import { Routes } from '../../../App/AppRoutes/routes';

const RenderNavigation: FC = () => {

    const navigate = useNavigate()
    const handleUserNavigateSettings = () => navigate(Routes.settings)
    const handleUserNavigateHome = () => navigate(Routes.home)
    const handleUserNavigateFavorites = () => navigate(Routes.favorites)
    const handleUserNavigateTrends = () => navigate(Routes.trends)

    const [activeTabItem, setActiveTabItem] = useState<number>(TABS_CONFIG[0].id);

    const handleSetActiveTabItem = (id: number) => setActiveTabItem(id);

        // const filterPosts = () => {
        //     switch (activeTabItem) {
        //         case 1:
        //             handleUserNavigateHome()
        //             return
        //         case 2:
        //             handleUserNavigateTrends()
        //             return
        //         case 3:
        //             handleUserNavigateFavorites();
        //             return
        //         case 4:
        //             handleUserNavigateSettings()
        //             return
        //     }
        // }

        // // console.log(activeTabItem);
        
        // useEffect(() => {
        //     filterPosts()
        // }, [activeTabItem])

    return (
        <>
            {/* <Navigation 
                config={TABS_CONFIG} 
                onClick={handleSetActiveTabItem}
                activeTabItem={activeTabItem}
            /> */}
        </>
    );
};

export default RenderNavigation;