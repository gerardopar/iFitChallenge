import React, { useState } from 'react';
// importing components
import MediaSliderCard from './MediaSliderCard';
// import data
import SLIDER_DATA from '../../data/cardslider';

const MediaSlider = () => {
    const [activeSlide, setActiveSlide] = useState(SLIDER_DATA[0]);
    const [slides, setSlides] = useState(SLIDER_DATA);

    const handleNextSlide = () => {
        const nextSlide = activeSlide.index + 1;
        setActiveSlide(SLIDER_DATA[nextSlide]);
    };

    const handlePrevSlide = () => {
        const prevSlide = activeSlide.index - 1;
        setActiveSlide(SLIDER_DATA[prevSlide]);
    };

    return (
        <div className="slider">
            <button
              disabled={activeSlide.index === SLIDER_DATA.length - 1}
              onClick={handleNextSlide}
              type="button"
              className="material-icons slider__btn slider__btn--right"
            >
                chevron_right
            </button>
            <button
              disabled={activeSlide.index === 0}
              onClick={handlePrevSlide}
              type="button"
              className="material-icons slider__btn slider__btn--left"
            >
                chevron_left
            </button>
            <div className="slider__container">
                <div className="slider__wrap" style={{ transform: `translateX(-${activeSlide.index * (100 / slides.length)}%)` }}>
                    {
                        slides.map((slide) => (
                            <MediaSliderCard key={slide.id} {...slide} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};


export default MediaSlider;
