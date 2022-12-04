import React, {FC} from 'react';
import SwiperClass, {Swiper, useSwiper} from 'swiper/react';
import {Navigation} from 'swiper';
import "swiper/css/navigation";

import styles from "./Slider.module.scss";
import SliderButton, {SliderButtonDirection} from "./SliderButton/SliderButton";
import {IWithChildren} from "../../../types/types";


const Slider: FC<IWithChildren> = ({children}) => {
   // @ts-ignore
    const swiperr = (swiper: SwiperClass) => {
        return  swiper.navigation.destroy()
    }

    return (
        <>
            <div className={styles.sliderDescription}>
                {!!children && <h2 className={styles.sliderTitle}>Похожие</h2>}
                <div className={styles.sliderButtons}>
                    <SliderButton className="prevBtn" direction={SliderButtonDirection.prev}/>
                    <SliderButton className="nextBtn" direction={SliderButtonDirection.next}/>
                </div>
            </div>
            <Swiper
                className={styles.swiperWrapper}
                modules={[Navigation]}
                spaceBetween={40}
                centeredSlides={false}
                slidesPerView={1}
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
                        centeredSlides: true,
                    },
                    1000: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                        spaceBetween: 40,
                        centeredSlides: true,
                    },
                }}
            >
                {children}
            </Swiper>
        </>
    );
};

export default Slider;