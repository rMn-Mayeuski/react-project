import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import store, { RootStore } from '../store';

export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
