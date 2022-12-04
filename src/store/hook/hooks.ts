import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import { RootStore, store } from '..';

export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
