import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import NotificationBase, { NotificationText } from '../Authorization/NotificationBase/NotificationBase';
import { Routes } from '../../App/AppRoutes/routes';
import { routes } from '../../App/AppRoutesAuth/AppRouterAuth';
import Input from './Input/Input';
import { setUser } from '../../../store/reducer/userReducer';
import { useAppDispatch } from '../../../store/hook/hooks';

export {
	useState,
	useForm,
	Link,
	useNavigate,
	getAuth,
	signInWithEmailAndPassword,
	NotificationBase,
	NotificationText,
	Routes,
	routes,
	Input,
	setUser,
	useAppDispatch
}
