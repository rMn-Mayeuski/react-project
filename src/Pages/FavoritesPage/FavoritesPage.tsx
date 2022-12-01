import React, {FC, useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {IMovie} from "../../types/types";
import MoviesList from "../../components/common/MoviesList/MoviesList";
import NotFound from '../../components/common/NotFoundMessage/NotFound';
const FavoritesPage: FC = () => {
    const handleSetFavorites = () => {
        setFavoritess(filterFavorites)
    }

    const [favoritess, setFavoritess] = useState<IMovie[]>([]);

    const { favorites } = useSelector((state: any) => state.favorites);

    const filterFavorites = favorites.filter((movie: IMovie) => movie.favorite);

    useEffect(() => {
        handleSetFavorites()
    }, [favorites])

    useEffect(() => {
        console.log(filterFavorites)
    }, [])

    return (
        <>
            {!!favorites.length
                ?
                <MoviesList movies={favoritess}/>
                :
                <NotFound text='В избранном пока ничего нет.'/>
            }
        </>
    );
};

export default FavoritesPage;