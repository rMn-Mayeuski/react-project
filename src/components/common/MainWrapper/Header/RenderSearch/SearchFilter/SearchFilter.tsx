import React, { FC } from 'react';
import { ISearchFilterCondition } from '../../../../../../types/types';
import cross from "../../../../../../assets/Cancel.svg"
import styles from "./SearchFilter.module.scss"
import CountrySelect from './Select/CountrySelect';

const SearchFilter: FC<ISearchFilterCondition> = ({
    condition = false,
    onClick,
}) => {

    const stopPropagation = (e:any) => e.stopPropagation()

    const handlerStylesSearchFilter = condition ? styles.filterActive : styles.filter;

    return (
        <div 
        className={handlerStylesSearchFilter}
        onClick={onClick}
        >
            <form 
            className={styles.filterContent}
            onClick={stopPropagation}
            >
                <div className={styles.filterContentTitle}>
                    <h2>Фильтр</h2>
                    <img onClick={onClick} src={cross} alt="cross" />
                </div>
                    <h3>Сортировка по</h3>
                <div className={styles.filterContentSort}>
                    <button 
                        className={styles.filterContentSortBtnR} 
                        type='button'
                    >
                        Рейтинг
                    </button>
                    <button 
                        className={styles.filterContentSortBtnL} 
                        type='button'
                    >
                        Год
                    </button>
                </div>
                <div className={styles.filterContentSearch}>
                    <h3>Название фильма, сериала</h3>
                    <input 
                        className={styles.input} 
                        type="text" 
                        placeholder='Текст...'
                    />
                </div>
                <div className={styles.filterContentCountry}>
                    <h3>Страна</h3>
                    <CountrySelect/>
                </div>
                <div className={styles.filterContentGenre}>
                    <h3>Жанр</h3>
                    <ul>
                        <input 
                            className={styles.input} 
                            type="text" 
                            placeholder='Текст...' 
                        />
                    </ul>
                </div>
                <div className={styles.filterContentYear}>
                    <h3>Год</h3>
                    <div>
                        <input 
                            className={styles.input} 
                            type="text" 
                            placeholder='От...' 
                        />
                        <input 
                            className={styles.input} 
                            type="text" 
                            placeholder='До...' 
                        />
                    </div>
                </div>
                <div className={styles.filterContentRating}>
                    <h3>Рейтинг</h3>
                    <div>
                        <input 
                            className={styles.input} 
                            type="text" 
                            placeholder='От...' 
                        />
                        <input 
                            className={styles.input} 
                            type="text" 
                            placeholder='До...' 
                        />
                    </div>
                </div>
                <div className={styles.filterContentBtns}>
                    <button type='reset' className={styles.filterContentBtnsL}>
                        Очистить фильтр
                    </button>
                    <button type='button' className={styles.filterContentBtnsR}>
                        Поиск
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SearchFilter;