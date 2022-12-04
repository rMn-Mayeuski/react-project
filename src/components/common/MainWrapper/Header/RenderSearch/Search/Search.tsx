import React, { ChangeEventHandler, FC, FormEventHandler } from 'react';
import filter from "../../../../../../assets/Search.svg"
import styles from "./Search.module.scss"

interface ISearchProps {
    name?: string
    value?: string,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    onSubmit?: FormEventHandler<HTMLFormElement>,
}

const Search: FC<ISearchProps> = ({ 
    value = "",
    name = "", 
    onSubmit,
    onChange, 
}) => {
    return (
        <form 
            className={styles.search} 
            onSubmit={onSubmit}
        >
            <input 
                name={name}
                type="text" 
                placeholder='Search'
                value={value}
                onChange={onChange}
            />
            <img src={filter} alt="Filter" />
        </form>
    );
};

export default Search;