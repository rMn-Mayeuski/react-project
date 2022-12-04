import React, { ChangeEventHandler, FC, FormEventHandler, MouseEventHandler } from 'react';
import filter from "../../../../../../assets/Search.svg"
import styles from "./Search.module.scss"

interface ISearchProps {
    name?: string
    value?: string,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    onSubmit?: FormEventHandler<HTMLFormElement>,
    onClick?: MouseEventHandler
}

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