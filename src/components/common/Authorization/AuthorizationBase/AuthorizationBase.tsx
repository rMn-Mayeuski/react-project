//шаблон авторизации, ресета пароля

import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Logo from '../Logo/Logo';
import styles from './AuthorizationBase.module.css';
import { GlobalStyles } from '../GlobalStyles';

const AuthorizationTemplate = (props: any) => {
	return (
		<div className={styles.authorizationWrapper}>
			<Logo />
			<Outlet />
			<Footer />
			<GlobalStyles />
		</div>
	);
};

export default AuthorizationTemplate;
