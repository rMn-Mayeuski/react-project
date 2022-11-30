import React, {FC, Suspense, useEffect, useState} from 'react';
import {IMovie} from "../../types/types";
import MovieService from "../../services/movieService";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Loading from '../../components/common/Loading/Loading';

const SelectedMovie = React.lazy(() => import("../../components/common/MoviesList/SelectedMovie/SelectedMovie"));

const MoviePage: FC = () => {
    
    const {id = 1} = useParams();
    const [movie, setMovie] = useState<IMovie>({});

    const getMovies = async () => {
        const response = await MovieService.getMovieById(+id);

        return setMovie(response)
    }

    useEffect(() => {
        getMovies()
    }, [])

    console.log(movie);
    

    return (
        <Suspense fallback={<Loading/>}>  
            <SelectedMovie movie={movie}/>
        </Suspense>
    );
};

export default MoviePage;