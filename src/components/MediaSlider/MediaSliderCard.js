import React from 'react';

const MediaSliderCard = ({ img, text, alt }) => (
    <div className="mediaSliderCard">
        <img className="mediaSliderCard__img" src={img} alt={alt} />
        <p className="mediaSliderCard__text">
            {text}
        </p>
    </div>
);

export default MediaSliderCard;
