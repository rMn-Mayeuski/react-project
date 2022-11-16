import React, { FC } from 'react';
import { IMovie } from '../../types/types';

interface ISearchPageProps {
    posts: IMovie[],
    query: string,
}

const SearchPage: FC<ISearchPageProps> = ({posts = [], query = ""}) => {
    return (
        <div>
            
        </div>
    );
};

export default SearchPage;