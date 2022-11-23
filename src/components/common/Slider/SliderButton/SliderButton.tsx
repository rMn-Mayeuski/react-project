import React, {FC, MouseEventHandler} from 'react';
import styles from "./SliderButton.module.scss";



export enum SliderButtonDirection {
    prev = "prev",
    next = "next"
}

interface SliderButtonProps {
    direction: SliderButtonDirection
    className?: string
    svgClassName?: string
}

const SliderButton: FC<SliderButtonProps> = ({direction, className, svgClassName}) => {
    return (
        <>
            {direction === SliderButtonDirection.next
                ?
                <button className={`${className} ${styles.sliderBtn}`}>
                    <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={styles.sliderBtnSvg} d="M12.5 11L17.5 6M17.5 6L12.5 1M17.5 6H1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                :
                <button className={`${className} ${styles.sliderBtn}`}>
                    <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={styles.sliderBtnSvg} d="M6.5 11L1.5 6M1.5 6L6.5 1M1.5 6H18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            }
        </>
    );
};

export default SliderButton;