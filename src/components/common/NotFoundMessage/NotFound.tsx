import React, { FC } from 'react';
import notFound from "../../../assets/Group 150.png"
import { INotFound } from '../../../types/types';
import Loading from '../Loading/Loading';
import styles from "./NotFound.module.scss"

const NotFound: FC<INotFound> = ({text, isLoading= false}) => {
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
                </h2>
            </div>
            }
        </>
    );
};

export default NotFound;