import React, { FC } from 'react';
import filter from "../../../../../assets/Search.svg"
import styles from "./Search.module.scss"

const Search: FC = () => {
    return (
        <form className={styles.search}>
            <input type="text" placeholder='Search'/>
            <img src={filter} alt="Filter" />
        </form>
    );
};

export default Search;