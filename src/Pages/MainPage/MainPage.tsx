import React, { FC } from 'react';
import { IMovie } from '../../types/types';

export interface IMainPageProps {
    cards: IMovie[],
}

const MainPage: FC<IMainPageProps> = ({ cards }) => {
    return (
        <div>
            
        </div>
    );
};

export default MainPage;