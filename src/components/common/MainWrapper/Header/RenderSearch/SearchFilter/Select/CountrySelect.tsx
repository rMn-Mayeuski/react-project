import React, { FC, useState } from 'react';
import Select from 'react-select';
import { IMovie } from '../../../../../../../types/types';
import "./CountrySelect.scss"
    
    const isMulti = true;
    
    const CountrySelect: FC = ({countries}: IMovie) => {

        const options = [
            { value: "usa", label: 'США' },
            { value: 'germany', label: 'Германия' },
            { value: 'england', label: 'Великобритания' },
            ];

        const [currentCountries, setCurrentCountries] = useState<any>([]);

        const getValue = () => {
            return currentCountries 
                ? options.filter(c => currentCountries.indexOf(c.value) >= 0) 
                : []
        }
    
        const onChange = (newValue: any) => {
            setCurrentCountries(isMulti ? newValue.map((v:any) => v.value) : newValue.value)
        }

        return (
            <Select
            classNamePrefix="country-select"
            placeholder="Выберите страну"
            onChange={onChange}
            value={getValue()}
            options={options}
            isSearchable={true}
            isMulti={isMulti}
        />
        );
    };
    
    export default CountrySelect;