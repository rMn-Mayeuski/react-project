import React, {useEffect, useState} from 'react';
import SelectedMovie from "../../components/common/MoviesList/SelectedMovie/SelectedMovie";
import {IMovie} from "../../types/types";
import MovieService from "../../services/movieService";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const MoviePage = () => {

    const {id = 1} = useParams();
    const [movie, setMovie] = useState<IMovie>({});

    const getMovies = async () => {
        const response = await MovieService.getMovieById(+id);

        return setMovie(response)
    }

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <>
            <SelectedMovie movie={movie}/>
        </>
    );
};

export default MoviePage;