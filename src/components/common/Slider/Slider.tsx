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
                spaceBetween={15}
                centeredSlides={false}
                slidesPerView={2}
                slidesPerGroup={2}
                navigation={{
                    nextEl: ".nextBtn",
                    prevEl: ".prevBtn",
                }}
                breakpoints={{
                    320: {
                        slidesPerGroup: 1,
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    730: {
                        slidesPerGroup: 2,
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    769: {
                        slidesPerGroup: 3,
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1025: {
                        slidesPerGroup: 3,
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1251: {
                        slidesPerGroup: 4,
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
            >
                {children}
            </Swiper>
        </>
    );
};

export default Slider;