import React, { FC, useState } from 'react';
import Select from 'react-select';
import { IMovie } from '../../../../../../../../types/types';
import * as constants from "../../../../../../../../constants/allGenre";
import "./GenreSelect.scss"
    
    const isMulti = true;
    
    const GenreSelect: FC = ({countries}: IMovie) => {

        const [currentCountries, setCurrentCountries] = useState<any>([]);

        const getValue = () => {
            return currentCountries 
                ? constants.options.filter(c => currentCountries.indexOf(c.value) >= 0) 
                : []
        }
    
        const onChange = (newValue: any) => {
            setCurrentCountries(isMulti ? newValue.map((v:any) => v.value) : newValue.value)
        }

        return (
            <Select
            classNamePrefix="genre-select"
            placeholder="Выберите жанр"
            onChange={onChange}
            value={getValue()}
            options={constants.options}
            isSearchable={true}
            isMulti={isMulti}
        />
        );
    };
    
    export default GenreSelect;