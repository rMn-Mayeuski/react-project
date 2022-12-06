import React, { FC } from 'react';
import notFound from "../../../assets/img/notFound.jpg"
import {INotFound, IWithChildren} from '../../../types/types';
import Loading from '../Loading/Loading';
import styles from "./NotFound.module.scss"

const NotFound: FC<INotFound & IWithChildren> = ({text, isLoading = false, children}) => {
    return (
        <>
            {isLoading 
                ? 
            <Loading/>
                :
            <div className={styles.notFound}>
                <img src={notFound} alt="NotFound" />
                <h2>
                    {text}
                    {children}
                </h2>
            </div>
            }
        </>
    );
};

export default NotFound;