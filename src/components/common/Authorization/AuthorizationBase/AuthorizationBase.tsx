//шаблон авторизации, ресета пароля

import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Logo from '../Logo/Logo';
import styles from './AuthorizationBase.module.css';

const AuthorizationTemplate = (props: any) => {
	return (
		<div className={styles.authorizationWrapper}>
			<Logo />
			<Outlet />
			<Footer />
		</div>
	);
};

export default AuthorizationTemplate;
