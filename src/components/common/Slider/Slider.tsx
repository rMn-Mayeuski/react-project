import React, {FC} from 'react';
import {Swiper} from 'swiper/react';
import {Navigation} from 'swiper';
import "swiper/css/navigation";

import styles from "./Slider.module.scss";
import SliderButton, {SliderButtonDirection} from "./SliderButton/SliderButton";
import {IWithChildren} from "../../../types/types";


const Slider: FC<IWithChildren> = ({children}) => {

    return (
        <>
            {!!children &&
                <div className={styles.sliderDescription}>
                    <h2 className={styles.sliderTitle}>Похожие</h2>
                    <div className={styles.sliderButtons}>
                        <SliderButton className="prevBtn" direction={SliderButtonDirection.prev}/>
                        <SliderButton className="nextBtn" direction={SliderButtonDirection.next}/>
                    </div>
                </div>
            }
            <Swiper
                className={styles.swiperWrapper}
                modules={[Navigation]}
                spaceBetween={30}
                centeredSlides={false}
                slidesPerView={2}
                slidesPerGroup={1}
                navigation={{
                    nextEl: ".nextBtn",
                    prevEl: ".prevBtn",
                }}
                breakpoints={{
                    850: {
                        slidesPerView: 3,
                        slidesPerGroup: 1,
                        spaceBetween: 20,
                        centeredSlides: false,
                    },
                    1000: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                        spaceBetween: 40,
                        centeredSlides: false,
                    },
                }}
            >
                {children}
            </Swiper>
        </>
    );
};

export default Slider;