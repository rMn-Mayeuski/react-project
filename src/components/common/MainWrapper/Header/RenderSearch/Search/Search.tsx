import React, { FC } from 'react';
import filter from "../../../../../../assets/icons/Search.svg"
import { ISearchProps } from '../../../../../../types/types';
import styles from "./Search.module.scss"

const Search: FC<ISearchProps> = ({ 
    value = "",
    name = "", 
    onSubmit,
    onChange,
    onClick, 
}) => {
    return (
        <form 
            className={styles.search} 
            onSubmit={onSubmit}
        >
            <input 
                name={name}
                type="text" 
                placeholder='Поиск'
                value={value}
                onChange={onChange}
            />
            <img src={filter} alt="Filter" onClick={onClick}/>
        </form>
    );
};

export default Search;