import React, {FC} from "react";

import MainPage from "../../../Pages/MainPage/MainPage";
import SearchPage from "../../../Pages/SearchPage/SearchPage";
import MoviePage from "../../../Pages/MoviePage/MoviePage";
import FilterSearchPage from "../../../Pages/FilterSearchPage/FilterSearchPage";
import FavoritesPage from "../../../Pages/FavoritesPage/FavoritesPage";
import TrendsPage from "../../../Pages/TrendsPage/TrendsPage";
import SettingsPage from "../../common/Authorization/SettingsPage/SettingsPage";

export interface RouteObject {
	caseSensitive?: boolean;
	children?: RouteObject[];
	element?: React.ReactNode;
	index?: boolean;
	path?: string;
}

export interface IRoute extends RouteObject {
	path: string,
	Element: FC,
}

export enum Routes {
    home = "/home",
    movie = "/home/:id",
    favorites = "/favorites",
    trends = "/trends",
    search = "/search",
    filterSearch = "/filterSearch",
    settings = "/settings",
}

export const PUBLIC_ROUTES: IRoute[] = [
    {path: Routes.home, Element: MainPage},
    {path: Routes.favorites, Element: FavoritesPage},
    {path: Routes.trends, Element: TrendsPage},
    {path: Routes.search, Element: SearchPage},
    {path: Routes.movie, Element: MoviePage},
    {path: Routes.filterSearch, Element: FilterSearchPage},
    {path: Routes.settings, Element: SettingsPage},
]

export const PRIVATE_ROUTES: IRoute[] = [
	...PUBLIC_ROUTES,

]