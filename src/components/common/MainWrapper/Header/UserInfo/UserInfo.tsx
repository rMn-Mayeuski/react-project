import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import AuthUser from './AuthUser/AuthUser';
import NoNAuthUser from './NoNAuthUser/NoNAuthUser';
import styles from "./UserInfo.module.scss"

const UserInfo: FC = () => {

	const currentUserToken = localStorage.getItem("token");

	return (
		<>
			{!!currentUserToken ? 
				<AuthUser/>
					:
				<NoNAuthUser />
			}
		</>
	);
};

export default UserInfo;