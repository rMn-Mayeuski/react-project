//Logo  - link на главную страницу 

import { Link } from 'react-router-dom';

import { Routes } from '../../../App/AppRoutes/routes';
import LogoIcon from './LogoIcon/LogoIcon';
import styles from './Logo.module.css'

const Logo = () => {
	return (
		<Link className={styles.logo} to={Routes.home} title="logo">
			<LogoIcon />
		</Link>
	)
};

export default Logo;


