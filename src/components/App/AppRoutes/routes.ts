import React, { FC } from "react";

import MainPage from "../../../Pages/MainPage/MainPage";
import SearchPage from "../../../Pages/SearchPage/SearchPage";
import MoviePage from "../../../Pages/MoviePage/MoviePage";

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
	search = "/search",
}



export const PUBLIC_ROUTES: IRoute[] = [
	{ path: Routes.home, Element: MainPage },
	{ path: Routes.search, Element: SearchPage },
	{ path: Routes.movie, Element: MoviePage },
]

export const PRIVATE_ROUTES: IRoute[] = [
	...PUBLIC_ROUTES,

]