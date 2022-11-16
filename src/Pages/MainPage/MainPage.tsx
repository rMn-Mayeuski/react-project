import React, { FC } from 'react';
import MovieCard, { IMovieCardProps } from '../../components/common/MovieCard/MovieCard';

export interface IMainPageProps {
    cards: IMovieCardProps[],
}

const MainPage: FC<IMainPageProps> = ({ cards }) => {
    return (
        <div>
            {cards.map((post: IMovieCardProps) => <MovieCard {...post} key={post.id} />)}
        </div>
    );
};

export default MainPage;