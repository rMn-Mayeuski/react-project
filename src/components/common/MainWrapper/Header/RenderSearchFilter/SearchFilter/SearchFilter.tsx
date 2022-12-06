import React, { ChangeEventHandler, FC, FormEventHandler, MouseEventHandler } from 'react';
import { ISearchFilterCondition } from '../../../../../../types/types';
import { useFilter } from '../../../../../../provider/SearchFilterProvider';
import { SORTBTNS_CONFIG } from '../../../../../../types/configs';
import SortBtns from './SortBtns/SortBtns';
import GenreSelect from './Select/Genre/GenreSelect';
import CountrySelect from './Select/Country/CountrySelect';
import cross from "../../../../../../assets/icons/Cancel.svg"
import styles from "./SearchFilter.module.scss"

export interface ISearchFilterProps{
    formSubmit: FormEventHandler<HTMLFormElement>,
    filterSearchChange: ChangeEventHandler<HTMLInputElement>,
    value: string,
    countrySelectValue: string,
    countrySelectOnChange: ChangeEventHandler<HTMLInputElement>,
    countrySelectOptions: any,
    genreSelectValue: string,
    genreSelectOnChange: ChangeEventHandler<HTMLInputElement>,
    genreSelectOptions: any,
    yearFromValue: string,
    yearFromChange: ChangeEventHandler<HTMLInputElement>,
    yearToValue: string,
    yearToChange: ChangeEventHandler<HTMLInputElement>,
    ratingFromValue: string,
    ratingFromChange: ChangeEventHandler<HTMLInputElement>,
    ratingToValue: string,
    ratingToChange: ChangeEventHandler<HTMLInputElement>,
    resetForm: MouseEventHandler,
}

const SearchFilter: FC<ISearchFilterCondition & ISearchFilterProps> = ({
    condition = false,
    onClick,
    formSubmit,
    filterSearchChange,
    value = "",
    countrySelectValue,
    countrySelectOnChange,
    countrySelectOptions,
    genreSelectOnChange,
    genreSelectOptions,
    genreSelectValue,
    yearFromValue,
    yearFromChange,
    yearToValue,
    yearToChange,
    ratingFromValue,
    ratingFromChange,
    ratingToValue,
    ratingToChange,
    resetForm,
}) => {
    const filter = useFilter()

    const handlerStylesSearchFilter = condition ? styles.filterActive : styles.filter;

    const handlerBackgroundSearchFilter = filter?.filterActive ? styles.filterBackgroundActive : "";

    return (
        <div className={handlerBackgroundSearchFilter} onClick={filter?.handleClickAway}>
            <div 
            className={handlerStylesSearchFilter}
            onClick={onClick}
            >
                <form 
                className={styles.filterContent}
                onSubmit={formSubmit}
                >
                    <div className={styles.conteiner}>
                        <div className={styles.filterContentTitle}>
                            <h2>Фильтр</h2>
                            <img onClick={onClick} src={cross} alt="cross" />
                        </div>
                        <div className={styles.filterContentSort}>
                            <h3>Сортировка по</h3>
                            <div className={styles.filterContentSortConteiner}>
                                <SortBtns 
                                    config={SORTBTNS_CONFIG}
                                    onClick={filter?.handleSetActiveTabItem}
                                    activeTabItem={filter?.activeTabItem}
                                />
                            </div>
                        </div>
                        <div className={styles.filterContentSearch}>
                            <h3>Название фильма, сериала</h3>
                            <input 
                                className={styles.input} 
                                type="text" 
                                placeholder='Текст...'
                                value={value}
                                onChange={filterSearchChange}
                            />
                        </div>
                        <div className={styles.filterContentCountry}>
                            <h3>Страна</h3>
                            <CountrySelect 
                                countrySelectValue={countrySelectValue} 
                                countrySelectOnChange={countrySelectOnChange}
                                countrySelectOptions={countrySelectOptions}
                            />
                        </div>
                        <div className={styles.filterContentGenre}>
                            <h3>Жанр</h3>
                            <GenreSelect
                                genreSelectOnChange={genreSelectOnChange}
                                genreSelectOptions={genreSelectOptions}
                                genreSelectValue={genreSelectValue}
                            />
                        </div>
                        <div className={styles.filterContentYear}>
                            <h3>Год</h3>
                            <div>
                                <input 
                                    className={styles.input} 
                                    type="text" 
                                    placeholder='От...'
                                    value={yearFromValue} 
                                    onChange={yearFromChange}
                                    maxLength={4}
                                />
                                <input 
                                    className={styles.input} 
                                    type="text" 
                                    placeholder='До...' 
                                    value={yearToValue} 
                                    onChange={yearToChange}
                                    maxLength={4}
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
                                    value={ratingFromValue} 
                                    onChange={ratingFromChange}
                                    maxLength={2}
                                />
                                <input 
                                    className={styles.input} 
                                    type="text" 
                                    placeholder='До...' 
                                    value={ratingToValue} 
                                    onChange={ratingToChange}
                                    maxLength={2}
                                />
                            </div>
                    </div>
                    </div>
                    <div className={styles.filterContentBtns}>
                        <button 
                            type='reset' 
                            className={styles.filterContentBtnsL}
                            onClick={resetForm}
                        >
                            Очистить фильтр
                        </button>
                        <button 
                            type='submit' 
                            className={styles.filterContentBtnsR}
                            onClick={filter?.filterMenuActive}
                        >
                            Поиск
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SearchFilter;