import React, { FC } from 'react';
import nonUser from "../../../../../../assets/ArrowNoNAuth.svg"
import User from "../../../../../../assets/user.svg"
import styles from "./NoNAuthUser.module.scss"
import { routes } from "../../../../../App/AppRoutesAuth/AppRouterAuth"
import { Link } from 'react-router-dom';

const NoNAuthUser: FC = () => {
	return (
		<div className={styles.nonUser}>
			<div className={styles.nonUserAvatar}>
				<img src={User} alt="User" />
			</div>
			<div className={styles.nonUserLeft}>
				<Link to={routes.SIGN_IN} title="sign-in">
					<p>Sign In</p> </Link>
				<img src={nonUser} alt="Icon" />
			</div>
		</div>)

};

export default NoNAuthUser;