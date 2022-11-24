import React, { FC, useState } from 'react';
import Select from 'react-select';
import { IMovie } from '../../../../../../../../types/types';
import * as constants from "../../../../../../../../constants/allGenre";
import "./GenreSelect.scss"
    
    const isMulti = true;
    
    const GenreSelect: FC = ({countries}: IMovie) => {

        const [currentGenre, setCurrentGenre] = useState<any>([]);

        const getValue = () => {
            return currentGenre 
                ? constants.options.filter(c => currentGenre.indexOf(c.value) >= 0)
                : []
        }
        
        console.log(currentGenre);
        
        const onChange = (newValue: any) => {
            setCurrentGenre(isMulti ? newValue.map((v:any) => v.value) : newValue.value)
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