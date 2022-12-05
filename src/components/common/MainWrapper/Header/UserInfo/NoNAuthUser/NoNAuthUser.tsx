import React, { FC } from 'react';
import nonUser from "../../../../../../assets/icons/ArrowNoNAuth.svg"
import User from "../../../../../../assets/icons/user.svg"
import styles from "./NoNAuthUser.module.scss"
import { routes } from "../../../../../App/AppRoutesAuth/AppRouterAuth"
import { Link } from 'react-router-dom';

const NoNAuthUser: FC = () => {
	return (
		<Link to={routes.SIGN_IN} title="sign-in">
			<div className={styles.nonUser}>
				<div className={styles.nonUserAvatar}>
					<img src={User} alt="User" />
				</div>
				<div className={styles.nonUserLeft}>
					<p>Войти</p> 
					<img src={nonUser} alt="Icon" />
				</div>
			</div>
		</Link>
	);
};

export default NoNAuthUser;