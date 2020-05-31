import React from 'react';

const Equipment = ({ imgSrc, title }) => (
    <div className="equipment__col">
        <div className="equipment__img">
            <img className="equipment__img--src" src={imgSrc} alt={title} />
        </div>
        <h3 className="equipment__name">{title}</h3>
    </div>
);

export default Equipment;
