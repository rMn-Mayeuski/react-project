import React, { FC } from 'react';
import NoNAuthUser from './NoNAuthUser/NoNAuthUser';
import styles from "./UserInfo.module.scss"

const UserInfo: FC = () => {
	return (
		<>
			<NoNAuthUser />
		</>
	);
};

export default UserInfo;