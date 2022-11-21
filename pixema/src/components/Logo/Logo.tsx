//Logo  - link на главную страницу 

import { Link } from 'react-router-dom';

import { routes } from '../../router/AppRouter';
import LogoIcon from './LogoIcon/LogoIcon';
import styles from './Logo.module.css'

const Logo = () => {
	return (
		<Link className={styles.logo} to={routes.START_PAGE} title="logo">
			<LogoIcon />
		</Link>
	)
};

export default Logo;


