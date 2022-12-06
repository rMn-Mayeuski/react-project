import React, { FC, useEffect, useState } from 'react';
import GoTopBtn from "../../../assets/icons/GoTopBtn.svg"
import styles from "./GoTopButton.module.scss"

const GoTopButton: FC = () => {

    const [ showGoTop, setShowGoTop ] = useState( false )

    const handleVisibleButton = () => {
        setShowGoTop( window.pageYOffset > 50 )
    }

    const handleScrollUp = () => {
        window.scrollTo( { left: 0, top: 0, behavior: 'smooth' } )
    }

    useEffect( () => {
        window.addEventListener( 'scroll', handleVisibleButton )
    }, [] )

    return (
        <div className={ showGoTop ? '' : styles.goTopHidden } onClick={ handleScrollUp }>
            <button type={'button'} className={ styles.goTop }>
                <img src={GoTopBtn} alt="Go Top Botton" />
            </button>
        </div>
    );
};

export default GoTopButton;