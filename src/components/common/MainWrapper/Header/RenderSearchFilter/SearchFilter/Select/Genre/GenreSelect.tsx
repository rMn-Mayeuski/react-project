import React, { FC} from 'react';
import Select from 'react-select';
import "./GenreSelect.scss"

interface IGenreSelect{
    genreSelectValue: any
    genreSelectOnChange: any
    genreSelectOptions: any
}
    
const GenreSelect: FC<IGenreSelect> = ({
    genreSelectOnChange,
    genreSelectOptions,
    genreSelectValue
}) => {

    return (
        <Select
            classNamePrefix="genre-select"
            placeholder="Выберите жанр"
            onChange={genreSelectOnChange}
            value={genreSelectValue}
            options={genreSelectOptions}
            isSearchable={true}
        />
    );
};

export default GenreSelect;