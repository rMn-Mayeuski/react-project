import React, {FC} from 'react';
import {IMovie, IMoviePerson} from "../../../../../types/types";

import {convertNumber} from "../../../../../utils/convertNumberUtil";
import styles from "../SelectedMovie.module.scss";
import {convertDate} from "../../../../../utils/convertDateUtil";

interface SelectedMovieElementsProps {
    movie: IMovie
}

const SelectedMovieElements: FC<SelectedMovieElementsProps> = ({movie}) => {

    const getFilteredPersons = (value: string) => {
        return movie.persons?.filter((item: IMoviePerson) =>
            item.enProfession === value ? item.name : undefined
        );
    };

    const config = [
        {
            title: "Год производства",
            value: movie.year,
            condition: movie.year ? movie.year : "",
        },
        {
            title: "Премьера в мире",
            value: convertDate(movie.premiere?.world, "D MMMM YYYY"),
            condition: movie.premiere?.world ? movie.premiere?.world : "",
        },
        {
            title: "Бюджет",
            value: `$${convertNumber(movie.budget?.value)}`,
            condition: movie.budget?.value ? movie.budget?.value : "",
        },
        {
            title: "Сборы в мире",
            value: `$${convertNumber(movie.fees?.world?.value)}`,
            condition: movie.fees?.world?.value ? movie.fees?.world?.value : "",
        },
        {
            title: "Страна",
            value: movie.countries?.map((item) => <p key={item.name}>{item.name}</p>),
            condition: movie.countries?.length ? movie.countries?.length : "",
        },
        {
            title: "Производство",
            value: movie.productionCompanies?.map((item) => <p key={item.name}>{item.name}</p>),
            condition: movie.productionCompanies?.length ? movie.productionCompanies?.length : ""
        },
        {
            title: "В главных ролях",
            value: getFilteredPersons("actor")?.map((actor) => (
                <p key={actor.id}>{actor.name}</p>
            )).slice(0,4),
            condition: getFilteredPersons("actor")?.length
        },
        {
            title: "Режиссер",
            value: getFilteredPersons("director")?.map((director) => (
                <p key={director.id}>{director.name}</p>
            )),
            condition: getFilteredPersons("director")?.length
        },
        {
            title: "Продюссер",
            value: getFilteredPersons("producer")?.map((producer) => (
                <p key={producer.id}>{producer.name}</p>
            )),
            condition: getFilteredPersons("producer")?.length,
        }
    ];

    return (
        <div className={styles.movieElements}>
            {config.map((item) =>
                item.condition && (
                    <div key={item.title} className={styles.movieElement}>
                        <div className={styles.movieElementTitle}>{item.title}</div>
                        <div className={styles.movieElementValue}>{item.value}</div>
                    </div>
                )
            )}
        </div>
    );
};

export default SelectedMovieElements;